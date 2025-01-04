import { useState } from 'react'
import './App.css'
import Counter from './Component/Counter'

function App() {

  let cars = ['tata', 'honda', 'maruti', 'hundai', 'toyota'];
 
  
  return (
    <>
     <h1>React-Practice</h1>
     <Counter name="Art" list={cars}/>
    </>
  )
}

export default App
