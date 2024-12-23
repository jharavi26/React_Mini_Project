import React, { useState } from 'react'

const Four = ({items, itemsPerPage}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage*itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem,indexOfLastItem);

  const pageNumber = [];
  for(let i=0; i<=Math.ceil(items.length / itemsPerPage);i++){
    pageNumber.push(i);
  }
  return (
    <div>
      <ul>
        {currentItems.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
      
    </div>
  )
}

export default Four
