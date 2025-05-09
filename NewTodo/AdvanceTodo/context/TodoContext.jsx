import {useContext , createContext} from 'react';
 //import { TodoContext } from '../../../todoUsingContext/context';

export const todo = createContext({
    
    todos : [{
         id : 1,
         text : "todo Text",
         isComplete : false,
     }],
     addTodo : (todo)=>{},
     deleteTodo : (id)=>{},
     editTodo : (id, todo)=>{},
     toggle : (id)=>{}
})

export const TodoProvider = todo.Provider;

export default function useTodo() {
         return useContext(todo);
}

