import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [name, setName] = useState("Govind")
  let [animals, setAnimals] = useState(["Aditya", "Deepanshu", "Sachin", "Chandan"])
  function changeName(){

    setName()
  };
  function AddAnimals(){
    
    // let copy = [...animals];
    // copy.push("Nitin");
    // setAnimals( copy)
    setAnimals((prev) => {
             return [...prev , "Deer"]
    })

  };

  return (
    <>
      <h1>hello</h1>
      <h1>{name}</h1>
      <button onClick={changeName}>click Here</button>
      {
        animals.map((ani, index)=>{
         return <h1 key={index}>{ani}</h1>

        })
        // <button onClick={AddAnimals}>Add animals</button>

      }
      <button onClick={AddAnimals}>Add animals</button>
    </>
  )
}

export default App
