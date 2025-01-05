import React, { useState } from 'react'

function Counter({name, list}) {
  const [count, setCount] = useState(0);

  const [flag, setFlag] = useState(true);
  const handleToggle = ()=>(setFlag(!flag));

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
        <ul>
          {list.map((list, index)=>(
          <li key={index}>{list}</li>
          ))}
        </ul>

       

    <hr></hr>

   

    <div>
      
        {flag ? <div>This is Art</div> :  null }
        <button onClick = {handleToggle}>
          {flag ? 'HIDE' : 'SHOW'}
        </button>
    </div>
      
    </div>
  )
 
}

export default Counter


