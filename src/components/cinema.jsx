import React, { useState } from "react";
import DisplayCinema from "./displayCinema";
import SalaCinema from "./salaCinema";
import Cadeira from "./cadeira";

export default function Cinema() {
  const [selected, setSelected] = useState(false);

  function trocaDisplay() {
    setSelected(!selected);
  }

  return (
    <div className="Cinema">
      {selected ? (
        <div>
          <div id="seta2" onClick={trocaDisplay}>
            <img src="https://super.so/icon/dark/chevron-up.svg" alt="botao" />
          </div>
          <div class="botaoCinemaItem">
            <div id="tipoCinema">IMAX 3D</div>
            <img
              src="https://super.so/icon/dark/chevron-down.svg"
              alt="botao"
            />
          </div>
          <div class="botaoCinemaItem">
            <div id="dataCinema">Monday, 21st September - 18:00</div>
            <img
              src="https://super.so/icon/dark/chevron-down.svg"
              alt="botao"
            />
          </div>
          <div class="botaoCinemaItem">
            <div id="numPessoas">6 Adults</div>
            <img
              src="https://super.so/icon/dark/chevron-down.svg"
              alt="botao"
            />
          </div>
          <div id="expCadeira">
            <div class="textCadeira">
              <Cadeira estadoInicial={0} />
              Available
            </div>
            <div class="textCadeira">
              <Cadeira estadoInicial={2} />
              Taken
            </div>
          </div>
          <SalaCinema />
          <div id="quadTotal">
            <div id="vlTotal">Total: $56.90</div>
            <div id="checkout">CHECKOUT</div>
          </div>
        </div>
      ) : (
        <div>
          <DisplayCinema />
          <div id="seta" onClick={trocaDisplay}>
            <img
              src="https://super.so/icon/dark/chevron-down.svg"
              alt="botao"
            />
          </div>
        </div>
      )}
    </div>
  );
}
