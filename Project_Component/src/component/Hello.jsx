import React, { useState } from 'react'

function Hello() {
  const [input, setInput] = useState("");
  return (
    <div>
      <h1>This is Hello World Page</h1>
      <form>
     
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <p>User Input :- {input} </p>

        </form>
     
      
    </div>
  )
}

export default Hello
