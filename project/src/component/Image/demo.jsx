import React, { useState } from 'react'

function Practice() {

  const [imageurl, setImageUrl] = useState([])

  async function getData(){
    const rat = await fetch("https://picsum.photos/v2/list?page=1&limit=30");
    const trs = await rat.json();
    setImageUrl(trs)
  } 

  return (
    <div>
      <button onClick={getData}>Display Image from Api</button>
      <div>
        {imageurl.map((image)=>(
           <img 
           key = {image.id}
           src = {image.download_url}
           style ={{width: "300px", height : "300px"}}/>

        ))
        }
      </div>

      
    </div>
  )
}

export default Practice
