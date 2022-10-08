import React,{useRef} from "react";

function References() {
    let refMenu=useRef()
    let refMenuBtn=useRef()
    const handleToggleMenu=(e)=>{
        // let menu=document.getElementById('menu')
        // console.log(e.target.textContent);
        // if(e.target.textContent==='Menú'){
        //     e.target.textContent='Cerrar'
        //     menu.style.display='block'
        // }else{
        //     e.target.textContent='Menú'
        //     menu.style.display='none'

        // }

        if(refMenuBtn.current.textContent==='Menú'){
            refMenuBtn.current.textContent='Cerrar'
            refMenu.current.style.display=''
        }else{
            refMenuBtn.current.textContent='Menú'
            refMenu.current.style.display='none'

        }
        console.log(refMenuBtn.current.textContent);
    }
  return (
    <>
      <div>References</div>
      <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>Menú</button>
      <nav id="menu" ref={refMenu} style={{display:'none'}}>
        <a href="#">Seccion 1</a>
        <br />
        <a href="#">Seccion 2</a>
        <br />
        <a href="#">Seccion 3</a>
        <br />
        <a href="#">Seccion 4</a>
        <br />
        <a href="#">Seccion 5</a>
        <br />
      </nav>
    </>
  );
}

export default References;
