import React, { useState } from 'react'


const Focus = ({tabList}) => {

  const [index , setIndex] =useState(0);

  const handleClick = (id)=>{
    setIndex(id)
  }

  const ComponentResult = tabList[index].Component;

  return (
    <div>
      <h1>Custom Tab Component </h1>



      {
        tabList.map((item, index)=>{
          return <button key = {index} onClick={()=>handleClick(index)}>{item.label}</button>
        })
      }
      <ComponentResult />
     
      
    </div>
  )
}

export default Focus
