import { useNavigate } from "react-router-dom";

export function CategoriaCard ({categoria}){
     
     const navigate=useNavigate();
     return(
          <div style={{background: "#cac0ff3d"}}
            //para poder elimir se arma esta ruta con el id_categoria 
            onClick={()=>{
               navigate('/categoria/'+categoria.id_categoria)
            }}
          >

               <h1>{categoria.nombre_categoria}</h1>
               <p> {categoria.descripcion}</p>
               <hr/>
          </div>
     );
}