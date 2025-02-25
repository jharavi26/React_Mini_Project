import React, { useEffect, useState } from 'react';
import "./style.css";

function Light() {
  const [current , setCurrent] = useState(0);

  const light = ["red" ,  "green" , "yellow"]

  useEffect(()=>{
    const interval = setInterval(() => {
      setCurrent((prev)=> (prev+1) % light.length)
      
    }, (current ? 3000 : 2000));

    return ()=>clearInterval(interval);

  },[current])

  return (
    <div className='traffic_light'>
      {
        light.map((item , index)=>{
          return <div key = {index} className={`light ${item} ${current === index ? "active" :  ""}`}></div>
        })
      }
      
    </div>
  )
}

export default Light
