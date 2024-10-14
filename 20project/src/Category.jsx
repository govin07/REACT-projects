import { UserName } from "./App"
import { useContext } from "react"

export default function Category(){
    let u = useContext(UserName)
    return(
        <>
        <div className="category">
            <h1>category component{u.name}</h1>
        </div>
        </>
    )
}