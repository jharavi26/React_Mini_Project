import React, { useEffect, useRef, useState } from 'react';
import "./Otp.css"

function Otp({otpLength = 6}) {
  const [otpField, setOtpField ] =  useState(new Array (otpLength).fill(""));

  const ref = useRef([]);

  const handleKeyDown = (e , index)=>{
    const key = e.key;
    if(key === "ArrowLeft")
    {
      if(index-1 >= 0) ref.current[index-1].focus();
    }

    if(key === "ArrowRight")
    {
      if(index+1 < otpField.length) ref.current[index+1].focus();
    }

    if(key === "Backspace")
    {
      const copyField = [...otpField];
      copyField[index] = "";
      setOtpField(copyField)
      if(index-1 >= 0) ref.current[index-1].focus();
      return ;
    }

    if (isNaN(Number(key))){
      return;
    }
    const copyField = [...otpField];
    copyField[index] = key;
    if(index+1 < otpField.length)
    {
    ref.current[index+1].focus();
    }
    setOtpField(copyField)
  }

  const handleChange = ()=>{
    
  }


  useEffect(()=>{

    ref.current["0"].focus();
  },[])


  return (
    <div className='container'>
      {
        otpField.map((value, index)=>{
          return <input type='text' key={index} ref = {(currentInput)=>ref.current[index] = currentInput} onKeyDown={(e)=>handleKeyDown(e, index)} value={value} onChange={handleChange} />
        })
      }
      
      
    </div>
  )
}

export default Otp;


