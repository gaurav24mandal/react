import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../store/AuthSlice';
import Service from '../Appwrite/Auth';
import {Button} from "./index"
function Logout() {
    const dispatch = useDispatch();
    const  navigate = useNavigate();

    const handleDelete = async()=>{
          try { 
             await Service.logout();
              dispatch(logout())
               navigate("/")
          } catch (error) {
              console.log(`error in logout ${error}`);
              
          }
    }
  return (
    <Button className='inline-bock px-6 py-2 duration-200 hover:!bg-red-600 rounded-full' onClick = {handleDelete}>
        Logout
    </Button>
  )
}

export default Logout
