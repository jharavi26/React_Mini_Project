import React, { useState } from 'react'

const Three = ({items}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredItems = items.filter((item)=>{
    return item.toLowerCase().includes(searchTerm.toLowerCase());
  })
  return (
    <div>
      <input type="text" placeholder='Search' onChange={(e)=>setSearchTerm(e.target.value)}/>
      <ul>
        {filteredItems.map((item, index)=>(
          <li key={index}>
            {item}

          </li>
        ))}
      </ul>
      
    </div>
  )
}

export default Three
