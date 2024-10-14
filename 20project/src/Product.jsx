import { UserName } from "./App"
import Category from "./Category"
import { useContext } from "react"


export default function Product(){
    let u = useContext(UserName)
    console.log(u)
    
    return(
        <>
        <div className="product">
            <h1>product component {u}</h1>
            <Category />
        </div>
        </>
    )
}