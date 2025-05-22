import React from 'react'
import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    status : false,
    userData : {},
    error : null
}
 const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers : {
        login : (state , actions)=>{
            state.status = true
            state.userData = actions.payload
            state.error = null
        },
        logout : (state)=>{
           state.status =  false
           state.userData = null
           state.error = null
        }
    }
})

export const {login , logout} = AuthSlice.actions;

export default AuthSlice.reducer
