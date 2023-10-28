import React from "react";
import Cadeira from "./cadeira";

export default function SalaCinema() {
  return (
    <div className="SalaCinema">
      <div id="cadEsq">
        <Cadeira estadoInicial={0} />
        <Cadeira estadoInicial={0} />
        <Cadeira estadoInicial={0} />
        <Cadeira estadoInicial={0} />
        <Cadeira estadoInicial={0} />
        <Cadeira estadoInicial={0} />
        <Cadeira estadoInicial={0} />
        <Cadeira estadoInicial={0} />
        <Cadeira estadoInicial={2} />
        <Cadeira estadoInicial={0} />
        <Cadeira estadoInicial={0} />
        <Cadeira estadoInicial={2} />
      </div>
      <div id="cadMeio">
        <Cadeira estadoInicial={0} />
        <Cadeira estadoInicial={2} />
        <Cadeira estadoInicial={1} />
        <Cadeira estadoInicial={1} />
        <Cadeira estadoInicial={2} />
        <Cadeira estadoInicial={2} />
        <Cadeira estadoInicial={2} />
        <Cadeira estadoInicial={0} />
        <Cadeira estadoInicial={2} />
        <Cadeira estadoInicial={1} />
        <Cadeira estadoInicial={1} />
        <Cadeira estadoInicial={2} />
        <Cadeira estadoInicial={2} />
        <Cadeira estadoInicial={2} />
        <Cadeira estadoInicial={0} />
        <Cadeira estadoInicial={2} />
        <Cadeira estadoInicial={1} />
        <Cadeira estadoInicial={1} />
        <Cadeira estadoInicial={0} />
        <Cadeira estadoInicial={2} />
        <Cadeira estadoInicial={0} />
      </div>
      <div id="cadDir">
        <Cadeira estadoInicial={0} />
        <Cadeira estadoInicial={0} />
        <Cadeira estadoInicial={0} />
        <Cadeira estadoInicial={2} />
        <Cadeira estadoInicial={0} />
        <Cadeira estadoInicial={0} />
        <Cadeira estadoInicial={0} />
        <Cadeira estadoInicial={0} />
        <Cadeira estadoInicial={0} />
        <Cadeira estadoInicial={2} />
        <Cadeira estadoInicial={0} />
        <Cadeira estadoInicial={0} />
      </div>
    </div>
  );
}
