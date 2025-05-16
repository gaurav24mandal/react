import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logOut} from '../../store/feature'
function LogoutBtn() {
    const dispatch = useDispatch();
    const HandleLogout = ()=>{
        authService.logout()
        .then(()=>{
            dispatch(logOut())
        })
    }
  return (
    <div>
     <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
    </div>
  )
}

export default LogoutBtn
