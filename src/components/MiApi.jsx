import React, { useState } from "react";
import { useEffect } from "react";
import MiCard from "./MiCard";
import "../assets/css/MiApi.css"

function MiApi() {
  const [series, setSeries] = useState([]);
  const [buscador, setBuscador] = useState("");

  const getSeries = async () => {
    const url = 'https://digimon-api.vercel.app/api/digimon';
    const res = await fetch(url);
    
    const data = await res.json();
    console.log(data);
    setSeries(data);
  };

  useEffect(() => {
    

    getSeries();
  }, []);
    
    return(
        <div className="contenedor-cards">
             {series.map((c,index) => (
             <MiCard key={index} name={c.name} img={c.img} level={c.level}/>
             ))}
        </div>
    );
}

export default MiApi;