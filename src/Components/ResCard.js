import React from 'react'
import './ResCard.css'

const Card = ({info}) => {
  const {id, name, date, time, number} = info
  return (
    <div className='reservation-card'>
      <h1>{name}</h1>
      <h1>{date}</h1>
      <h1>{time} pm</h1>
      <h1>Number of Guests: {number}</h1>
      <button>Cancel</button>
    </div>
  )
}

export default Card
