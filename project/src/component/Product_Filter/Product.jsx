import React, { useEffect, useState } from 'react'
import "./Product.css"
import { items } from './Items'

const Product = () => {

  const filter  = ['Bags', 'Watches', 'Sports', 'Sunglasses'];
  const[filterdata, setFilterData] = useState(items);
  const [activefilter, setActiveFilter] = useState([]);

  const handleFilterClick = (e)=>{
    const category = e.target.id;
    if (activefilter.includes(category)){
      const filters = activefilter.filter((el) => el !== category)
      setActiveFilter(filters)
    }
    else{
      setActiveFilter([...activefilter, category])
    }  
  }

  const filterProduct = ()=>{
    if(activefilter.length){
      const tempItems = items.filter((item)=> activefilter.includes(item.category))
        setFilterData(tempItems);
      }
    else{
      setFilterData(items);
    }
  }

  useEffect(()=>{
    filterProduct();
  },[activefilter])

  return (
    <div className='container'>
      <div className='filter' onClick={handleFilterClick}>
        <h1> Product Filter Component</h1>
        <div className='sort'>
        {
          filter.map((item,index)=>{
            return <button className={activefilter.includes(item) ? "selected" : ""} key={index} id={item}>{item}</button>
          })
        }
        </div>
        </div>

     
      <div className='products-list'>
      {
        filterdata.map((item,index)=>{
          return <div className='itemlist' key={index}>
            <p>{item.name}</p>
            <p className='category'>{item.category}</p>
          </div>
          
        })
      }

    </div>
    </div>
  )
}

export default Product
