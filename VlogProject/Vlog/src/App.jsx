import './App.css'
import {useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import config from './config/config';
import { Header, Footer } from './components';
import { login,logOut } from './store/feature';
import authService from './appwrite/auth';
function App() {
   const[loading , setLoading ] = useState(true)
  const dispatch  = useDispatch()
   
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
        if(userData){
          dispatch(login())
        }
        else{
          dispatch(logOut())
        }
    })
    .finally(()=>setLoading(false))
  },[])


  return !loading?(
    <div className='min-h-screen flex flex-wrap content-between bg-gray-600'>
      <div className='w-full block'>
     <Header/>
    TODO :   {/* Outlet  */}
     <Footer/>
  </div>
   </div>
  ):null

}

export default App
