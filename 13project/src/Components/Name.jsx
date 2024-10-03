import './Name.css'
 
 
export default function Name(props){
    // Array.from(props)
    Object.keys(props)
    console.log(props)
    // console.log(props)
    const Name = props.call.name
    const lastName = props.call.lastName
    return(
        <>
        <h1>my name is {Name} singh {lastName}</h1>
        
        
        
        </>
    )
}
