import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Name from './Components/Name'
import './App.css'

function App() {
  let [name , setName] = useState("nitin")
  let [last, setLast] = useState("solanki")
  function changeName(){
    setName(name = "sachin")
    setLast(last = "Rajput")
  }

  


  return (
    <>
    <h1>{name} singh {last}</h1>
    <button onClick={changeName}>click me</button>
    
     <Name call = {{name:"Govind", lastName:"solani"}}/>
    <Name call = {{name:"Deepanshu", lastName:"chouhan"}}/>
    <Name call= {{name:"Aditya", lastName:"Tawar"}}/>
     
     
    </>
  )
}

export default App
