import React, { useState } from 'react';
import "./Grid.css"

const Grid = ({rows = 15, columns = 15}) => {
  const [isMouseDown, setIsMouseDown ] = useState(false);
  const [selectBoxes , setSelectBoxes]  = useState([]);



const handleMouseDown = (boxNumber)=>{
  setIsMouseDown(true);
  setSelectBoxes([boxNumber])
}

const handleMouseUp = ()=>{
  setIsMouseDown(false);
}

const handleMouseEnter = (boxNumber)=>{
  if(isMouseDown){

    const startBox = selectBoxes[0];
    const endBox = boxNumber;

    const startRow = Math.floor((startBox - 1)/columns);   // ((23-1)/10=2)
    const startColumn = (startBox -1 )% columns;               // 22 % 10 = 2
    const endRow = Math.floor((endBox - 1)/columns);
    const endColumn = (endBox -1 )% columns;

    const minRows = Math.min(startRow, endRow);
    const maxRows = Math.max(startRow, endRow);
    const minCol = Math.min(startColumn, endColumn);
    const maxCol = Math.max(startColumn, endColumn)

    const selectedArray = [];
    for(let row = minRows ; row <= maxRows ; row++)
    {
      for( let column = minCol ; column <= maxCol ; column++)
      {
        selectedArray.push(row * columns + column +1 )
    }

  }
  setSelectBoxes(selectedArray)
}
}

  return (
    <>
    <h1>Selectable-Grid</h1>
    <div className='grid' onMouseUp={handleMouseUp}>
      {
        [...Array(rows*columns).keys()].map((_ , i)=>{
          return <div key ={i} className={`box ${selectBoxes.includes(i+1) ? "selected" : ""} `} 
          onMouseDown={()=>handleMouseDown(i+1)}
          onMouseEnter={()=>handleMouseEnter(i+1)}
          >{i+1}</div>
        })

      }
      
    </div>
    </>
  )
}

export default Grid
