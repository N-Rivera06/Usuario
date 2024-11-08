import { useNavigate } from "react-router-dom";

export function ProyeccionCard({proyeccion}){
     
    const navigate=useNavigate();
    return(
        <div style={{background: "#cac0ff3d"}}
          onClick={()=>{
            navigate('/proyeccion_financiera/' + proyeccion.id_proyeccion)
         }}
        >

            <h1>{proyeccion.nombre_proyeccion}</h1>
            <p>{proyeccion.fecha_proyeccion}</p>
            <p>{proyeccion.periodo_proyectado}</p>
            <p>{proyeccion.informe}</p>
            <p>{proyeccion.id_user}</p>
            <hr/>        
       </div>
    );
}