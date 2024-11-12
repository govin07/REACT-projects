import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

export default function Todos(){
    const todos =  useSelector(state => state.todos);
    const dispatch = useDispatch()

    


    return(
        <>
        <div  className="text-white py-2">Todos</div>
        {
            todos.map((todo)=>(
                <li className="bg-gray-700 m-3 text-left text-white rounded " key={todos.id}>
                    {todo.text}
                    <button onClick={()=> dispatch(removeTodo(todo.id))} className="text-right">X</button>
                </li>
                

            )

            )
        }
        </>
    )
}