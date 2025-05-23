 import {useState} from 'react'
 import useTodo from '../context/TodoContext';
function TodoItem({ todo }) {
    const [isTodoEditable , setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.text)
    const {editTodo, deleteTodo, toggle} = useTodo()
     
    const UpdateTodo = ()=>{
        editTodo(todo.id,  {...todo, text: todoMsg})
        setIsTodoEditable(false)

     }
    const toggleComplete = ()=>{
        toggle(todo.id)
    }
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.isComplete ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.isComplete}
                onChange={toggleComplete}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.isComplete ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.isComplete) return;

                    if (isTodoEditable) {
                        UpdateTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.isComplete}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
