import React from 'react'
import { useState } from 'react'

const Basic = () => {

  const [inputValue, setInputValue] = useState("");

  const [selectOption , setSelectOption ] = useState("Cricket")

  const [checkedValue, setCheckedValue] = useState(false)

  const handleChange = (e)=>{
    setInputValue(e.target.value)
  }

  const handleDropdown = (event)=>{
    setSelectOption(event.target.value)
  }

  const handleChecked = (e)=>{
    setCheckedValue(e.target.checked)
  }



  return (
    <div>
      <form >
        <label>Name:
        <input type="text" placeholder='Enter Your Name' value = {inputValue} onChange={handleChange}></input>
        </label>
        <br/>

      <label> Select Sports:
        <select value = {selectOption} onChange={handleDropdown}>
          <option value = "Cricket">Cricket</option>
          <option value = "Football">Football</option>
          <option value = "Hockey">Hockey</option>
          <option value = "Tennis">Tennis</option>
        </select>
        </label> 
        <br/>

        <label>Blue :
          <input type='checkbox' checked ={checkedValue} onChange={handleChecked}></input>

        </label>
      </form>
      <p>{inputValue}</p>
      <p>{selectOption}</p>
      
    </div>
  )
}

export default Basic
