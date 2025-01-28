
import { useEffect, useState } from 'react'
import './App.css'
import Stepper from './component/Stepper/Stepper'

const steps = [
  {
    label : "Personal-Info",
    content : <div>Personal Information Content</div>,
  },

  {
    label : "Account Info",
    content : <div>Account Info Content</div>,

  },
  {
    label : "Payment Info",
    content : <div>Payment Content</div>,

  },
  {

    label : "Confirmation",
    content : <div>Confirmation Content</div>,
  },
  {
    label : "Review-Info",
    content : <div>Review Content</div>,
  }
]


function App() {

  return (
    <div className='app'>
      <Stepper steps = {steps}/>
     
      
    </div>
    
  )
}
export default App
