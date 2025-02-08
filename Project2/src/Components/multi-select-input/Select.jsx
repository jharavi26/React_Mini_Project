import React, { useEffect, useState } from 'react';
import "./Select.css"

export default function Select() {

const [searchItem , setSearchItem] = useState("");
const [suggestion , setSuggestion] = useState([]);



useEffect(()=>{
  const fetchUser = ()=>{
    if(searchItem.trim()===""){
      setSuggestion([])
      return;
    }
    fetch(`https://dummyjson.com/users/search?q=${searchItem}`)
    .then((res)=>res.json())
    .then((data)=>setSuggestion(data))
    .catch((err)=> console.log(err))
  };
  fetchUser();

},[searchItem])

  return (
    <div className='search-container'>
    <div className='search-input'>
      <div >
      <input type='text' value={searchItem} onChange={(e)=>setSearchItem(e.target.value)} placeholder='Search For User'></input>
      <ul className='suggestion-list'>
        {
          suggestion?.user?.map((user , index)=>{
            return <li key = {user.email}>{user}</li>

          })
        }

      </ul>
      </div> 
    </div>
    </div>
  )
}
