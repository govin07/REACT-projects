import {createSlice , nanoid} from '@reduxjs/toolkit';

const initialSlice = {
    todos: [{
        id: 1,
        text: "hello world",
    }]
}


export const todoSice = createSlice({
    name: "todo",
    initialState,
    reducers : {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) = {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

export const {addTodo, removeTodo} = todoSice.actions

export default todoSice.reducer


