import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Countries from './components/Countries'
import './App.css'

function App() {
  let [coutrties , setCoutries] = useState([
    {
      country: "india",
      capital : "new Delhi",
      population: "1.5Billion",
    },
    {
      country: "USA",
      capital: "DC wasington",
      population: "333million",
    },
    {
      country: "Austrelia",
      capital: "new jusrsy",
      population: "20million",
    },
    {
      country: "nepal",
      capital: "katmandu",
      population: "15million",
    },
     
  ])
 


  return (
    <>
       <Countries  con = {coutrties}/>
       <Countries con = {coutrties}/>
    </>
  )
}

export default App
