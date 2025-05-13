import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../feature/todo/todoSlice'
function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();
     
  return (
    <div> 
        
        <ul className='ul'>
            {todos.map((todo)=>(
                
                <li key = {todo.id}>
                    
                    <span>{todo.text}</span>
                    <button onClick={()=>{dispatch(removeTodo(todo.id))}}>X</button>
                    <button onClick={()=>{ dispatch(updateTodo(todo.id, todo.text))}}>Edit</button>
                </li>
            ))}
        </ul>
           </div>
    
  )
}

export default Todos
