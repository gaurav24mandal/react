import React, { useState } from 'react'
import { addtodo } from '../feature/todo/todoSlice'
import {useDispatch } from 'react-redux'
function AddTodo() {
    const dispatch = useDispatch();
    const [input, setInput ] =useState("")
 const handleTodo = (e)=>{
    e.preventDefault();
    dispatch(addtodo(input));
    setInput("")
 }
  return (
     <div>
     <form  onSubmit={handleTodo}>
        <input type="text"
          value={input}
          onChange={(e)=>setInput(e.target.value)}
        />
        <button type='submit' >AddTodo</button>
     </form>
     </div>
  )
}

export default AddTodo
