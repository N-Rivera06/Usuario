import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
// Importamos Bootstrap CSS
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min';

//importamos las páginas
import { CategoriaPagina } from "./pages/CategoriaPagina";
import { CategoriaForm }   from "./pages/CategoriaForm";

import { GastosPagina } from "./pages/GastosPagina";
import { GastosForm }   from "./pages/GastosForm";

import { Meta_AhorroPagina } from "./pages/Meta_AhorroPagina";
import { Meta_AhorroForm }   from "./pages/Meta_AhorroForm";

import { Proyeccion_FinancieraPagina } from "./pages/Proyeccion_FinancieraPagina";
import { Proyeccion_FinancieraForm }   from "./pages/Proyeccion_FinancieraForm";
//Importamos el componente 
import { Navigation }      from "./components/Navigation";

function App(){
  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path="/"              element= {<Navigate to={"/categoria"}/>} />
      <Route path="/categoria"     element={<CategoriaPagina/>}/>
      <Route path="/categoria-add" element={<CategoriaForm/>}/>
      <Route path="/categoria/:id" element={<CategoriaForm/>}/>
      
      <Route path="/"              element= {<Navigate to={"/Gastos"}/>} />
      <Route path="/Gastos"        element={<GastosPagina/>}/>
      <Route path="/Gastos-add"    element={<GastosForm/>}/>
      <Route path="/Gastos/:id"   element={<GastosForm/>}/>

      
      <Route path="/"                element= {<Navigate to={"/Meta_Ahorro"}/>} />
      <Route path="/Meta_Ahorro"     element={<Meta_AhorroPagina/>}/>
      <Route path="/Meta_Ahorro-add" element={<Meta_AhorroForm/>}/>
      <Route path="/Meta_Ahorro/:id" element={<Meta_AhorroForm/>}/>

      <Route path="/"                          element= {<Navigate to={"/Proyeccion_Financiera"}/>} />
      <Route path="/Proyeccion_Financiera"     element={<Proyeccion_FinancieraPagina/>}/>
      <Route path="/Proyeccion_Financiera-add" element={<Proyeccion_FinancieraForm/>}/>
      <Route path="/Proyeccion_Financiera/:id" element={<Proyeccion_FinancieraForm/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App
