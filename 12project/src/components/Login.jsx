import React , {useState}from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {login as authLogin} from '../store/authSlice';
import {Button, Input, Logo} from './index';
import { UseDispatch, useDispatch } from 'react-redux';
import authService from "../appwrite/auth";
import {useForm} from 'react-router-dom';


function Login(){
    const navigate = useNavigate();
    const dispatch  = useDispatch();
    const {register, handleSubmit} = useForm();
    const [error, setError] = useState();

    const login = async(data) => {
        setError("")
        try{
            const session = await authService.login(data)
            if(session){
                const userData = await authService.getCurrntUser()
                if(userData) dispatch(authLogin(userData))
                navigate("/")
            }

        }
        catch(erro){
            setError(error.message)

        }
    }
     
    return(
        <div> </div>
    )
}

export default Login();