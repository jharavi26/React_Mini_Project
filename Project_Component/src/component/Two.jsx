import React, { useState } from 'react'

export default function Two() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button style={{margin:"10px"}} onClick={()=>setCount(count+1)}>Add Me </button>
      <span>{count}</span>
      <button style={{margin:"10px"}} onClick={()=>setCount(count-1)}>Remove Me</button>
      <button onClick ={()=>setCount(0)}>Reset</button>
          </div>
  )
}
