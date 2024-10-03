import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color, setColor] = useState('white')
  

  return (
    <>

      <div className="buttons" style={{backgroundColor: color}}>
     <button onClick={()=> setColor(color = 'Red')} style={{backgroundColor: "Red"}}>Red</button>
     <button onClick={() => setColor(color ='yellow')} style={{backgroundColor: "yellow"}}>yellow</button>
     <button onClick={()=> setColor(color = 'green')} style={{backgroundColor: "green"}}>green</button>
     <button onClick={()=> setColor(color = 'Pink')} style={{backgroundColor: "pink"}}>pink</button>
     </div>
    </>
  )
}

export default App
