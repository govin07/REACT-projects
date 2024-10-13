import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './Components/About'
import Product from './Components/Product'
import Service from './Components/Service'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hello</h1>  
      <About/> 
      <Product/>
      <Service/>
       
    </>
  )
}

export default App
