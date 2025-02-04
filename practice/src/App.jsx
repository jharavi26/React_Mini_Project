import { useEffect, useRef, useState } from 'react'
import './App.css'


function App() {

  const [count, setCount] = useState(0);
  const [password , setPassword] = useState(false)

  const handleChange = ()=>{
    setPassword(!password)

  }

 
  return (
    <>

    <h1>This is Practice Page</h1>
    
    <input type ={password ? "text" : "password"}></input>
    <button onClick={handleChange}>{password ? "hide" : "show"}</button>
    

    
     </>
  )
}

export default App
