import React, { Component } from 'react'

class ReservationForm extends Component {
  constructor({id}) {
    super()
    this.state= {
      id: id,
      name: '',
      date: '',
      time:'',
      number: null,
      error: null
    }
  }

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let newReservation = { id:this.state.id,
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: this.state.number}
      this.props.newReservation(newReservation);
      this.resetForm()
  }

  resetForm = () => {
    let newId = this.state.id + 1
    this.setState({
      id: newId,
      name: '',
      date: '',
      time: '',
      number: null
    })
  }

  render() {
    return (
      <form onChange={this.handleChange}>
        <input type='text' name='name' value={this.state.name} placeholder='name'></input>
        <input type='text' name='date' value={this.state.date} placeholder='date mm/dd'></input>
        <input type='text' name='time' value={this.state.time} placeholder='time'></input>
        <input type='text' name='number' value={this.state.number} placeholder='number of guests'></input>
        <button onClick={this.handleSubmit}>Make Reservation</button>
      </form>
    )
  }

}

export default ReservationForm
