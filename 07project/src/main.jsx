import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './layout.jsx'
import Home from './compounets/Home/home.jsx'
import About from './compounets/About/About.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Contact from './compounets/Contact/Contact.jsx'
import User from './compounets/User/User.jsx'
import Github from './compounets/Github/Github.jsx'

let router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },

      {
     path : "about",
     element : <About/>
      },
      {
        path : "Contact",
        element : <Contact/>
         },
         {
          path : "User/:userid",
          element : <User/>
           },
           {
            path : "github",
            element : <Github/>
             }
    ]

  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

export default router
