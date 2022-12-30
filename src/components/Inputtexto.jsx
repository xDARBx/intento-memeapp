import React, { useState } from "react";
import Draggable from "react-draggable";

function Inputtexto() {
  const [textoMeme, settextoMeme] = useState();
  const [colorTexto, setcolorTexto] = useState("white");
  const [tamanioTexto, settamanioTexto] = useState("24");
  const [tipografiaTexto, settipografiaTexto] = useState("Arial");

  const estilos = {
    estilo: {
      color: colorTexto,
      fontSize: tamanioTexto + "px",
      fontFamily: tipografiaTexto,
      textTransform: "uppercase",
      textShadow: "0 0 3px #000000",
    },
  };
  return (
    <>
      <div data-html2canvas-ignore id="modificadores">
        <div>
          <label htmlFor="texto" className="form-label">
            Texto Superior
          </label>
          <input
           className="form-control form-control-sm"
            placeholder="Ingrese texto"
            onChange={(e) => {
              settextoMeme(e.target.value);
            }}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="color" className="form-label">
            Color
          </label>
          <br />
          <input
            onChange={(e) => {
              setcolorTexto(e.target.value);
            }}
            type="color"
          />
        </div>
        <div>
          <label htmlFor="tamaniotexto" className="form-label">
            Tamaño de fuente
          </label>
          <input
            className="form-range"
            onChange={(e) => {
              settamanioTexto(e.target.value);
            }}
            type="range"
            min="20"
            max="40"
            value={tamanioTexto}
            step="1"
          />
        </div>
        <div>
          <label htmlFor="tipografia" className="form-label">
            Tipografia{""}
          </label>
          <select
          className="form-select form-select-sm"
            onChange={(e) => {
              settipografiaTexto(e.target.value);
            }}>
                <br /><br /><br />
            <option value="Arial">Arial</option>
            <option value="Comic-Sans">Comic-sans</option>
            <option value="Serif">Serif</option>
          </select>
        </div>
      </div>
      <Draggable bounds="figure">
        <p className="texto_superior" style={estilos.estilo}>
          {textoMeme}
        </p>
      </Draggable>
    </>
  );
}

export default Inputtexto;