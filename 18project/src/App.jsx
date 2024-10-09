import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'

function App() {
  const [name, setName] = useState("")
  function handleInput(el){
    
    setName(el.target.value)
  }

  return (
    <>
    <div className="input-form">
      <input type="text" 
       onChange={handleInput}
      placeholder='Enter Name' value={name} />
      <h1>{name}</h1>
      </div>
      
    </>
  )
}

export default App
