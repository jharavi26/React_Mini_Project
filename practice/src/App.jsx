import { useEffect, useRef, useState } from 'react'
import './App.css'
import Image from './Component/Image'


function App() {

  const [user, setUser] = useState([])

  useEffect(()=>{
   
  
  },[])

  async function GetData(){
    const data = await fetch("https://dummyjson.com/users");
    const result = await data.json();
    setUser(result.users)
  }

  return (
    <>
    <Image />
    <button onClick={GetData}>GetData</button>
    <p>{user.length > 0 ? user[3].firstName : "loading"}</p>
    { 
      user.length > 0 && (
      user.map((item, index)=>{
        return <li key={item.id}>{item.firstName}</li>
      }))
    }

     </>
  )
}

export default App
