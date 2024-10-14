import { UserName } from "./App"
import Category from "./Category"
import { useContext } from "react"


export default function Product(){
    let u = useContext(UserName)
    console.log(u)

    
    return(
        <>
        <div className="product">
            <h1>product component {u.name}</h1>

            <Category />
            <button onClick={() => u.setName((prev) =>  prev += " aditya")}>onclick</button>
        </div>
        </>
    )
}