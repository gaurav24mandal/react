import { useState } from 'react'
import Bg from './projects/Bg'
import './App.css'

function App() {
  const [color,setColor] = useState("gray") 
  
  return (
   <>
   <Bg color={color} setColor={setColor}/>
   </>
  )
}

export default App
