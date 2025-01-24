import React, { useEffect, useState } from 'react'

const Pagination = () => {

  const [page, setPage] = useState(1);
  const [product, setProduct] = useState([])



  async function getData(){
    const art = await fetch("https://picsum.photos/v2/list")
    const result = await art.json();
    setProduct(result) 
    console.log(result)
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    <div>
      {
        product.length >0 && <div className='Pagin'>
          {
            product.slice(page*5-5, page*5).map((image, index)=>{
              return <span key= {image.id}> <img src = {image.download_url} style={{height:"200px", width:"200px"}}></img></span>
            })
                }
          
          </div> 
      }
      
    </div>
  )
}

export default Pagination
