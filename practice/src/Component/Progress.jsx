import React, { useState } from 'react';
import  data  from "./data.json"
import "./Style.css";

function Progress() {

  return (
    <div>
      <h1>Faq </h1>
      <div className='container' >
        {
          data.faq.map((obj,index)=>{
            return <Accordian key = {index} qna = {obj}/>
          })
        }
          

      </div>
      
    </div>
  )
}

export default Progress

export const Accordian  = ({qna})=>{
  const [answer , setAnswer] = useState(false)

  return (
  <>
  <div className='question'>
  
  <h3>{qna.question}</h3>
  <span className='btn' onClick={()=>setAnswer(!answer)}>{answer  ? "-" : "+"}</span>
  { answer && 
  <p style = {{fontWeight : "normal"}}>{qna.answer}</p>
}
</div>

</>
)
}
