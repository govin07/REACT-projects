import { useEffect, useState } from 'react'
import './product.css'
export default function Product(){
    let [data, setData] = useState([])


    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setData(json))
            .catch((err)=>{
               console.log(err)
            })
        
        
    },[])






    return(
        <div className="product">
            {
                data.map((ob)=>{
                    console.log(ob)
                    return(
                        <div className='box' key={ob.id}>
                            <img src={ob.image} alt="" />
                            <h1>title: {ob.title}</h1>
                            <h2>price: {ob.price}</h2>
                        </div>
                    )

                })
            }
    
        </div>
    )
}