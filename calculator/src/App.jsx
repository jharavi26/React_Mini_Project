import React from 'react'
import { CalculatorProvider } from './context/Context'
import Calculator from './component/Calculator'



function App() {
  return (
    <div>
      <h1>Calculator App</h1>
      <CalculatorProvider>
        <Calculator/>
      </CalculatorProvider>
     
    </div>
  )
}

export default App
