import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import authService  from "./appwrite/auth";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


import { Outlet } from 'react-router-dom';



function App() {
   const [loading, setLoading] = useState(true);
   const dispatch = useDispatch();

   useEffect(() => {
    authService.getCurrentUser()
    .than((userData) => {
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
   }, [])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <h1>hello</h1>
        <Header/> 
        <main>
          {/* <Outlet/> */}
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
};

export default App;
