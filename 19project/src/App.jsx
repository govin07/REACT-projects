import { useState } from 'react'

import reactLogo from './assets/react.svg'
import {BrowserRouter , Routes , Route , Link , Outlet} from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'
import About from './Components/About'
import Product from './Components/Product'
import Service from './Components/Service'
import Header from './Components/Header'
import Image from './Components/Image'
import Price from './Components/Price'
import Location from './Components/Location'
import RefDemo from './Components/RefDemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <RefDemo/>
    
      <BrowserRouter>
           <Header/>


             <Routes>
         <Route path='/about' element={<About/>}>
           <Route path='image' element={<Image/>}/>
           <Route path='price' element={<Price/>}/>
           <Route path='location' element={<Location/>}/>

         </Route>


         <Route path='/product' element={<Product/>}/>
         <Route path='/service' element={<Service/>}/>


        </Routes>
      
      </BrowserRouter>
      {/* <Product/> */}
      {/* <Service/> */}
       
    </>
  )
}

export default App
