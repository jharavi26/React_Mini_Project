import React, { useRef, useState } from 'react';
import "./Drop.css";

function Drop() {

    const initialData = {
      Todo : [
        "Design UI Mockups",
        "Setup The Project Repositry",
        "Write a unit Test",
        "Integrate Payment Gateway"
      ],
      "In Progress" : ["Develop Authenticate Flow", "Implement Responsive Design"],
      Completed : ["Set up CI/CD pipeline", "Conduct code Service", "Deploy initial vendor to Staging" ]
    }


  const [data, setData] = useState(initialData);
  const [text, setText] = useState("")
  const dragItem = useRef();
  const dragContainer = useRef();

 

  const handleDrag = (e , item, container)=>{
    e.target.style.opacity = "0.5";
    dragItem.current =item;
    dragContainer.current = container;

  }

  const handleDragEnd =(e)=>{
    e.target.style.opacity = "1"
  }

  const handleDragOver = (e)=>{
    e.preventDefault();
  }

  const handleChange = (e)=>{
    setText(e.target.value)
  }

  const add = () =>
    setData(prev => ({
      ...prev,
      Todo: [...prev.Todo, text],
    }));
  
 

  const handleDrop = (e, targetContainer)=>{
    const item = dragItem.current;
    const sourceContainer = dragContainer.current;
    setData((prev)=>{
      const newData = {...prev};
      newData[sourceContainer ] = newData[sourceContainer].filter((i)=>i !==item);
      newData[targetContainer] = [...newData[targetContainer],item];
      return newData;
    }
  )
  }

  return (
    <>
    <input type='text' onChange={handleChange} placeholder='enter the text'></input>
    <button onClick={add}>Add</button>
    <div className='container'>
      {Object.keys(data).map((container , index)=>{
        return <div key={index} className='header' onDrop={(e)=>handleDrop(e, container)} onDragOver={handleDragOver}>{container}
        {data[container].map((item, id)=>{
          return <div key={id} onDragStart={(e)=>handleDrag(e , item , container)} onDragEnd={handleDragEnd} draggable className='content'>{item}</div>
        })}
         </div>
      })}
     
    </div>
  
    </>
  )
}


export default Drop
