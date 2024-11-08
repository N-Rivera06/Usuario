import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { createCategoria,deleteCategoria, getCategoria, updateCategoria } from '../api/Categorias.api';
import { useEffect } from 'react';

export function CategoriaForm(){
  const  {register, handleSubmit, 
    formState:{
     errors
    },
    setValue,
    }=useForm();

  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  const onSubmit = handleSubmit( async data => {
    console.log(data);
    //agregar validación para saber si va a crear o actualizar una categoria
    if(params.id){
      console.log("Modificando...")
      await updateCategoria(params.id, data)
    } else {
      const res=await createCategoria(data);
      console.log(res);
    }
    navigate('/categoria');
  } )


  //para rellenar el formulario si hay un parametro en la url
  useEffect(()=>{
    async function loadCategoria(){
        if (params.id){
          console.log("Solicitar Datos")
          const res= await getCategoria(params.id);
          console.log(res);
          setValue('nombre_categoria', res.data.nombre_categoria);
          setValue('descripcion', res.data.descripcion);
        }
    }
      loadCategoria();
  },[]);

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

