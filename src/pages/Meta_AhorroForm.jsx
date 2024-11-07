import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { createMeta_Ahorro, deleteMeta_Ahorro } from '../api/Meta_Ahorro.api';

export function Meta_AhorroForm(){
  const  {register, handleSubmit, formState:{
    errors
  }}=useForm();

  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  
  const onSubmit = handleSubmit( async data => {
    console.log(data);
    const res=await createMeta_Ahorro(data);
    console.log();
  } )

 return(
    <div>
      <form onSubmit={onSubmit}>

      <input type='text'   placeholder='descripcion'{...register("descripcion", {required: true})}/>
      {errors.descripcion && <span>La descripción del gasto es requerido</span>}
                
      <input type='number' placeholder='monto_ahorro'{...register("monto_ahorro", {required: true})}/>
      {errors.monto && <span>Por favor agrega el monto de ahorro , es requerido</span>}
                  
      <input type='date'   placeholder='fecha_limite'{...register("fecha_limite", {required: true})}/>
      {errors.fecha && <span>Por favor agrega la fecha_limite del gasto, es requerido</span>}

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

