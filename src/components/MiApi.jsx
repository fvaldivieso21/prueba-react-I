import React from "react";
import { useState, useEffect } from "react";
import MiCard from "./MiCard";
import "../assets/css/MiApi.css"
import Buscador from "./Buscador";

function MiApi() {
  
  const [series, setSeries] = useState([]);
  const [search, setSearch] = useState("");

  const getSeries = async () => {
    const url = 'https://digimon-api.vercel.app/api/digimon';
    const res = await fetch(url);
    const data = await res.json();
    const jsonOrdenado = data.sort((a,b) => a.name.localeCompare(b.name));

    setSeries(jsonOrdenado);
  };

  
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getSeries();
  }, []);
    
    return(
        <div>
          <Buscador onChange={handleChange} search={search} />
          <div className="contenedor-cards">
             
             {series.filter((item) =>
              item.name.
              toLowerCase().
              includes(search.toLowerCase())).
              map((c,index) => (
              <MiCard key={index} name={c.name} img={c.img} level={c.level}/>
             ))}
          </div>
        </div>
    );
}

export default MiApi;