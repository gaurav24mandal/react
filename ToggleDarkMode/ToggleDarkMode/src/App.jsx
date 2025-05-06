import React, {useState, useEffect} from 'react'
import { ThhemeProvider } from '../context/Theme'
import UserContext from '../../../ContextApi/contextApi/src/context/UserContext'
import Toggle from '../components/Toggle'
import Card from '../components/Card'


function App() {
  const [themeMode, setThemeMode] =  useState("light")

 const lightTheme = ()=>{
     setThemeMode('light')
 }
 const darkTheme = ()=>{
  setThemeMode('dark')
 }
  useEffect(()=>{
    document.querySelector('html').classList.remove("dark","light"),
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  
    

  return (
    <ThhemeProvider value={{themeMode, darkTheme, lightTheme}}>
     

          
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                          <Toggle/>  
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                         <Card/>
                    </div>
                </div>
            </div>

          
    
    </ThhemeProvider>
  )
}

export default App
