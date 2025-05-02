import React from 'react'
import {useState, useEffect,useRef} from 'react'
function Todo() {
 const [input, setInput] = useState("")
 const [todos, setTodos]= useState([])
 const[timeLeft,setTimeLeft] = useState(0)
 const[isEdit, setIsEdit] = useState(false);
 const [editId, setEditId]= useState(null); 
 const todoRef = useRef([])
   // refernece of current todos  array 
   useEffect(()=>{
    todoRef.current = todos
   },[todos])
 // creating and add todo to ui 
 const AddTodo = ()=>{
      const id = Date.now();
      if(timeLeft <= 0) {
        return alert(' enter valid time ')
      }


// isedit works 
  if(isEdit){
     setTodos(prev=>
      prev.map(todo=> 
            todo.key === editId ? {...todo, text: input, isExpired: false, timeLeft : timeLeft} 
            :  todo
         )  )
     setIsEdit(false);  // yeh important hai, taaki dobara "edit mode" mein na rahe
    setEditId(null);
    setInput("");
    setTimeLeft(0);
    return;
        
  }
  
     
      if(input === "")return ;
      ///console.log('timeLeft before add:', timeLeft);
      const todoTime = timeLeft
      const newTodo ={
        key : id,
        text : input,
        isExpired: false,
        timeLeft : todoTime
      }

      const updatedTodo = [...todoRef.current,newTodo]
      setTodos(updatedTodo)
      todoRef.current = updatedTodo
      setInput("")
      setTimeLeft(0)
     
 }

// updating   time 
useEffect(() => {
    const interval = setInterval(() => {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.timeLeft > 0
            ? { ...todo, timeLeft: todo.timeLeft - 1 }
            : { ...todo, isExpired: true }
        )
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);
//delete
const deleteTodo =(id)=>{
   const updateTodo = todoRef.current.filter((todo)=>{
      return todo.key !== id;
   })
   setTodos(updateTodo)
}
// EDIT 

const handleEdit =(task)=>{
     
    setInput(task.text)
     setIsEdit(true)
     setEditId(task.key)
     setTimeLeft(task.timeLeft);
     
}

// jsx file
  return (
    <div className='p-4 max-w-md mx-auto bg-grey'>
      <input
      className='border p-2 flex-1'
      type='text'
      value= {input}
      placeholder='type here'
      onChange={(e)=>setInput(e.target.value)}
      >
  </input>
  <input type="number"
   className='w-16 p-2 m-2 border p-2 flex-1'
   onChange={(e)=>{setTimeLeft(Number(e.target.value)||0)}}
    placeholder='time(sec)'
    value={timeLeft}
   />
  <button
  className='px-4 py-2 bg-blue-500 text-white rounded'
  onClick={AddTodo}
  > Add Task</button>
  <ul className='space-y-2'>
     {todos.map((todo)=>{
     return (
        <div key={todo.key}>
        <li 
        className={` p-2 rounded flex justify-between items-center w-full h-10 ${todo.isExpired?'bg-red-200':'bg-green-500'} `}
        >  
            {todo.isExpired ?(<button className='w-16 p-2 bg-red-500' onClick={()=>{
                deleteTodo(todo.key)
            }}>Delete</button> ):null}
            {todo.isExpired ?(<span className='w-32 p-2 bg-red-500'>taskExpired!!!</span> ):null}
            {todo.isExpired?(<button className='w-16 p-2 bg-gray-500' onClick={()=>{
                handleEdit(todo)
            }}>Edit</button>):null}
            <span>{todo.text}</span><span>{todo.timeLeft}</span>
        </li>
        </div>
        )
     })}
  </ul>
    </div>
  )
}

export default Todo
