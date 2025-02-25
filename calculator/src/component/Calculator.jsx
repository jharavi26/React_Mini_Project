import React, { useState } from 'react';
import "./Style.css"
import { useCalculator } from '../context/Context';

const Calculator = () => {

  const {state, dispatch} = useCalculator();

  const handleClick = (e)=>{
    if(e.target.tagName === "BUTTON")
    {
      const btnValue = e.target.value;

      if (btnValue === "AC") {
        dispatch({ type: "CLEAR" });
      } else if (btnValue === "DEL") {
        dispatch({ type: "DELETE" });
      } else if (btnValue === "=") {
        dispatch({ type: "EVALUATE" });
      } else {
        dispatch({ type: "ADD_VALUE", payload: btnValue });
      }
    }
  };

  return (
    <div className='container'>
      <div className='calculator'>
        <input type = "text" value = {state.value} 
         onChange={(e) => dispatch({ type: "ADD_VALUE", payload: e.target.value })}
        readOnly></input>
        <div className='first' onClick={handleClick}>
          <button value = "AC">AC</button>
          <button value= "/">/</button>
          <button value= "*">*</button>
          <button value = "DEL">DEL</button>
        </div>
        <div className='second' onClick={handleClick}>
        <button value = "7">7</button>
        <button value = "8">8</button>
        <button value = "9">9</button>
        <button value = "-">-</button>
        </div>
        <div className='third' onClick={handleClick}>
        <button value ="4">4</button>
        <button value ="5">5</button>
        <button value ="6">6</button>
        <button value ="+">+</button>
        </div>
        <div className='fourth' onClick={handleClick}>
        <button value ="1">1</button>
        <button value ="2">2</button>
        <button value ="3">3</button>
        <button value =".">.</button>
        </div>
        <div className='fifth' onClick={handleClick}>
        <button value ="/">/</button>
        <button value ="0">0</button>
        <button value ="=" className='equal'>=</button>
        </div>

      </div>
      
    </div>
  )
}

export default Calculator
