import React from 'react';
import "./Select.css"

function Pill({image , text , onClick} ) {
  return( 

  <span key={image} className='pill' onClick={onClick}>
    <img src = {image} alt = {text}/>
    <span>{text} &times;</span>
  </span>

  )
}

export default Pill
