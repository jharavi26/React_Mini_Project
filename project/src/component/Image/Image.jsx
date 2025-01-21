import React, { useEffect, useRef, useState } from 'react';
import "./Image.css"

const Image = () => {

  const [imageUrl, setImageUrl] = useState([]);
  const [index, setIndex] = useState(0);
  const ref = useRef(null);


useEffect(()=>{
  const art = fetch("https://picsum.photos/v2/list?page=1&limit=30")
  art.then((res)=> res.json())
  .then((data)=>{
    setImageUrl(data[index].download_url);
  }) 
},[index])
  
const handleNext = ()=>{
  setIndex((previndex=> previndex+1))
}

const handleLeft = ()=>{
  if(index>0){
    setIndex((previndex=>previndex-1))
  }
}

useEffect(()=>{
  ref.current = setInterval(handleNext,1000);
  return ()=>clearInterval(ref.current)
},[])

  return (
    <div onMouseEnter ={()=>clearInterval(ref.current)} 
    onMouseLeave ={()=>{ref.current = setInterval(handleNext,1000)}} className='container'>
      <div onClick = {handleLeft} className = "left-btn">◀️</div>
      <div className='imagelist'>
        <img src = {imageUrl} alt="image"/>
        
      </div>
      
        <div onClick={handleNext} className ="right-btn" >▶️</div>
      
      
    </div>
  )
}

export default Image
 