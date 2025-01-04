import React, { useState } from 'react'

function Counter({name}) {
  const [count, setCount] = useState(0);
  const handleClick = ()=>{
    setCount(count+1);
  }
  const handleClick2 = ()=>{
    setCount(count-1)

  }
 
  return (
    <div>
      <p>My name is {name}</p>
      <button onClick={handleClick}>+</button>
      <p>Count is {count}</p>
      <button onClick={handleClick2}>-</button>
      
    </div>
  )
}

export default Counter
