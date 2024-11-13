import { useEffect, useState } from "react";
import {getAllMeta_Ahorro} from "../api/Meta_Ahorro.api";
import { MetaCard } from "./MetaCard";


export function  Meta_AhorroList(){
  const [meta_ahorro, SetMeta_Ahorro] = useState([]);

  useEffect(() =>{
      async function loadMeta_Ahorro() {
            const res=await getAllMeta_Ahorro();
            console.log(res);
            SetMeta_Ahorro(res.data);
      }
      loadMeta_Ahorro();
  }, []);
 
  return <div> 
        {meta_ahorro.map(Meta =>(
            <MetaCard key={Meta.id_meta} Meta={Meta}/>
        ))}
        </div>

}
