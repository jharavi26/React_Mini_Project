import React, { useEffect, useState } from "react";
import "./Infinite.css"
import Post from "./Post";


function Infinite(){

  const [data, setData]  = useState([])
  const [page, setPage] = useState(1)

  useEffect(()=>{
    const arr = fetch(`https://picsum.photos/v2/list?page=${page}&limit=3`)
    arr.then((res)=>res.json())
    .then((arr)=>setData((oldData)=>[...oldData, ...arr]));


  }, [page]);
  return(
    <div>
     <Post data = {data} setPage ={setPage}/>


     
    </div>
  )
}

export default Infinite