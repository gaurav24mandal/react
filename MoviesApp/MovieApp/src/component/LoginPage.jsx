import React, { useState } from 'react'
import useLogin from '../context/loginContext';
import { useNavigate ,useLocation } from 'react-router-dom';
;

function LoginPage() {
  const {username, setUsername,  isLogin , setIsLogin} = useLogin()
 
  const navigate = useNavigate();
 
  
  const handleSubmit =(e)=>{
      e.preventDefault();
      console.log(username);
      setIsLogin(!isLogin)
      setUsername(username)
       navigate('/movies')
       
       //setUsername("")
  }

  return (
  
    <div>
      <form className='flex mb-80 mt-20 justify-center  items-center '>
        <input type="text"
        className='"w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
        placeholder='enter name'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
         />
         
         <button onClick={handleSubmit} className='"rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'>Login</button>
      </form>
    </div>

   
  )
}

export default LoginPage
