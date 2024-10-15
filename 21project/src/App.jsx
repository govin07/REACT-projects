import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  {BrowserRouter, Routes , Route} from 'react-router-dom'
import Register from './components/Register'
import LogIn from './components/LogIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<LogIn/>}/>
      <Route path='/Login' element={<LogIn/>}/>
       <Route path='/register' element={<Register/>}/>
     
       

      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
