import { useNavigate } from "react-router-dom";

export function MetaCard ({Meta}){
     
     const navigate=useNavigate();
     return(
            <div style={{background: "#cac0ff3d"}}
                //para poder elimir se arma esta ruta con el id_categoria 
                onClick={()=>{
                navigate('/Meta_Ahorro/'+Meta.id_meta)
                }}
            >

                <h1>{Meta.descripcion }</h1>
                <p>{ Meta.monto_ahorro }</p>
                <p>{ Meta.fecha_limite }</p>
                <p>{ Meta.id_user }</p>

               <hr/>
          </div>
     );
}