import { useEffect, useState , useRef} from "react"

export default function RefDemo(){
     let [name, setName] = useState("govind");
     let refVar = useRef(10)
     let pTag = useRef()
     
     useEffect(()=>{
        console.log(name)
        console.log(refVar.current)
        console.log(pTag)
     })

    return(

        <>
        <h1>hello</h1>
        <h1>{name}</h1>
        <button onClick={() => setName('aditya')}>change name</button>

        <p ref={pTag}>hello every one</p>
        <button onClick={()=>{
            pTag.current = "heelo govind"
        }}>click</button>
        
        </>
    )
}