import React, { useEffect, useState } from 'react';
import "./Light.css"

function Light() {

  const [state, setState] = useState(false);

  useEffect(()=>{
    setInterval(() => {
      
    }, 10000);

  },[])

  

  return (
    <div>
      <div className='red' ></div>
      <div className='green'></div>
      <div className='yellow'></div>
      
    </div>
  )
}

export default Light
