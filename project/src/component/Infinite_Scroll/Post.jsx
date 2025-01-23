import React, { useEffect } from 'react'

const Post = ({data, setPage}) => {

useEffect(()=>{
  const observer = new IntersectionObserver((param)=>{
    if(param[0].isIntersecting){
      observer.unobserve(lastImage);
      setPage((page)=> page+1)
    }
  }, {threshold : 0.5})

  const lastImage  = document.querySelector(".images:last-child")
  if(!lastImage){
    return ;
  }

  observer.observe(lastImage)

  return ()=>{
    if(lastImage)
    {
      observer.unobserve(lastImage);
    }
    observer.disconnect
  }

},[data, setPage]);



  return (


    <div className='container'>
      {
        data.map((item, index)=>(
          <img src ={item.download_url} alt = "Image Loading"
          key = {item.id} className="images"
          /> 
        ))
      }
       
      
    </div>
  )
}

export default Post
