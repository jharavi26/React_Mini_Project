import React, { useState } from 'react'

function Counter({name, list}) {
  const [count, setCount] = useState(0);
  const handleClick = ()=>{
    setCount(count+1);
  }
  const handleClick2 = ()=>{
    setCount(count-1)

  }
  const countries = ["India","London","America"]

  let employees = [
    { eId: 101, name: "sanjay", sal: 5000 },
    { eId: 104, name: "deepak", sal: 8000 },
    { eId: 103, name: "ranjan", sal: 7000 },
    { eId: 102, name: "manoj", sal: 9000 }
]

   
 
  return (
    <div>
      <p>My name is {name}</p>
      <button onClick={handleClick}>+</button>
      <p>Count is {count}</p>
      <button onClick={handleClick2}>-</button>
        <ul>
          {list.map((list, index)=>(
          <li key={index}>{list}</li>
          ))}
        </ul>

        <h2>Countries Dropdown</h2>
    Dropdown: 
    <select>
        {countries.map((country,ind)=>{
            return <option key={ind}>{country}</option>
        })}
    </select>

    <hr></hr>

    <table border='1' align='center' width="50%">
    {
      employees.map((emp)=>(
        <tr key ={emp.id}>
        <td>{emp.id}</td>
        <td>{emp.name}</td>
        <td>{emp.sal}</td>
        </tr>
      ))
    }
    </table> 
      
    </div>
  )
 
}

export default Counter


