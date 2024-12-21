import React, { useEffect, useState } from 'react'

export default function Two() {
  const [count, setCount] = useState(0);
  const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple']
  const [time, setTime] = useState(60);
  const [backgroundColor, setBackgroundColor] = useState("green");

  useEffect(()=>{
    if(time>0){
      const timer = setTimeout(()=>setTime(time-1),1000);
      return ()=>clearTimeout(timer);
    }

  },[time])

  const handleClick = ()=>{
    const newColor = backgroundColor === "green" ? "orange" : "green";
    setBackgroundColor(newColor);

  }
  return (
    <div>
      <button style={{margin:"10px"}} onClick={()=> {setCount(count+1)}}>Add Me </button>
      <span>{count}</span>
      <button style={{margin:"10px"}} onClick={()=>setCount(count-1)}>Remove Me</button>
      <button onClick ={()=>setCount(0)}>Reset</button>

      <div onClick={handleClick} style={{backgroundColor ,  width:"800px", height:'300px',cursor:'pointer'}}>
      
      <ol>
        {fruits.map((fruit, index)=>{
          return <li key={index}> {fruit}</li>
        }
      )}
      </ol>
      <p>Click me to Change the Background color</p>
      <p>Time left is : {time} second</p>
      </div>



      </div>
  )
}
