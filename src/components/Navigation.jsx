import { Link } from "react-router-dom";


export function Navigation() {
   return (
      <div className="navbar">
         
         <h1>Aplicación Control de Gastos</h1>
         
         
         <Link to="/categoria">Categoría</Link>
         
         <Link to="/categoria-add">Agregar categoría</Link>

         <Link to="/gastos">Gastos</Link>
         
         <Link to="/gastos-add">Agregar Nuevos Gastos</Link>

         <Link to="/Meta_Ahorro">Metas de Ahorro</Link>
         
         <Link to="/Meta_Ahorro-add">Agregar Nuevas Metas de Ahorro</Link>

         
         <Link to="/proyeccion_financiera">Proyecciones financieras</Link>
         
         <Link to="/proyeccion_financiera-add">Agregar Nuevas Proyecciones financieras </Link>


      </div>
   );
}