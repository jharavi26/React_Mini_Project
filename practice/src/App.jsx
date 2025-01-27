import { useEffect, useRef, useState } from 'react'
import './App.css'


function App() {

  const [imageurl,  setImageUrl] = useState([]);
  const [index, setIndex] = useState(0);
  const ref  = useRef(null);

  async function getData(){
    const res = await fetch ("https://picsum.photos/v2/list");
    const data = await res.json();
    setImageUrl(data);
  } 

  useEffect(()=>{
    getData();
  },[])

  useEffect(()=>{
    if(imageurl.length > 0)
    {
    ref.current = setInterval(() => { 
      handleRight();
    }, 1000);
  }
    return ()=>clearInterval(ref.current)
  },[imageurl]);

  const handleLeft = ()=>{
    setIndex((prev)=>(prev-1+imageurl.length) % imageurl.length)
  }

  const handleRight = ()=>{
    setIndex((prev=>(prev+1) % imageurl.length))

  }
  
  return (
    <>
    <h1>Image Coursal</h1>
    <div className='container' onMouseEnter={()=>clearInterval(ref.current)} 
    onMouseLeave={()=>ref.current = setInterval(handleRight, 1000)}>
    <button className='left-btn' onClick={handleLeft}>⬅️</button>
      <div className='imagelist'>
        { 
        imageurl.length >0 ? (
          <img src = {imageurl[index].download_url} key = {imageurl.id} className='image'></img>
        ) : (
          <p>Image is Loading</p>
        )
        }
      </div>
      <button className='right-btn' onClick={handleRight}>➡️</button>

    </div>

    
     </>
  )
}

export default App
