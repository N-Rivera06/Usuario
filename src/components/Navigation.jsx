import { Link } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';


export function Navigation() {
   const navigate = useNavigate();

   const handleLogout = () => {
      // Borrar ambos tokens al cerrar sesión
      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.removeItem(REFRESH_TOKEN);

      // Redirigir al usuario al inicio de sesión
      navigate('/login');
   };
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
         

         <button onClick={handleLogout}>Cerrar Sesión</button>


      </div>
   );
}
