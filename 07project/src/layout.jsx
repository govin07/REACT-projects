import React  from "react";
import Header from "./compounets/Header/header";
import Footer from "./compounets/Footer/footer";
import { Outlet } from "react-router-dom";
function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout