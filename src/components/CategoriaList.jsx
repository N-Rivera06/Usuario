import { useEffect, useState } from "react";
import { getAllCategorias }    from "../api/Categorias.api";
import { CategoriaCard }       from "./CategoriaCard";


export function  CategoriaList(){
  const [categorias, SetCategorias] = useState([]);

  useEffect(() =>{
      async function loadCategorias () {
            const res=await getAllCategorias();
            console.log(res);
            SetCategorias(res.data);
      }
      loadCategorias();
  }, []);
 
  return <div> 
    {categorias.map(categoria=>(
      <CategoriaCard key={categoria.id_categoria}  categoria={categoria}/>  
    ))}
    </div>
}


