import React from 'react'
import {configureStore } from '@reduxjs/toolkit'
import AuthSlice from "./AuthSlice"
import PostSlice from "./PostSilce"
const Store = configureStore({
     reducer : {
          auth : AuthSlice,
          posts : PostSlice
     }
});

export default Store
