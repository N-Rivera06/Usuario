import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { createCategoria,deleteCategoria } from '../api/Categorias.api';

export function CategoriaForm(){
  const  {register, handleSubmit, formState:{
    errors
  }}=useForm();

  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  const onSubmit = handleSubmit( async data => {
    console.log(data);
    const res=await createCategoria(data);
    console.log();
  } )
  
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text'   placeholder='nombre_categoria' {...register("nombre_categoria",{ required: true})}/>
        {errors.nombre_categoria && <span>El campo del nombre de la categoria es requerido</span>}
        <input type='text'   placeholder='descripcion'      {...register("descripcion",{ required: true})}/>
        {errors.nombre_categoria && <span>El campo de descripción es requerido</span>}
        <button>Enviar</button>
      </form>
     
      {params.id && (
        <button
          onClick={async() =>{
            const accepted= window.confirm("¿Desea eiminar la categoria?")
             if (accepted){
              await deleteCategoria(params.id);
              navigate('/categoria')
             }
          }}
        >
            Eliminar
        </button>)}

    </div>

  )
 
}
