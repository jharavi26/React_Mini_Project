import React, { useEffect, useState } from 'react'
import './style.css'

function CountDown() {

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async ()=>{
    const res = await fetch("https://dummyjson.com/products")
    const data = await res.json()

    console.log(products)

    if(data && data.products){
    setProducts(data.products)
    }
  };



  useEffect(()=>{
    fetchData();
  },[])

  const selectPageHandler = (selectedPage) =>{
    if(selectedPage >= 1 && selectedPage <= products.length /5 && selectedPage !== page){
      setPage(selectedPage)
    }
  }

  return (
    <div>
      {
        products.length>0 && <div className='products'>
        {
          products.slice(page*5-5, page*5).map((prc)=>{
            return <span className="products__single" key={prc.id}>
             <img src ={prc.thumbnail} alt={prc.title}/>
            <span>
              {prc.title}
            </span>
            </span>
            
          })
        }
        </div>
      }
      {
        products.length > 0 && <div className ="pagination">
          <span onClick={()=> selectPageHandler(page-1)} className={page > 1 ? "" : "pagination_disable"}>◀️</span>
        {
          [...Array(products.length / 5)].map((_ , i )=>{
            return <span key = {i} className={page === i+1 ? "pagination_selected": ""} onClick={()=> selectPageHandler(i+1)} >
              {i+1}</span> 
          })
          
        }
        <span onClick ={()=> selectPageHandler(page+1)} className={page < products.length /5 ? " " : "pagination_disable"}> 
        ▶️</span>       
         </div>
          
      }
      
    </div>
  )
}

export default CountDown
