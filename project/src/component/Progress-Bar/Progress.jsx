import React, { useEffect, useState } from 'react';
import "./Progress.css"

const Progress = () => {

  const [value, setValue] = useState(0)

  const [percentage, setPercentage] = useState(value)

  useEffect(()=>{
    setPercentage(Math.min(100, Math.max(value, 0)))

  },[value])

  useEffect(()=>{
    setInterval(() => {
      setValue((val)=>val+1)
      
    },100);

},[])

  return (
    <div className='container'>
      <h1>Progress Bar</h1>
      <div className='progress'>
        <span style={{color : percentage > 49 ? "white" : "black"}} >{percentage.toFixed()}%</span>
        <div style = {{width : `${percentage}%`}} role='progressbar'
        aria-valuemin={0}
        aria-valuenow={percentage.toFixed()}
        aria-valuemax={100}/>

        </div>
    

      
    </div>
  )
}

export default Progress