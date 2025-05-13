import { useState } from 'react'
import AddTodo from './component/AddTodo'
import Todos from './component/Todos'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div> hi redux</div>
      <AddTodo/>
      <Todos/>
  </>
  )
}

export default App
