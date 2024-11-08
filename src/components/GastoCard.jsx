import { useNavigate } from "react-router-dom";

export function GastoCard ({gasto}){
  
  const navigate=useNavigate();
  return(
    <div style={{background: "#cac0ff3d"}}
    //para poder elimir se arma esta ruta con el id_categoria 
    onClick={()=>{
       navigate('/gastos/'+ gasto.id_gastos)
    }}
    
    > 
        <h1>{gasto.descripcion} </h1>
        <p>{gasto.monto} </p>
        <p>{gasto.fecha}</p>
        <p>{gasto.id_user}</p>
        <p>{gasto.id_categoria}</p>
        <hr/>
    </div>
  );

}