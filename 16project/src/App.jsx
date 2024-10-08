import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/Product'

function App() {
  const [showPr, setShowPr] = useState(true)
  

  return (
    <>
     <h1>govind singh solanki</h1>
     
     {showPr === true? <Product/> : <h1>component is unmounted</h1>}
     <button onClick={() => setShowPr(false)}>hide </button>
     <button onClick={() => setShowPr(true)}>show </button>
    </>
  )
}

export default App
