import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { createProyeccion_Financiera, deleteProyeccion_Financiera,getProyeccion,updateProyeccion } from  '../api/Proyeccion_Financiera.api';
import { useEffect } from 'react';

export function Proyeccion_FinancieraForm(){
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
      await updateProyeccion(params.id, data)
    } else {
      const res=await createProyeccion_Financiera(data);
      console.log(res);
    }
    navigate('/proyeccion_financiera');
  })


  //para rellenar el formulario si hay un parametro en la url
  useEffect(()=>{
    async function loadProyeccion(){
        if (params.id){
          console.log("Solicitar Datos")
          const res= await getProyeccion(params.id);
          console.log(res);
          setValue('nombre_proyeccion',  res.data.nombre_proyeccion);
          setValue('fecha_proyeccion',   res.data.fecha_proyeccion);
          setValue('periodo_proyectado', res.data.periodo_proyectado);
          setValue('informe', res.data.informe);
          setValue('id_user', res.data.id_user);
        }
    }
      loadProyeccion();
  },[]);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text'   placeholder='nombre_proyeccion' {...register("nombre_proyeccion",{ required: true})}/>
        {errors.nombre_proyeccion && <span>El campo del nombre de la categoria es requerido</span>}
        
        <input type='date'   placeholder='fecha_proyeccion'      {...register("fecha_proyeccion",{ required: true})}/>
        {errors.fecha_proyeccion && <span>El campo de la Fecha  es requerido</span>}

        <select {...register("periodo_proyectado", { required: true })}>
          <option value="">Seleccione el periodo proyectado</option>
          <option value="Semanal">Semanal</option>
          <option value="Quincenal">Quincenal</option>
          <option value="Mensual">Mensual</option>
          <option value="Anual">Anual</option>
        </select>
        {errors.periodo_proyectado && <span>El campo del periodo proyectado es requerido</span>}
        
        <input type='text'   placeholder='informe'      {...register("informe",{ required: true})}/>
        {errors.informe && <span >El campo de informe es requerido</span>}

        <input type="number"placeholder="id_user"{...register('id_user', {required: true })}/>
        {errors.id_user && <span className="error-message">El ID de usuario es requerido</span>}


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

