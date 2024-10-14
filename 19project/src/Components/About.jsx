import Image from "./Image";
import Price from "./Price";
import Location from "./Location";
import {Link, Outlet} from 'react-router-dom'

export default function About(){
    return(
        <>
        <div className="about">
        {/* <Outlet> */}
            <h1>About us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ducimus.</p>
            
            <ul>
                <li>
                    
                
                    <Link to="/about/image">image</Link>
                    {/* <Image/> */}
                </li>
                <li>
                <Link to="/about/price">price</Link>
                    
                </li>
                <li>
                <Link to="/about/location">location</Link>
                    
                </li>
                <Outlet/>
            </ul>
            

        


        </div>

        </>
    )
}