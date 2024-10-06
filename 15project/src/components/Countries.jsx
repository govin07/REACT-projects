 import './countries.css'
 export default function Countries(props){
    const coun = props.con[0].country
    const cap = props.con[0].capital
    const pop = props.con[0].population



    return(
    <div className="country">
        <h1> country : {coun}</h1>
        <h3> capital : {cap}</h3>
        <p> population : {pop}</p>
    </div>
    )
}