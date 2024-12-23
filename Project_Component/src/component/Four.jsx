import React, { useState } from 'react'
import { use } from 'react';

const Four = ({items, itemsPerPage}) => {
  const [color, setColor ] = useState('#000000')
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage*itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem,indexOfLastItem);

  const pageNumber = [];
  for(let i=0; i<=Math.ceil(items.length / itemsPerPage);i++){
    pageNumber.push(i);
  }

  const handleChange = (e)=>{
    setColor(e.target.value);
  }
  return (
    <div>
      <ul>
        {currentItems.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
      {pageNumber.map((number) =>(
        <li key={number} onClick={()=> setCurrentPage(number)}>
          {number}
        </li>
      )

      )}
      <input type ="color"  onChange={handleChange}/>
      <div style={{width : '100px', height:'100px', backgroundColor:color}} />
      
    </div>
  )
}

export default Four
