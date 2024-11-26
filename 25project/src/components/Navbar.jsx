import React from "react";

export default function Navbar(){
    return(
        <>
        <div className="  w-fit flex flex-row  space-x-96">
         <img  className ="w-fit  drop-shadow-md" src="brand_logo.png" alt="sorry" />
         <div className="flex gap-5  m-.1 p-4">
           <h3 >MENU</h3>
           <h3>LOCATION</h3>
           <h3>ABOUT</h3>
           <h3>CONTACT</h3>
         </div>
         <button className="bg-red-500 p-3 rounded text-white">Login</button>

         </div>


        </>
    )
}