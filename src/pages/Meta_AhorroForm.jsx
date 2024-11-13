import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { createMeta_Ahorro, deleteMeta_Ahorro,  getMeta_Ahorro, updateMeta_Ahorro} from '../api/Meta_Ahorro.api';
import { useEffect } from 'react';

export function Meta_AhorroForm(){
  const  {register, handleSubmit, formState:{
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
      await updateMeta_Ahorro(params.id, data)
    } else {
      const res=await createMeta_Ahorro(data);
      console.log(res);
    }
     navigate('/Meta_Ahorro');
  } )

  useEffect(()=>{
    async function loadMeta(){
        if (params.id){
          console.log("Solicitar Datos")
          const res= await getMeta_Ahorro(params.id);
          console.log(res);
          setValue('descripcion', res.data.descripcion);
          setValue('monto_ahorro', res.data.monto_ahorro);
          setValue('fecha_limite', res.data.fecha_limite);
          setValue('id_user',      res.data.id_user);
        }
    }
      loadMeta();
  },[]);

  
 

 return(
    <div>
      <form onSubmit={onSubmit}>

      <input type='text'   placeholder='descripcion'{...register("descripcion", {required: true})}/>
      {errors.descripcion && <span>La descripción del gasto es requerido</span>}
                
      <input type='number' placeholder='monto_ahorro'{...register("monto_ahorro", {required: true})}/>
      {errors.monto_ahorro && <span>Por favor agrega el monto de ahorro , es requerido</span>}
                  
      <input type='date'   placeholder='fecha_limite'{...register("fecha_limite", {required: true})}/>
      {errors.fecha_limite && <span>Por favor agrega la fecha_limite del gasto, es requerido</span>}

      <input type="number"placeholder="id_user"{...register('id_user', {required: true })}/>
      {errors.id_user && <span>El ID de usuario es requerido</span>}

    
      <button>Guardar</button>

    </form>

    {params.id && (
        <button
          onClick={async() =>{
            const accepted= window.confirm("¿Desea eiminar la Meta de Ahorro?")
             if (accepted){
              await deleteMeta_Ahorro(params.id);
              navigate('/Meta_Ahorro')
             }
          }}
        >
            Eliminar
        </button>)}



  </div>


 )
   
  
  
  
}

