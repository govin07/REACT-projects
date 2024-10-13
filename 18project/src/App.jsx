import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'

function App() {
  // const [name, setName] = useState("")
  let [details, setDetails] = useState({
  })
  function handleInput(el){
    
    setDetails((prev) => {
      console.log(prev)
      return {...prev, [el.target.name]: el.target.value}

    })
    console.log(details)
  }
  function showInput(){
    // <h1>{details.name}</h1>
  }

  return (
    <>
    <div className="input-form">
      <input type="text" name='name'
       onChange={handleInput}
      placeholder='Enter Name' value={details.name} />
      <input type="text" name='Email' placeholder='Email' onChange={handleInput} value={details.Email}/>
      <button onClick={showInput}>submit</button>
      <h1>{details.name}</h1>
      <h1>{details.Email}</h1>
      </div>
      
    </>
  )
}

export default App
