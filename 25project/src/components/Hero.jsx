import React from "react";

 export default function Hero(){
    return(
        <>
        <div className=" w-full flex m-20 gap-4  p-5">
            <div className="p-5">
                <h1 className=" mt-[15px] font-poppins text-[75px] font-bold leading-none tracking-[5px]">YOUR FEET <br /> DESERVE <br /> THE BEST</h1>
                <p className="mt-[5px] leading-none text-start font-medium">YOUR FEET DESERVE THE BEST AND WE’RE HERE <br /> TO  HELP YOU WITH OUR SHOES.YOUR FEET DESERVE  <br />THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="btn mt-6 flex gap-5 text-lg p-5">
                    <button className="bg-red-500 p-2 rounded text-white" >Shop Now</button>
                    <button className="border-2 rounded p-2">Category</button>
                </div>
            </div>
            <div >
                <img className="w-full h-full" src="shoe_image.png" alt="" />
            </div>
        </div>
        </>
    )
}