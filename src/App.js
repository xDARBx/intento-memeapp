import './App.css';
import Inputtexto from './components/Inputtexto';
import Mostrarimagen from './components/Mostrarimagen';
import Selectimagen from './components/Selectimagen';
import React from "react";
import ReactDOM from "react-dom/client";
import html2canvas from "html2canvas";





function App() {
  return (
    <div className="App">
      <Selectimagen />
      <Mostrarimagen />
      
      <Inputtexto />
      
    </div>
  );
}

const onClickExportar = function (evento) {
  

  html2canvas(document.querySelector("#img_container"), {
    allowTaint: true,
    useCORS: true,
  }).then((canvas) => {
    let img = canvas.toDataURL("image/png");
    let link = document.createElement("a");
    link.download = "Meme.jpg";
    link.href = img;
    link.click();
  });
};


ReactDOM.createRoot(document.getElementById("root")).render(
  
    <div className="container text-center p-0">
      
    <Selectimagen/>
    <button type="button" onClick={onClickExportar} className="btn btn-warning sm">Descargar Meme</button>
    </div>
);

export default App;
