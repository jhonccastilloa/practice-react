import { useEffect } from "react";
import React from "react";

function Componente(){
    
    useEffect(() => {
        console.log("hola")
    })
    
    return(
        <div>Soy un componente</div>
    )
}
export default Componente