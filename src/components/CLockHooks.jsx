import React, { useState, useEffect } from "react";

function CLock({ time }) {
  return <h3>{time}</h3>;
}

function CLockHooks() {
  const [hour, setHour] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let interval
    if (visible) {
      interval = setInterval(() => {
        setHour(new Date().toLocaleTimeString());
      }, 1000);
    }else{
        clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [visible]);

  return (
    <div>
      <h2>Relo con Hooks</h2>
      {visible && <CLock time={hour} />}
      <button onClick={() => setVisible(true)}>Iniciar</button>
      <button onClick={() => setVisible(false)}>Detener</button>
    </div>
  );
}

export default CLockHooks;
