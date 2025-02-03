import React, { useState } from 'react'
import Notes from './Notes'

function Drop() {
  const [notes , setNotes] = useState([
    {
      id : 1,
      text : "Javascript Notes",
    },
    {
      id : 2,
      text : "React Notes",
    },
  ]);



  
  return (
    <div>
      <Notes notes = {notes} setNotes={setNotes}/>
      
    </div>
  )
}

export default Drop
