import  {createSlice} from '@reduxjs/toolkit' 

const initialState = {
    status : false ,
    userData : null
}

export const authService = createSlice({
    name : "auth",
    initialState,
    reducers : {
        login : (state, action)=>{
            state.status = true,
            state.userData = action.payload.userData
        },
        logOut : (state)=>{
            state.status = false,
            state.userData = null
        }
    }
})

export const {login , logOut} = authService.actions

export default authService.reducer