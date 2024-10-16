import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Register(){
    const [userDetails, setUserDetails] = useState({
        name: "",
        email:"",
        password : "",
        age : "",
    })
    const [message, setMessage] = useState({
        type: "",
        text: "user is not registered"
    })
    function handleInput(e){
        setUserDetails((prev)=>{
            return {...prev, [e.target.name]: e.target.value}
            

        })
       

    } 
    function handleSubmit(e){
       e.preventDefault()
       fetch("https:/localhost:800/register",{
        method: "POST",
        body:JSON.stringify(userDetails),
        header:{
            "Content-Type": "application/json"
        }
       })
       .then((response)=> response.json())
       .then((data)=>{
        setMessage({type:"success", text: data.message})
        setUserDetails({
            name: "",
            email:"",
            password : "",
            age : "",
        })
        setTimeout(()=>{
            setMessage("")
        },5000)
       })
       .catch((err)=>{
        console.log(err)

       })
        
    }
    return(
        <>
        <section className="form-parent">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Start your Fitness</h1>
                <input type="text" className="inp" 
                placeholder="Enter your Name" name="name" onChange={handleInput} required value={userDetails.name}/>
                <input type="email" className="inp" placeholder="Enter your Email" required name="email" onChange={handleInput} value={userDetails.email}/>
                <input type="password" className="inp" placeholder="Enter Password"  required max={8} name="password" onChange={handleInput} value={userDetails.password}/>
                <input type="number" className="inp" placeholder="Enter your Age"  max={100} min={15} name="age" onChange={handleInput} value={userDetails.age}/>

                <button className="btn"> Join</button>
                <p>Already Registered ? <Link to="/Login">LogIn</Link></p>
                <p className={message.type}>{message.text}</p>
            </form>

        </section>
        </>
    )
}