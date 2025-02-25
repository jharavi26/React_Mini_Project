import React from 'react'
import Progress from './Component/Progress/Progress'
import Light from './Component/Light'

function App() {
  return (
    <div>
      <Progress />
      <Progress value = {30} />
      <Progress value = {50}/>
      <Light />

      
    </div>
  )
}

export default App
