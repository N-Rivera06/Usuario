import { useEffect, useState } from "react";
import {getAllProyeccion_Financiera} from "../api/Proyeccion_Financiera.api";
import {ProyeccionCard} from  "./ProyeccionCard"

export function  Proyeccion_FinancieraList(){
  const [proyeccion_financiera, SetProyeccion_Financiera] = useState([]);

  useEffect(() =>{
      async function loadProyeccion_Financiera() {
            const res=await getAllProyeccion_Financiera();
            console.log(res);
            SetProyeccion_Financiera(res.data);
      }
      loadProyeccion_Financiera();
  }, []);
 
  return <div>
      {proyeccion_financiera.map((proyeccion) => (
         <ProyeccionCard key={proyeccion.id_proyeccion} proyeccion={proyeccion}/> 
        ))}
    </div>
}

