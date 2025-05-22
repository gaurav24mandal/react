import { useState } from 'react'

import './App.css'
import { Header ,  } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
      <div>
        <Header/>
        <Outlet/>
        {/* <Footer/> */}
      </div>
      
  )
}

export default App
