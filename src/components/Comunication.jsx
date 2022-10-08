import React from "react";
import { useState } from "react";

function Comunication() {
  const [count, setCount] = useState(0);
  const incrementCount = (e) => {
    console.log(e);
    setCount(count + 2);
  };
  return (
    <div>
      <h2>Comunicacion entre componentes</h2>
      <Hijo mensaje="mensaje para el hijo 1" />
      <Hijo
        incrementCount={incrementCount}
        mensaje="mensaje para el hijo 2"
      />
    </div>
  );
}

export default Comunication;

function Hijo({ mensaje, incrementCount }) {
  return (
    <>
      <h3>{mensaje}</h3>
      <button onClick={incrementCount}>aumentar</button>
    </>
  );
}
