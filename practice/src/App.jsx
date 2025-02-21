import React from 'react'
import Focus from './Component/Focus';


const ComponentA = ()=>{
  return <div>Component A</div>
}

const ComponentB = ()=>{
  return <div>Component B</div>
}

const ComponentC = ()=>{
  return <div>Component C</div>
}

const ComponentD = ()=>{
  return <div>Component D</div>
}




function App() {

  const tabList  = [
    {
      id :"a",
      label : "ComponentA",
      Component : ComponentA,
    },
    {
      id :"b",
      label : "ComponentB",
      Component : ComponentB,
    },
    {
      id :"c",
      label : "ComponentC",
      Component : ComponentC,
    },
    {
      id :"d",
      label : "ComponentD",
      Component : ComponentD,
    },
  ]


 
  return (
    <div>
      <Focus  tabList = {tabList}/>
  


      
    </div>
  )
}

export default App;
