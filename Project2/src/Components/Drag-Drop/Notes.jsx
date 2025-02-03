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
      x : Math.floor(Math.random()*maxX),
      y : Math.floor(Math.random()*maxY),
    }
  }

  const handleDragStart = (note, e)=>{
    const {id} = note;
    const noteRefs = noteRef.current[id].current;
    const rect = noteRefs.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const startPos = note.position;

    const handleMouseMove = (e)=>{
      const newX = e.clientX - offsetX;
      const newY = e.clientY - offsetY;

      noteRefs.style.left = `${newX}px`
      noteRefs.style.top = `${newY}px`

    }

    const handleMouseUp = (e)=>{
      document.removeEventListener("mousemove" , handleMouseMove);
      document.removeEventListener("mouseup" , handleMouseUp)
      
      const finalRect = noteRefs.getBoundingClientRect();
      const newPosition = {x : finalRect.left , y : finalRect.top}

      if(false){

      }
      else{
        updateNotePosition(id, newPosition)
      }
    }

    document.addEventListener("mousemove" , handleMouseMove);
    document.addEventListener("mouseup" , handleMouseUp)

  }

  const updateNotePosition = (id , newPosition )=>{
    const updateNotes = notes.map(note=>note.id === id ? {...note , position : newPosition } : note)
    setNotes(updateNotes)
    localStorage.setItem("notes", JSON.stringify(updateNotes))
  }



  return (
    <div >
      {
        notes.map((note)=>{
          return <Note key ={note.id} 
          ref  = {noteRef.current[note.id] ? noteRef.current[note.id]  : (noteRef.current[note.id] = createRef())

          }
          initialPosition  = {note.position} content = {note.text} onMouseDown={(e)=>handleDragStart(note, e)}></Note> 
        })
      }

      
    </div>
  )
}

export default Notes
