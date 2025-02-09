import React, { useEffect, useRef, useState } from 'react';
import "./Select.css"
import Pill from './Pill';

export default function Select() {

const [searchItem , setSearchItem] = useState("");
const [suggestion , setSuggestion] = useState([]);
const [selectedUsers, setSelectedUsers] = useState([])
const [selectUserSet , setSelectUserSet] = useState(new Set())

const inputRef = useRef(null);



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

},[searchItem]);

const handleSelectUser = (user)=>{
  setSelectedUsers([...selectedUsers, user]);
  setSelectUserSet(new Set ([...selectUserSet, user.email]))
  setSearchItem("");
  setSuggestion([]);
  inputRef.current.focus();
};

const handleRemoveUser = (user)=>{
  const updateUsers = selectedUsers.filter((selectedUser) =>selectedUser.id !== user.id);

  setSelectedUsers(updateUsers);

  const updateEmails = new Set (selectUserSet);
  updateEmails.delete(user.email);
  setSelectUserSet(updateEmails);

}

const handleKeyDown = (e)=>{
  if(e.key === "Backspace" && e.target.value ==="" && selectedUsers.length > 0)
  {
    const lastUser = selectedUsers[selectedUsers.length-1];
    handleRemoveUser(lastUser);
    setSuggestion([]);
  }
}

  return (
    <div className='search-container'>
    <div className='search-input'>
      {
        selectedUsers.map((user,i)=>{
          return  <Pill key = {i} 
          image = {user.image}
          text = {`${user.firstName} ${user.lastName}`}
          onClick={()=>handleRemoveUser(user)}
           />
        })
      }
     
      <div >
      <input ref={inputRef} type='text' value={searchItem} onChange={(e)=>setSearchItem(e.target.value)} placeholder='Search For User'   onKeyDown={handleKeyDown}></input>
      <div className='suggestion-list' >
        {
          suggestion?.users?.map((user,i)=>{
            return !selectUserSet.has(user.email) ? (
            <li key = {i} onClick={()=>handleSelectUser(user)}>
              <img src = {user.image} alt = {`${user.firstName} ${user.lastName}`}/>
              <span > {user.firstName} {user.lastName}</span>
            </li>
            ) : <></>

          })
        }

      </div>
      </div> 
    </div>
    </div>
  )
}
