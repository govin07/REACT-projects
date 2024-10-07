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
  let [isLoggedIn, setLoggedIn] = useState(true)

  function newArr(){
    setCoutries( coutrties = [{
      country: "pakistan",
      capital : "islamabaad",
      population: "222m",
    },
    {
      country: "bangladesh",
      capital : "daka",
      population: "120m",
    }
  ])
  }
  function changeLog(){
    setLoggedIn(false)
  }
 
   

  return (
    <>
    {
        isLoggedIn == true? (<h2>welcome</h2>
        ) : (<h2>please log in</h2>)
    }
      {
        
        coutrties.map((country)=>{
          return(
             <Countries name={country.country} cap={country.capital} pop={country.population}/>
          )
        })
      }
      <button onClick={changeLog}>click me</button>
      <button onClick={newArr}>load new arr</button>
    </>
  )
}

export default App
