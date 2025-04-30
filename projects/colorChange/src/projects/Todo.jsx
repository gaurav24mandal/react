import React, { useState, useEffect, useRef } from 'react';

function TodoTimerApp() {
  const [value, setValue] = useState("");
  const [todo, setTodo] = useState([]);
  const [timeLeft, setTimeLeft] = useState(0); // Use 0 instead of empty string
  const todoRef = useRef([]);

  useEffect(() => {
    todoRef.current = todo;
  }, [todo]);
 //  ADDING TODO
  const handleTodo = () => {
    console.log('Adding task with timeLeft:', timeLeft, typeof timeLeft);

    if (!timeLeft || Number(timeLeft) <= 0) {
      return alert('Enter valid time');
    }

    if (value.trim() === "") return;

    const id = Date.now();
    const taskTime = Number(timeLeft);
    const newTodo = {
      id,
      text: value,
      timeLeft: taskTime,
      isExpired: false,
    };

    const updated = [...todoRef.current, newTodo];
    setTodo(updated);
    todoRef.current = updated;
    setValue("");
    setTimeLeft(0); // Reset to 0
  };
//  Updating todo
  useEffect(() => {
    const intervalId = setInterval(() => {
      const updatedTodo = todoRef.current.map((t) => {
        if (t.timeLeft > 0) {
          return { ...t, timeLeft: t.timeLeft - 1 };
        } else {
          return { ...t, isExpired: true };
        }
      });
      setTodo(updatedTodo);
      todoRef.current = updatedTodo;
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
 
  // Deleting Todo
  const delelte = (id)=>{
       const updatedDelteTodo = todo.filter(t => t.id !== id)
       setTodo(updatedDelteTodo)
  }
  
  // EditTask 
   
  const edit = ()=>{
     
  }
  


  return (
    <div className='p-4 max-w-md mx-auto'>
      <h1 className='text-xl font-bold mb-4'>Todo Timer App</h1>
      <div className='flex gap-2 mb-4'>
        <input
          type="text"
          className='border p-2 flex-1'
          placeholder='Enter your task'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          type="number"
          className='w-24 border p-2'
          value={timeLeft === 0 ? "" : timeLeft}
          onChange={(e) => {
            if(e.target.value === 0){
                setTimeLeft(0)
            }else{
                setTimeLeft(e.target.value)
            }
          }}
          placeholder='Time in sec'
        />
       
        <button className='px-4 py-2 bg-blue-500 text-white rounded' onClick={handleTodo}>
          Add Task
        </button>
      </div>

      <ul className='space-y-2'>
        {todo.map((t) => (
          <li
            key={t.id}
            className={`p-2 rounded flex justify-between items-center w-full h-10 ${
              t.isExpired ? 'bg-red-100'  : 'bg-green-100 ' 
            }`}
        >  
            <button 
              onClick={() => handleEdit(t.id)} 
              className="ml-2 text-blue-500 hover:underline"
              title="Edit Task"
            >
              ✏️
            </button>
         
            {t.isExpired ? <span className='text-xs bg-red-200 text-red-800 px-2 rounded'> task is expired</span>: null}
            {t.isExpired ? <button className='bg-red-500 ' onClick={()=>{
                delelte(t.id)
            }}>delete</button>:null}
            <span >{t.text}</span>
            <span className='px-4'>{t.timeLeft}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoTimerApp;



