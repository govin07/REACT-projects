import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './compounets/Footer/footer'
import Home from './compounets/Home/home'
import Header from './compounets/Header/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header/>
   <Home/>
   <Footer/>

    </>
  )
}

export default App
