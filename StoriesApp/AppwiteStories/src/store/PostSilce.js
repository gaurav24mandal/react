import React  from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    posts : [],
    loading : false,
    error : false
}

const PostSlice = createSlice({
    name : "posts",
    initialState,
    reducers : {
        setPosts : (state ,action)=>{
             state.posts = action.payload;
        },
        addPost : (state, action)=>{
            // const allPost = state.posts;
          state.posts =     [action.payload, ...state.posts]
        },
        updatePost : (state, action )=>{
             const index = state.posts.findIndex(index => index.$id === action.payload.$id)
             state.posts[index] = action.payload
        },
        deletePost : (state, action)=>{
             state.posts = state.posts.filter(i => i.$id !== action.payload)
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
          },
          setError: (state, action) => {
            state.error = action.payload;
          }
    }
})

export const {setPosts , addPost, updatePost, deletePost, setLoading, setError} = PostSlice.actions;

export default PostSlice.reducer