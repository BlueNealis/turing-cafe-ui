import React, { Component } from 'react';
import './App.css';
import ResCard from '../Components/ResCard'
import ReservationForm from '../Components/ReservationForm'
import Menu from '../Components/Menu'

class App extends Component {
  constructor() {
    super()
    this.state= {
      reservations: [],
      menu: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then((data) => {
      let cards = []
      data.forEach((res) => {
        cards.push(<ResCard info={res} key={res.id}/>)
      })
      this.setState({
        reservations: cards
      })
    })
    fetch('http://localhost:3001/api/v1/menu')
    .then(response => response.json())
    .then((data) => {
      let menu = <Menu drinks={data.drinks} food={data.food}/>
    })
  }

  componentDidUpdate() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then((data) => {
      let cards = []
      data.forEach((res) => {
        cards.push(<ResCard info={res} key={res.id} deleteReservation={this.deleteReservation}/>)
      })
      this.setState({
        reservations: cards
      })
    })
  }

  deleteReservation = (resId) => {
    fetch(`http://localhost:3001/api/v1/reservations/${resId}`, {
      method: 'DELETE'
    })
  }

  addReservation = (newRes) => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method:'POST',
      headers: {
  'Content-Type': 'application/json',
},
body: JSON.stringify(newRes),
})
  }

showMenu() {

}

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
        <ReservationForm addReservation={this.addReservation} id={this.state.reservations.length+1}/>
        </div>
        <button onClick={this.showMenu}>Show Menu</button>
        <div className='resy-container'>
          {this.state.reservations}
        </div>
      </div>
    )
  }
}

export default App;
