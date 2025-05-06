import React from 'react'
import ContextProvider from './context/ContextProvider'
 import UserLogin from './components/UserLogin'

import Userprofile from './components/Userprofile'
import UserContextProvider from './context/UserContextProvider'
function App() {


  return (
    <UserContextProvider>
       <UserLogin/>
       <Userprofile/>
     </UserContextProvider>
  )
}

export default App
