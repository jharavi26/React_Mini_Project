import React, { useRef } from 'react'

const Focus = () => {
  const inputElement = useRef();

  function handle(){
    inputElement.current.focus();

  }

  return (
    <div>
      <input type='text' ref= {inputElement}/>
      <button onClick={handle}>Focus</button>
      
    </div>
  )
}

export default Focus
