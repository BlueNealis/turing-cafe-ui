import React from 'react'
import './ResCard.css'

const Card = ({info, deleteReservation}) => {
  const {id, name, date, time, number} = info
  return (
    <div id={id} className='reservation-card'>
      <h1>{name}</h1>
      <h1>{date}</h1>
      <h1>{time} pm</h1>
      <h1>Number of Guests: {number}</h1>
      <button onClick={() => deleteReservation(id)}>Cancel</button>
    </div>
  )
}

export default Card
