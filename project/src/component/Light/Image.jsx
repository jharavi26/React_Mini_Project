import React, { useEffect, useState } from 'react'

const Image = () => {

  const [imageUrl, setImageUrl] = useState([])


useEffect(()=>{
  const art = fetch("https://picsum.photos/v2/list?page=1&limit=30")
  art.then((res)=> res.json())
  .then((data)=>{
    setImageUrl(data);
  }) 
},[])
  
  return (
    <div className='container'>
      <div className = "left-btn"></div>
      <div className='imagelist'>
        {
          imageUrl.length > 0 ? (
            imageUrl.map((image, index)=>(
              <img 
              key = {index}
              src= {image.download_url}
              alt={`Image ${index + 1}`}
              style={{ height : '100px' , width: '200px', marginBottom: '10px', paddingRight : "10px" }}/>
              
            ))

          ) : (
            <p>Loading images...</p>
          )
        }
      </div>
      
        <div className='right-btn'>
      </div>
      
    </div>
  )
}

export default Image
 