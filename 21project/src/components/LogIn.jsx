import { useState,useContext} from "react"
import { Link, useNavigate } from "react-router-dom"
import { userContext } from "../contexts/UserContext"

export default function LogIn(){
    const contextData = useContext(userContext)
    const navigates = useNavigate()
    const [userCreds, setUserCreds] = useState({
        email: "",
        password: "",
    })
    const [token, setToken] = useState()
    function handleInput(e){
        setUserCreds((prev)=>{
            return {...prev, [e.target.name]:e.target.value}

        })

    }
    function handleLog(e){
        e.preventDefault()
        fetch("https://localhost:8000/login",{
            method:"POST",
            body:JSON.stringify(userCreds),
            headers:{
                "Content": "application/json"
            }
        })
        .then((response)=>response.json())
        .then((data) => {
        
            localStorage.setItem("nutrify-user",JSON.stringify(data))
            contextData.setLoggedUser(data)
            navigates("/track")
        })

    }
    return(
        <>
        <section className="form-parent">
            <form className="form">
                <h1>Log in to Fitness</h1>
               
                <input type="email" className="inp" required onChange={handleInput} placeholder="Enter your Email" name="email" value={userCreds.email}/>
                <input type="password" className="inp"  required max={8} onChange={handleInput} placeholder="Enter Password" name="password" value={userCreds.password} />
                

                <button className="btn" onClick={handleLog}>LogIn</button>
                <p> Don't have a Accoutn ? <Link to="/register">Register Now</Link></p>
            </form>

        </section>
        </>
    )
}