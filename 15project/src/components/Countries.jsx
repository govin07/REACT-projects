 import './countries.css'
 export default function Countries(props){
   



    return(
    <div className="country">
        <h1> country : {props.name}</h1>
        <h3> capital : {props.cap}</h3>
        <p> population : {props.pop}</p>
    </div>
    )
}