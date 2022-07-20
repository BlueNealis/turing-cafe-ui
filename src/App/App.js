import React, { Component } from 'react';
import './App.css';
import ResCard from '../Components/ResCard'
import ReservationForm from '../Components/ReservationForm'

class App extends Component {
  constructor() {
    super()
    this.state= {
      reservations: [],
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


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <ReservationForm addReservation={this.addReservation} id={this.state.reservations.length+1}/>
        <div className='resy-container'>
          {this.state.reservations}
        </div>
      </div>
    )
  }
}

export default App;
