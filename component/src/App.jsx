import { useState } from 'react'
import './App.css'
import Modal from './component/Modal';

function App() {
  const [isShow, setIsShow] = useState(false);

  const handleModal = ()=>{
    setIsShow(true);


  }


  return (
    <>
    <div className='show-offer'>
    <button onClick={handleModal} className='btn'>Show Offer </button>
    </div>

    {
      isShow && < Modal />
    }
  
     
      
    </>
  )
}

export default App
