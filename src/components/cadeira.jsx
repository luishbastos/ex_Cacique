import React, { useState, useEffect } from "react";

export default function Cadeira({ estadoInicial }) {
  // Variáveis de estado
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setSelected(estadoInicial);
  }, [estadoInicial]);

  var circleStyle = {
    padding: 10,
    margin: 2,
    display: "inline-block",
    borderRadius: "50%",
    backgroundColor:
      selected === 0 ? "grey" : selected === 1 ? "blue" : "black",
    width: 10,
    height: 10,
    left: 0,
    top: 0
  };

  function cadeira() {
    if (selected === 0) {
      setSelected(1);
    } else if (selected === 1) {
      setSelected(0);
    }
  }

  return (
    <div className="cadeiras">
      <div id="cadeira" style={circleStyle} onClick={cadeira}></div>
    </div>
  );
}
