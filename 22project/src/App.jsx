import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([])
  useEffect(()=>{
      fetch("https://example.com/public/randomusers?page=1&limit=10")
     .then((response) => response.json())
     .then((res) => {
      console.log(res)
      // setData(res)

     })
     .catch((err)=>{
      console.log(err)

     })
     console.log("hello")
  })


  return (
    <>
      <h1>hello</h1>
    </>
  )
}

export default App
