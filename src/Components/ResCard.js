import React from 'react'

const Card = ({info}) => {
  const {id, name, date, time, number} = info
  return (
    <div>
      <h1>{name}</h1> 
    </div>
  )
}

export default Card
