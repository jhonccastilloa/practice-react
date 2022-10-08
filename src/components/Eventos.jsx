import React,{useState} from "react";

function Eventos(){
    const [count,setCount]=useState(0)
    const sumar=()=>{
        setCount(count+1)
    }
    const restar=()=>{
        setCount(count-1)
    }
    return(
    <div>
        <h2>Eventos en componente en clase</h2>
        <h3>{count}</h3>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
    </div>)
}
 export default Eventos