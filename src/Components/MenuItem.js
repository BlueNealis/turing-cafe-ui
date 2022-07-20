import React from 'react'

const MenuItem = (props) => {
  return (
    <div id={props.id}>
    <h1>{props.name}</h1>
    <h1>{props.price}</h1>
    </div>
  )
}

export default MenuItem
