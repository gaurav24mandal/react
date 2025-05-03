import React ,{useState} from 'react'
import CreateContext from './CreateContext'


const ContextProvider = ({children})=>{
    const[user,setUser] = useState(null)
     return (
        <CreateContext.Provider value={{user ,setUser}}>
            {children}
        </CreateContext.Provider>
     )
}

export default ContextProvider
