import React, { Component } from 'react'

class ReservationForm extends Component {
  constructor({id}) {
    super()
    this.state= {
      id: id,
      name: '',
      date: '',
      time:'',
      number: '',
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
    if(!this.state.name || !this.state.date || !this.state.time || !this.state.number) {
      this.setState({
        error: 'Please Fill Out All Fields'
      })
      return
    }
    let newReservation = { id:this.state.id,
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: this.state.number}
      this.props.addReservation(newReservation);
      this.resetForm()
  }

  resetForm = () => {
    let newId = this.state.id + 1
    this.setState({
      id: newId,
      name: '',
      date: '',
      time: '',
      number: '',
      error:''
    })
  }

  render() {
    return (
      <div>
        {this.state.error && <h1>{this.state.error}</h1>}
        <form onChange={this.handleChange}>
          <input onChange={this.handleChange} type='text' name='name' value={this.state.name} placeholder='name'></input>
          <input onChange={this.handleChange} type='text' name='date' value={this.state.date} placeholder='date mm/dd'></input>
          <input onChange={this.handleChange} type='text' name='time' value={this.state.time} placeholder='time'></input>
          <input onChange={this.handleChange} type='text' name='number' value={this.state.number} placeholder='number of guests'></input>
          <button onClick={this.handleSubmit}>Make Reservation</button>
        </form>
      </div>
    )
  }

}

export default ReservationForm
