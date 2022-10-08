import React from "react";
import './Style.css'

import moduleStyle from "./Style.module.css"
function Style() {
  return (
    <section className="style">
      <h2>Estilos css</h2>
      <h3 className="bg-react">Estilos en hoja CSS externa</h3>
      <h3 className="bg-react" style={{borderRadius:".25rem",margin:"1rem"}}>Estilos en linea css</h3>
      <h3 className={moduleStyle.error}>Estilos con modulos</h3>
      <h3 className={moduleStyle.success}>Estilos con modulos</h3>
      <h3 className="bg-sass">Estilos SASS</h3>

    </section>
  );
}

export default Style;
