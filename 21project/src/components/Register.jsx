import { Link } from "react-router-dom"

export default function Register(){
    return(
        <>
        <section className="form-parent">
            <form className="form">
                <h1>Start your Fitness</h1>
                <input type="text" className="inp" 
                placeholder="Enter your Name"name="name"/>
                <input type="email" className="inp" placeholder="Enter your Email"  />
                <input type="password" className="inp" placeholder="Enter Password" />
                <input type="number" className="inp" placeholder="Enter your Age" />

                <button className="btn">Join</button>
                <p>Already Registered ? <Link to="/Login">LogIn</Link></p>
            </form>

        </section>
        </>
    )
}