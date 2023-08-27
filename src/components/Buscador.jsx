import React from "react";
import "../assets/css/Buscador.css"



function Buscador({ onChange, search }) {
    return (
      <div className="contenedor-buscador">
          <input
            className="form-control"
            type="text"
            placeholder="Buscar un digimon"
            value={search}
            onChange={onChange}
          />
      </div>
    );
  }

export default Buscador;