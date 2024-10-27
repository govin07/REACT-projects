import {createContext, useContext} from 'react'

export const Context = createContext({
    todos: [
        {
            id: 1 ,
            todo: "hello",
            complited: false,

        } ,
    ],
    addTodo : (todo) => {},
    updateTodo : ( id, todo) => {},
    deleteTodo : (id) => {},
    todoComplete : (id) => {},

})

export const useTodo = () => {
    return useContext(Context)
}

export const TodoProvider =  Context.Provider