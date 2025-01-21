import React, { useEffect, useRef, useState } from 'react';
import "./Image.css"

const Image = () => {

  const [imageUrl, setImageUrl] = useState([]);
  const [index, setIndex] = useState(0);
  const ref = useRef(null);


useEffect(()=>{
  const art = fetch("https://picsum.photos/v2/list?page=1&limit=30")
  art.then((res)=> res.json())
  .then((data)=> setImageUrl(data));
  }, [])

const handleNext = () =>{
  setIndex((prevIndex) => (prevIndex + 1) % imageUrl.length)
}

const handleLeft = () => {
  setIndex((prevIndex) => (prevIndex - 1 + imageUrl.length) % imageUrl.length);
};


useEffect(()=>{
  if (imageUrl.length > 0){
  ref.current = setInterval(handleNext,1000);
  return ()=>clearInterval(ref.current)
  }
}, [imageUrl.length])

  return (
    <div onMouseEnter ={()=>clearInterval(ref.current)} 
    onMouseLeave ={()=>{ref.current = setInterval(handleNext,1000)}} className='container'>
      <div onClick = {handleLeft} className = "left-btn">◀️</div>
      <div className='imagelist'>
        {
          imageUrl.length>0 ? (
        <img src = {imageUrl[index].download_url} alt="image"/>
        ) :
        (
          <p>Loading :</p>
        )}
        
      </div>
      
        <div onClick={handleNext} className ="right-btn" >▶️</div>
      
      
    </div>
  )
}

export default Image
 