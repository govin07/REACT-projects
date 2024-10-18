import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  {BrowserRouter, Routes , Route,useNavigate} from 'react-router-dom'
import Register from './components/Register'
import LogIn from './components/LogIn'
import NotFound from './components/NotFound'
import Track from './components/Track'
import { userContext } from './contexts/UserContext'

function App() {
  const navigate  = useNavigate() 
  const [loggedUser, setLoggedUser] = useState(null)

  useEffect(()=>{
    if(localStorage.getItem("nutrify-user")){
      setLoggedUser(localStorage.getItem("nutrify-user"))
         
    }
    else{
       navigate("/login")
    }
  })

  return (
    <>
     <userContext.Provider value={{loggedUser,setLoggedUser}}>
      {/* <BrowserRouter> */}
      <Routes>
      <Route path='/' element={<LogIn/>}/>
      <Route path='/Login' element={<LogIn/>}/>
       <Route path='/register' element={<Register/>}/>
       <Route path='/track' element={<Track/>}/>
       <Route path='*' element={<NotFound/>}/>
     
       

      </Routes>
      
      {/* </BrowserRouter> */}
      </userContext.Provider>
    </>
  )
}

export default App
