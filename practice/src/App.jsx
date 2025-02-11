import { useEffect, useRef, useState } from 'react'
import './App.css'


function App() {

 



  
    
  
const handleChange =(e)=>{
 setValue(e.target.value)
} 
  
  return (
    <>
    <h1>Debouncing Concept </h1>
    <input type="text" placeholder='enter the text' value={value} onChange={handleChange}></input>
    <p>{text}</p>
    
     </>
  )
}

export default App
