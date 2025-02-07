import React from 'react';
import data from "./data.json"
import Accordian from './Accordian';


function Faq() {
  return (
    <div>
      <h1>FAQ's</h1>
      {
        data.faq.map((obj , index)=>{
          return <Accordian key = {index} qna ={obj} />
        })
      }
 
      
    </div>
  )
}

export default Faq
