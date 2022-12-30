import Inputtexto from "./Inputtexto";


function Mostrarimagen(img) {
  return (
    <>
      <div className="img_container" id="img_container">
        <figure id="figure">
          <img id="ubicar" alt="imagen"
            src={
              img.img !== ""
                ? `${img.img}`
                : "img/no_img.webp"
            }
          />
        </figure>
        <h5 data-html2canvas-ignore className="mt-1">
          Arrastra el texto 
        </h5>
        <Inputtexto />
        <Inputtexto />
      </div>
    </>
  );
}

export default Mostrarimagen;