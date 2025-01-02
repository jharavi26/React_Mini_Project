import { useEffect, useState } from 'react'
import './App.css'
import Hello from './component/Hello'
import Two from './component/Two'
import Three from './component/Three'
import Four from './component/Four'
import Five from './component/Five'


function App() {
  const items = ["Apple","Mango","Banana", "Orange","Pineapple"]
  const fetchImages = async ()=>{
    const url ='https://jsonplaceholder.typicode.com/photos';
    const res = await fetch(url);
    const result =await res.json();
    console.log(result);
  }


  useEffect(()=>{

  }, [])
 

  return (
    <>
    <button>
      {"<"}
    </button>
    <img src="" alt="not found"/>
    <button>
      {">"}
    </button>
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
