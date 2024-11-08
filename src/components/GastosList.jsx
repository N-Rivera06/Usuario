import {useEffect, useState } from "react";
import {getAllGastos} from "../api/Gastos.api";
import {GastoCard }  from "./GastoCard";



export function GastosList() {
  const [gastos, setGastos] = useState([]);

  useEffect(() => {
    async function loadGastos() {
      const res = await getAllGastos();
      console.log(res);
      setGastos(res.data);
    }
    loadGastos();
  }, []);

  return <div>
    {gastos.map((gasto) => (
      <GastoCard key= {gasto.id_gastos} gasto={gasto}/>
    ))}
  </div>


}


4