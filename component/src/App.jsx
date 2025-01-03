import { useState } from 'react'
import './App.css'
import Modal from './component/Modal';
import Calculator from './Calculator/Calculator';
import Otp from './OTP/Otp';

function App() {
  const[modalOpen, SetModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleButtonClick = (value)=>{
    SetModalOpen(false);
    setMessage(value);
  }
  

  return (
    <>
    <button className='btn btn-open' onClick={()=> SetModalOpen(true)}>
      Open </button>
    {modalOpen && (
      <Modal 
      onSubmit={handleButtonClick} 
      onCancel={handleButtonClick} 
      onClose={handleButtonClick}>
      <h1>This is the Modal Title</h1>
      <p>This is the Description of the Modal</p>
    </Modal>
    )}

{message && <p className="message">{message}</p>}
<Calculator />
<Otp/>


      
    </>
  )
}

export default App
