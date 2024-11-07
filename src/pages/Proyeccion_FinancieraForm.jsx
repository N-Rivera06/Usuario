import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { createProyeccion_Financiera, deleteProyeccion_Financiera} from  '../api/Proyeccion_Financiera.api';

export function Proyeccion_FinancieraForm(){
  const  {register, handleSubmit, formState:{
    errors
  }}=useForm();

  const navigate = useNavigate();
  const params = useParams();
  console.log(params);

  const onSubmit = handleSubmit( async data => {
    console.log(data);
    const res=await createProyeccion_Financiera(data);
    console.log();
  } )

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text'   placeholder='nombre_proyeccion' {...register("nombre_proyeccion",{ required: true})}/>
        {errors.nombre_categoria && <span>El campo del nombre de la categoria es requerido</span>}
        
        <input type='date'   placeholder='fecha_proyeccion'      {...register("fecha_proyeccion",{ required: true})}/>
        {errors.nombre_categoria && <span>El campo de la Fecha  es requerido</span>}

        <input type='date'   placeholder='periodo_proyectado'      {...register("periodo_proyectado",{ required: true})}/>
        {errors.nombre_categoria && <span>El campo del periodo proyectado es requerido</span>}
        
        <input type='text'   placeholder='informe'      {...register("informe",{ required: true})}/>
        {errors.nombre_categoria && <span>El campo de informe es requerido</span>}

        <input type="number"placeholder="id_user"{...register('id_user', {required: true })}/>
        {errors.id_user && <span>El ID de usuario es requerido</span>}


        <button>Enviar</button>
      </form>
     
      {params.id && (
        <button
          onClick={async() =>{
            const accepted= window.confirm("¿Desea eiminar la Proyeccion Financiera?")
             if (accepted){
              await deleteProyeccion_Financiera(params.id);
              navigate('/proyeccion_financiera')
             }
          }}
        >
            Eliminar
        </button>)}
    </div>

  )

}

