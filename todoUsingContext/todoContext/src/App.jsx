import { TodoProvider } from "../../context"
import {UseState} from 'react'

function App() {
 const [todos, setTodos ] = UseState([]) 
 // adding Todo 
  const addTodo = (todo)=>{
        const  newTodo ={
          id :  Date.now(),
          ...todo

        }
          setTodos((prev) => [...prev, newTodo])
  }
  // editing Todo
  const editTodo = (id, todo)=>{
   setTodos((prev)=> prev.map((prevTodo)=>
     (prevTodo.id === id)?todo:prevTodo))
  }

  // deleting Todo 
  const delTodo = (id)=>{
       setTodos((prev)=>prev.filter((prevTodo)=>
         (prevTodo.id !== id) ))
  }

  //togle complete

  const toggleComplete = (id)=>{
         setTodos((prev)=> prev.map((prevTodo)=> 
          (prevTodo.id === id)?{...prevTodo, completed : !prevTodo.completed}:prevTodo))
  }
  return (
    <TodoProvider value={{todos, addTodo, editTodo, delTodo,toggleComplete}}>
        
    </TodoProvider>
  )
}

export default App
