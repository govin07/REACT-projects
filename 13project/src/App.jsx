import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Name from './Components/Name'
import './App.css'

function App() {
  let [name , setName] = useState("nitin")

  


  return (
    <>
    <h1>{name}</h1>
    <button onClick={() => setName(name = "govind")}>click me</button>
    
     <Name call = {{name:"Govind", lastName:"solani"}}/>
    <Name call = {{name:"Deepanshu", lastName:"chouhan"}}/>
    <Name call= {{name:"Aditya", lastName:"Tawar"}}/>
     
     
    </>
  )
}

export default App
