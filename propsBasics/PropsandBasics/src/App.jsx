import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
 

  return(
    <>
    <h1>'hi'</h1>
    <div className="flex flex-col gap-4">
    <Card username='gaurav' gravity='10000'/>
    <Card username='saurav' gravity='180'/>
    </div>
 
    </>
  )
}

export default App
