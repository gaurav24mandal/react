import {useContext, createContext} from 'react'

export const TodoContext = createContext({
    todos: [
        {
        id :1,
        text: "",
        completed : false ,
       },
 
],
    addTodo : (todo)=>{},
    editTodo : ( id, todo)=>{},
    delTodo : (id)=>{},
    toggleComplete : (id)=>{}
});

 export const TodoProvider = TodoContext.Provider;

export default function UseTodo (){
     return useContext(TodoContext)
}


