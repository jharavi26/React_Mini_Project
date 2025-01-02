import React from 'react'
import "./Calculator.css"
function Calculator() {

  const arr = ['1','2','3','4','5','6','7','8','9','0','+','-','*','/','.','C','=']
  return (
    <div className ="container">
      <h1>Calculator</h1>
      <form>
        <input type="text"/>
      </form>
      <div className='box'>
        {
          arr.map((item,index)=>(
            <button id={item}
            key={index}
            className='cell'>
            {item}</button>
          ))
        }

      </div>
      
    </div>
  )
}

export default Calculator
