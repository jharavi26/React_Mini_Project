import React, { useState } from 'react'

export default function Two() {
  const [count, setCount] = useState(0);
  const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple']
  return (
    <div>
      <button style={{margin:"10px"}} onClick={()=> {setCount(count+1)}}>Add Me </button>
      <span>{count}</span>
      <button style={{margin:"10px"}} onClick={()=>setCount(count-1)}>Remove Me</button>
      <button onClick ={()=>setCount(0)}>Reset</button>
      <ol>
        {fruits.map((fruit, index)=>{
          return <li key={index}> {fruit}</li>
        }
      )}
      </ol>

      </div>
  )
}
