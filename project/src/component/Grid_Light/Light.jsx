import React, { useState } from 'react';
import "./Light.css"

function Cell({ filled, onClick, isDisabled }) {
  return (
      <button
          type="button"
          disabled={isDisabled}
          onClick={onClick}
          className={filled ? "cell cell-activated" : "cell"}
      />
  );
}

const Light = () => {

  const [order, setOrder ] = useState([]);
  const [deactivate,  setDeactivate] = useState(false)

 const config = [
  [1,1,1],
  [1,0,1],
  [1,1,1]
 ] 

 const activateCells = (index)=>{
  const newOrder = [...order, index];
  setOrder(newOrder)

  if(newOrder.length === config.flat(1).filter(Boolean).length)
  {
    deactivateCells();
  }

 }

 const deactivateCells = ()=>{
  setDeactivate(true);
  const timer = setInterval(() => {
    setOrder((orignalOrder)=>{
      const newOrder = orignalOrder.slice()
      newOrder.pop()

      if(newOrder.length === 0)
      {
        clearInterval(timer)
        setDeactivate(false)
      }

      return newOrder;

    })

  }, 300);

 }


  const handleClick = ()=>{

  }
  return (
    <>
    <h1>Grid-Light</h1>
    <div className='wrapper'>
      <div className='grid' style={{
                    gridTemplateColumns: `repeat(${config[0].length}, 1fr)`,
                }}>
        {
          config.flat(1).map((value , index) =>{
            return value ? <Cell key={index}
            filled={order.includes(index)}
            onClick={()=>activateCells(index)}
            isDisabled={order.includes(index) || deactivate}
            
            /> : <span/>
          })
        }

      </div>
      
    </div>
    </>
  )
}

export default Light
