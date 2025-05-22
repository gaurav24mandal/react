import React from 'react'
import {configureStore } from '@reduxjs/toolkit'
import AuthSlice from "./AuthSlice"
const Store = configureStore({
     reducer : {
          auth : AuthSlice
     }
});

export default Store
