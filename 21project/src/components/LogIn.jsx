import { Link } from "react-router-dom"

export default function LogIn(){
    return(
        <>
        <section className="form-parent">
            <form className="form">
                <h1>Log in to Fitness</h1>
               
                <input type="email" className="inp" placeholder="Enter your Email"  />
                <input type="password" className="inp" placeholder="Enter Password" />
                

                <button className="btn">LogIn</button>
                <p> Don't have a Accoutn ? <Link to="/register">Register Now</Link></p>
            </form>

        </section>
        </>
    )
}