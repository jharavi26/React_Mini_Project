import React, { useState } from 'react'
import "./Product.css"
import { items } from './Items'

const Product = () => {

  const filter  = ['Bag', 'Watches', 'Sports', 'Sunglasses'];
  const[filterdata, setFilterData] = useState(items);
  const [activefilter, setActiveFilter] = useState([]);

  return (
    <div className='container'>
      <div className='filter'>
        <h1> Product Filter Component</h1>
        <div className='sort'>
        {
          filter.map((item,index)=>{
            return <button className='item' key={index} id={item}>{item}</button>
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
