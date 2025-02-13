import React, { useState } from 'react';
import "./Tab.css";

function ComponentA (){
  return <h1>Component A </h1>
}
function ComponentB (){
  return <h1>Component B </h1>
}
function ComponentC (){
  return <h1>Component C </h1>
}
function ComponentD (){
  return <h1>Component D </h1>
}

function Tab() {
  const tablist = [ 
    {
      id  : "a",
      label : "Component A",
      Component : ComponentA
    },
    {
      id  : "b",
      label : "Component B",
      Component : ComponentB
    },
    {
      id  : "c",
      label : "Component C",
      Component : ComponentC
    },
    {
      id  : "d",
      label : "Component D",
      Component : ComponentD
    }
  ] 

  const [selectIndex , setSelectIndex] = useState(0)

  const handleClick = (index)=>{
    setSelectIndex(index)
  }

  const Components  = tablist[selectIndex].Component;

  return (
    <>
    <div className='tablist'>
      { tablist.map((component, index)=>{
         return <button onClick={()=>handleClick(index)} key = {component.id}>{tablist[index].label}</button>
      })
     
      } 
    </div>
    <Components/>
    </>


  )
}



export default Tab
