import React, { useState } from 'react';
import "./Light.css"

function Light() {

  const status = {
    Stop : "Red",
    Proceed : "Green",
    Caution : "Yellow"
  }

  const [state, setState] = useState();

  return (
    <div>
      <div className='red'></div>
      <div className='green'></div>
      <div className='yellow'></div>
      
    </div>
  )
}

export default Light
