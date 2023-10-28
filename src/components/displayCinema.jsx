import React from "react";

export default function DisplayCinema() {
  var imgFilme = {
    display: "inline-block",
    width: 300,
    height: 300
  };

  var designTexto = {
    fontSize: "24px",
    color: "black",
    fontWeight: "bold"
  };

  var designDescFilm = {
    fontSize: "13px",
    color: "grey"
  };

  var cartazCompleto = {
    width: 300,
    height: 400
  };

  return (
    <div className="compFilme" style={cartazCompleto}>
      <img
        src={require("../../public/filme.jpg")}
        alt="filme"
        id="filme"
        style={imgFilme}
      />
      <div id="textoFilme">
        <div id="nomeFilme" style={designTexto}>
          Scary Movie
        </div>
        <div id="descFilme" style={designDescFilm}>
          Scary Movie is an American horror comedy film series that comprises
          five parody films mainly focusing on spoofing horror films.
        </div>
      </div>
    </div>
  );
}
