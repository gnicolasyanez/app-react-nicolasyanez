import React from "react";
import "./Pagina.css";
import Logo from "../Images/logo/logo1.png";

function Pagina(props) {
  const { greeting } = props;

  return (
    <div className="fondoPagina">
      <section className="pagina">
        <div className="paginaContenido">
          <img className="paginaImagen" src={Logo} alt="Logo inicio" />
          <div className="paginaCard">
            <h1 className="centerText">{greeting}</h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pagina;
