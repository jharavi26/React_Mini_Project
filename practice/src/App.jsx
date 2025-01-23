import { useState } from 'react'
import './App.css'
import Counter from './Component/Counter'
import Focus from './Component/Focus';


function App() {

  let cars = ['tata', 'honda', 'maruti', 'hundai', 'toyota'];
 
  
  return (
    <>
     <h1>React-Practice</h1>
    <Focus />
     <Counter name="Art" list={cars}/>
     <ol>
      {
        cars.map((item)=>{
          return <li key = {cars.index}>{item}</li>
        })

     }
     </ol>
     </>
  )
}

export default App
