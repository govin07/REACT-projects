import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './context'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'

function App() {
  const [todos, SetTodos] = useState([]);

  const addTodo = (todo) => {
    SetTodos((prev) => [{id: Date.now()}, ...prev]);
  }
   
  const updateTodo = (id, todo) => {
    SetTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)) )
  }

  const deleteTodo = (id) => {
    SetTodos((prev) =>  prev.filter((todo) => todo.id !== id ))
  }

   const toggleComplete = (id) => {
    SetTodos((prev) => prev.map((todo) => prev.id === id ? {...todo, complete: !todo.complete} : todo))

   }

   useEffect(() => {
     const todos = JSON.parse(localStorage.getItem("todos"))
      
     if(todos && todos.length > 0){
      SetTodos(todos);

     }
   }, []);
   useEffect(() =>{ 
    localStorage.setItem("todos", JSON.stringify(todos))
   } , [])
    
  return (
    <TodoProvider value={{todos, addTodo, deleteTodo, updateTodo, toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                       <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div 
                          key={todos.id}
                          className='w-full'>
                            
                           <TodoItem todo={todo}/>

                             </div>
                        ))}
                    </div>
                </div>
            </div>
            </TodoProvider>
  )
}

export default App
