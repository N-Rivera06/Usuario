import {useForm} from 'react-hook-form';
import {useNavigate, useParams} from 'react-router-dom';
import {createGastos, deleteGastos, getGasto, updateGasto} from '../api/Gastos.api';
import { useEffect } from 'react';

export function GastosForm(){
     const {register, handleSubmit, formState:{
       errors
     },
     setValue,
     }=useForm();

     const navigate =useNavigate();
     const params = useParams();
     console.log(params);


     const onSubmit = handleSubmit( async data => {
      console.log(data);
      //agregar validación para saber si va a crear o actualizar una categoria
      if(params.id){
        console.log("Modificando...")
        await updateGasto(params.id, data)
      } else {
        const res=await createGastos(data);
        console.log(res);
      }
      navigate('/gastos');
    } )

    useEffect(()=>{
      async function loadGasto(){
          if (params.id){
            console.log("Solicitar Datos")
            const res= await getGasto(params.id);
            console.log(res);
            setValue('descripcion', res.data.descripcion);
            setValue('monto', res.data.monto);
            setValue('fecha', res.data.fecha);
            setValue('id_user', res.data.id_user);
            setValue('id_categoria', res.data.id_categoria);
          }
      }
        loadGasto();
    },[]);
  
   
  return(
    <div> 
      <form onSubmit={onSubmit}>

        <input type='text'   placeholder='descripcion'{...register("descripcion", {required: true})}/>
        {errors.descripcion && <span>La descripción del gasto es requerido</span>}
                  
        <input type='number' placeholder='monto'{...register("monto", {required: true})}/>
        {errors.monto && <span>Por favor agrega el monto del gasto, es requerido</span>}
                    
        <input type='date'   placeholder='fecha'{...register("fecha", {required: true})}/>
        {errors.fecha && <span>Por favor agrega la fecha del gasto, es requerido</span>}

        <input type="number"placeholder="id_user"{...register('id_user', {required: true })}/>
        {errors.id_user && <span>El ID de usuario es requerido</span>}

        <input type="number"placeholder="id_categoria" {...register('id_categoria', {required:true })}/>
        {errors.id_categoria && <span>El ID de categoría es requerido</span>}
                    
        <button>Guardar</button>
      </form>

      {params.id && (
        <button
          onClick={async() =>{
            const accepted= window.confirm("¿Desea eiminar el Gasto?")
             if (accepted){
              await deleteGastos(params.id);
              navigate('/gastos')
             }
          }}
        >
            Eliminar
        </button>)}
    </div>
  )
}

