import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState ={
    todos: [{id: 1 , text: "hello"}]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState ,
    reducers : {
        addtodo : (state, action )=>{
            const todo  = {
                id : nanoid(),
                text : action.payload
            } 
            state.todos.push(todo)  
        },
        removeTodo : (state, action)=>{
              state.todos = state.todos.filter((todo)=>{
                 return  todo.id !== action.payload
              })
        },
        updateTodo : (state, action )=>{
                state.todos = state.todos.map((todo)=>{
                 if(todo.id === action.payload.id){
                     return  {...todo, text : action.payload.text}
                 }
                 return todo;
            })
        }
    }
})

export const {addtodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer