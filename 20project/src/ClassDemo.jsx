 import React from "react"
 
 class ClassDemo extends React.Component 
{
    constructor(props){
        super(props)
        this.state={
            country: "india",
            capital: "new delhi",
        }

    }
    render(){
        // console.log(props)
        return(
            <>
            <h1>hello class function {this.props.name}</h1>
            <h1>my county is {this.state.country}</h1>
            <h1>and capital of india is {this.state.capital}</h1>
            <button onClick={() => {
                this.setState({capital: "delhi"})
            }}>change capital</button>
            </>
        )
    }
}

export default ClassDemo