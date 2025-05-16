import {configureStore}  from '@reduxjs/toolkit'
import authService from './feature'
export const store  = configureStore({
    reducer : {
        auth : authService
    }
})