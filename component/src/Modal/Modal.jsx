import React from 'react'
import "./Modal.css"

function Modal({onSubmit, onCancel, onClose, children}) {
  return (
    <>
    <div className='modal-container' onClick={(e) =>{
      if(e.target.className==="modal-container")
        onClose("Modal was Closed ")
    }}>
    <div className='modal'>
    <div className='modal-header' onClick ={()=> onClose("This modal was closed ")}> 
      <p className='close'>&times;</p>
    </div>
    <div className='modal-content'>
      {children}
    </div>
    <div className='modal-footer'>
      <button className='btn btn-submit' onClick={()=> onSubmit("Submit Button was Clicked")}>Submit</button>
      <button className='btn btn-cancel' onClick={()=>onCancel("Cancel The Modal")}>Cancel</button>
    </div>
    </div>
    </div>
    </>
  )
}

export default Modal
