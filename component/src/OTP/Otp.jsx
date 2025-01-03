import React from 'react'
import './Otp.css'

function Otp() {
  const array = ["","","",""];
  return (
    <div className='otp'>
      <h1>Two-Factor Authentication</h1>
      <div>
        {
          array.map((item, index)=>(
           <input type="text" maxLength="1" key={index}></input>
          ))
        }

      </div>
      <button>Submit</button>
      
    </div>
  )
}

export default Otp
