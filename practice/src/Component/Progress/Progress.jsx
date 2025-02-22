import React, { useEffect, useState } from 'react';
import "./style.css"

function Progress({value=0}) {
  const [display , setDisplay] = useState(value);
  const [percentage , setPercentage] = useState(value);

  useEffect(()=>{
    const timer = setInterval(() => {
      setDisplay((val)=>val+1)
    }, 100);
  return ()=>clearInterval(timer);  
  },[]);

  useEffect(()=>{
    setPercentage(Math.max(0, Math.min(100, display)));
  },[display])

  return (
    <div className='container'>
      <div className='panel'>
        <span style={{color : percentage > 49 ? "white" : "black"}}>{percentage}%</span>
        <div style={{width : `${percentage}%`}}/>
     </div>
      
    </div>
  )
}

export default Progress
