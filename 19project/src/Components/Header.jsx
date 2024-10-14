
import { Link } from "react-router-dom"

export default function Header(){


    return(
        <>
          <nav>
      <ul>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/product">Prouct</Link>
        </li>
        <li>
            <Link to="/service">service</Link>
            </li>
      </ul>
     </nav>


        </>
    )
}