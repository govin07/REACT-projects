import {Link} from 'react-router-dom'

export default function NotFound(){
    return(
        <>
        <section className="form-parent">
        <div className="notfound">
            <h1>404 Not Foundbr <br />  <Link to="/register">Register Now To use</Link></h1>
        </div>
        </section>
        </>
    )
}