import React, { useEffect, useState } from 'react'

function Hello() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  useEffect(()=>{
    fetch('https://dummyjson.com/posts')
    .then((response) => response.json())
    .then((data) => setData(data))
    
  }, [])
  return (
    <div>
      <h1>This is Hello World Page</h1>
      <form>
     
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <p>User Input :- {input} </p>

        </form>
        {/* <div>
            {data ? (
              <ul>
                {data.posts.map((post) => (
                  <li key={post.id}>{post.title}</li>
                ))}
              </ul>
            ) : (
              <p>Loading...</p>
            )}
  
    </div> */}
    </div>
  )
}

export default Hello
