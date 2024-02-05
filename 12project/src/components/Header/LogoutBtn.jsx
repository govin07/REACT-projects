import React from "react";
import { UseDispatch, useDispatch } from "react-redux";
import authService from "../../appwrite/config";
import { logout } from "../../store/authSlice";
function LogoutBtn(){
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch (logout())
        })
    }
    return(
        <button className=" py-2 inline-block px-6 duraction-200 hover:bg-blue-100 rounded=full">Logout</button>
    )
}
export default LogoutBtn;