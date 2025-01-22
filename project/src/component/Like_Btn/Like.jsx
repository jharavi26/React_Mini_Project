import React, { useState } from 'react'
import {HeartIcon, SpinnerIcon} from './Heart_Icon'
import "./Like.css"

const Like = () => {
  const [liked, setLiked] = useState(false)
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);

  const handleLikeUnlike = async ()=>{
    setFetching(true)
    setError(null)
    try{
          const response  = await fetch ("https://www.greatfrontend.com/api/questions/like-button" ,{
            method : "POST",
            headers:{"Content-Type" : "application/json"},
            body : JSON.stringify({action : liked ? "unlike" : "like"})
          })

          if (response.status >= 200 && response.status<300){
            setLiked(!liked)
          } 
          else{
            const res = await response.json();
            setError(res.message)
            return; 
          }
  
        }
        finally{
          setFetching(false);
        }
        setLiked(!liked)
  }


  return (
    <div>
    <button disabled={fetching} className={`likeBtn ${liked ? "liked" : ""}`} onClick={handleLikeUnlike}>
      { fetching ? <SpinnerIcon /> : <HeartIcon />}
      {liked ? "liked" : "like" }

    </button>
    {error && <div className='error'> {error}</div>}
      
    </div>
  )
}

export default Like
