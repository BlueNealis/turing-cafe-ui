import React, { Component } from 'react';
import './App.css';
import ResCard from './Components/ResCard'

class App extends Component {
  constructor() {
    super()
    this.state= {
      reservations: [],
      cards:[]
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json)
    .then(data => this.setState({
      reservations: data
    }))
  }

  createReservationCards = () => {

  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
        </div>
      </div>
    )
  }
}

export default App;
