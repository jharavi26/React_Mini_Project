import React, { createRef, useEffect, useRef } from 'react';
import Note from '../Note';

function Notes({notes=[], setNotes=()=>{}}) {

  useEffect(()=>{

    const saveNotes  = JSON.parse(localStorage.getItem("notes")) || [];

    const updateNotes = notes.map((note)=>{
      const saveNote  = saveNotes.find((n)=>n.id === note.id);
      if(saveNote){
        return {...note , position : saveNote.position};
      }
      else{
        const position = determineNewPosition();
        return {...note, position}
      }
 
    })
    setNotes(updateNotes)
    localStorage.setItem("notes", JSON.stringify(updateNotes))

  },[notes.length])

  const noteRef  = useRef([]);

  const determineNewPosition = ()=>{
    const maxX  = window.innerWidth - 250;
    const maxY  = window.innerHeight - 250;

    return {
      x:Math.floor(Math.random()*maxX),
      y : Math.floor(Math.random()*maxY),
    }
  }

  const handleDragStart = (id , e)=>{
    const noteRefs = noteRef.current[id].current;
    const rect = noteRefs.getBoundingClientRect();

    console.log(rect)

  }



  return (
    <div >
      {
        notes.map((note)=>{
          return <Note key ={note.id} 
          ref  = {noteRef.current[note.id] ? noteRef.current[note.id]  : (noteRef.current[note.id] = createRef())

          }
          initialPosition  = {note.position} content = {note.text} onMouseDown={(e)=>handleDragStart(note.id, e)}></Note> 
        })
      }

      
    </div>
  )
}

export default Notes
