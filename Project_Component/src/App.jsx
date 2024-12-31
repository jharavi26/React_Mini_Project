import { useState } from 'react'
import './App.css'
import Hello from './component/Hello'
import Two from './component/Two'
import Three from './component/Three'
import Four from './component/Four'
import Five from './component/Five'


function App() {
  const items = ["Apple","Mango","Banana", "Orange","Pineapple"]
 

  return (
    <>
    <h1>Project-Component Building</h1>
    <Hello />
    <Two />
    <Three items = {items}/>
    <Four items = {items} itemsPerPage={1}/>
    <Five/>

    
    </>
  )
}

export default App
