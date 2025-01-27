import React, { useState } from 'react'

const StarRating = ({starCount=5}) => {
  const [star, setStar] = useState();
 
  return (
    <>
    <h1>This is Star Rating Component</h1>
    <div className='star-container'>
    
      
      {new Array(starCount).fill(0).map((value, index) => {
        return (
        <span key={index} 
        className ={index < star ? "gold" : ""}
        onClick={()=>setStar(index+1)}>&#9733;</span>);
       

      })}
      
    </div>
    </>
  )
}

export default StarRating
