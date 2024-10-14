import Image from "./Image";
import Price from "./Price";
import Location from "./Location";

export default function About(){
    return(
        <>
        <div className="about">
            <h1>About us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ducimus.</p>
            <ul>
                <li>
                    {/* <Image/> */}
                </li>
                <li>
                    {/* <Price/> */}
                </li>
                <li>
                    {/* <Location/> */}
                </li>
            </ul>

            <Image/>
            <Price/>
            <Location/>


        </div>

        </>
    )
}