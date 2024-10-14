import { useState,createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'
import Category from './Category'
import ClassDemo from './ClassDemo'

export const UserName = createContext();

function App() {
  const [name, setName] = useState(' govind')

  return (
    <>
    <ClassDemo name={"Mahendra bahubali"}/>
    <UserName.Provider value={{name, setName}}>
     <h1>hello{name}</h1>
     <Product/>
     </UserName.Provider>
    </>
  )
}

export default App
