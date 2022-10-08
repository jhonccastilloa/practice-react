import React,{useState,useEffect} from 'react'

function ScrollHooks() {
    const [scrolly, setScrolly] = useState(0)
    const [name, setName] = useState("hola Jhon")

    useEffect(()=>{
        console.log("fase de actualizacion");
        const detectarScroll=()=>setScrolly(window.pageYOffset)

        window.addEventListener("scroll",detectarScroll)
   
    },[scrolly]);
    useEffect (()=>{
        console.log("fase de montaje");
    },[])
    useEffect (()=>{
        console.log("fase de fases");
    },[name])

  return (
    <div>
        <h2>Hooks- useEffect y el ciclo de vida </h2>
        <p>Scroll Y del navegador {scrolly}px</p>
    </div>
  )
}

export default ScrollHooks