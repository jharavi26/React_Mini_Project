import React from 'react'
import Progress from './Component/Progress/Progress'

function App() {
  return (
    <div>
      <Progress />
      <Progress value = {30} />
      <Progress value = {50}/>

      
    </div>
  )
}

export default App
