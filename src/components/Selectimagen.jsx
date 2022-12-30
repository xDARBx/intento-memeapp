import React, { useState, useEffect, useRef } from "react";
import Mostrarimagen from "./Mostrarimagen";




function Selectimagen() {
  const [img, setimg] = useState("");
  const [memes, setmemes] = useState([]);
  const imgseleccionada = useRef();

  // selecion de imagen
  function handleClick(e) {
    // const listOption = e.target.src; //con img
    const listOption = e.target.dataset.url;
    setimg(listOption);
  }

  // fetch de api imagenes
  const apiUrl = "https://api.memegen.link/templates";

  const datos = async () => {
    const response = await fetch(apiUrl);
    const datafull = await response.json();
    const data = datafull.filter((filtrar) => filtrar.lines === 2);
    setmemes(data);
  };

  useEffect(() => {
    datos();
  }, []);

  return (
    <>
    
      <div id="eleccionimg">
      <nav class="navbar navbar-expand-lg mb-2 navbar-dark bg-primary">
  <div class="container-md text-center">
    <a class="navbar-brand text-center" href="home">Meme-:O</a>
  </div>
</nav>
        <div className="dropdown">
          <button
            className="btn btn-primary mb-4 dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            Buscar imágen
          </button>
          <ul className="dropdown-menu dropdown-menu-center">
            {memes.map((op) => (
              <li
                className="dropdown-item"
                key={op.id}
                data-url={op.blank}
                onClick={handleClick}
                ref={imgseleccionada}>
                {/* <img src={op.blank} /> */}
                {op.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Mostrarimagen img={img} />
      </div>
    </>
  );
}

export default Selectimagen;
