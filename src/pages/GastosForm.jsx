import {useForm} from 'react-hook-form';
import {useNavigate, useParams} from 'react-router-dom';
import {createGastos, deleteGastos} from '../api/Gastos.api';

export function GastosForm(){
     const {register, handleSubmit, formState:{
       errors
     }}=useForm();

     const navigate =useNavigate();
     const params = useParams();
     console.log(params);
   

      const onSubmit = handleSubmit (async data => {
        console.log(data);
        const res=await createGastos(data);
        console.log();
      })

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

