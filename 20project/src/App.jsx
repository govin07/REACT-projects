import { useState,createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'
import Category from './Category'

export const UserName = createContext();

function App() {
  const [name, setName] = useState(' govind')

  return (
    <>
    <UserName.Provider value={name}>
     <h1>hello{name}</h1>
     <Product/>
     </UserName.Provider>
    </>
  )
}

export default App
