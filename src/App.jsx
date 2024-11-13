import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Importamos las páginas
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { NoFound } from "./pages/NoFound";
import { ProtectedRoute } from "./components/ProtectedRoute";

import { CategoriaPagina } from "./pages/CategoriaPagina";
import { CategoriaForm } from "./pages/CategoriaForm";

import { GastosPagina } from "./pages/GastosPagina";
import { GastosForm } from "./pages/GastosForm";

import { Meta_AhorroPagina } from "./pages/Meta_AhorroPagina";
import { Meta_AhorroForm } from "./pages/Meta_AhorroForm";

import { Proyeccion_FinancieraPagina } from "./pages/Proyeccion_FinancieraPagina";
import { Proyeccion_FinancieraForm } from "./pages/Proyeccion_FinancieraForm";

// Importamos el componente de navegación
import { Navigation } from "./components/Navigation";

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={ <ProtectedRoute> <Home /> </ProtectedRoute>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />

       
        <Route path="/categoria" element={ <ProtectedRoute> <CategoriaPagina /> </ProtectedRoute> }/>
        <Route path="/categoria-add" element={ <ProtectedRoute> <CategoriaForm />  </ProtectedRoute> }/>
        <Route path="/categoria/:id" element={ <ProtectedRoute> <CategoriaForm /> </ProtectedRoute> }/>

        <Route path="/Gastos" element={ <ProtectedRoute> <GastosPagina /> </ProtectedRoute> }  />
        <Route path="/Gastos-add" element={ <ProtectedRoute> <GastosForm /> </ProtectedRoute> } />
        <Route path="/Gastos/:id" element={ <ProtectedRoute> <GastosForm /> </ProtectedRoute> } />

        <Route path="/Meta_Ahorro" element={ <ProtectedRoute>  <Meta_AhorroPagina /> </ProtectedRoute> } />
        <Route path="/Meta_Ahorro-add"element={ <ProtectedRoute> <Meta_AhorroForm /> </ProtectedRoute> } />
        <Route path="/Meta_Ahorro/:id"element={ <ProtectedRoute> <Meta_AhorroForm /> </ProtectedRoute> } />

        <Route path="/Proyeccion_Financiera" element={<ProtectedRoute> <Proyeccion_FinancieraPagina /> </ProtectedRoute>}/>
        <Route path="/Proyeccion_Financiera-add" element={<ProtectedRoute> <Proyeccion_FinancieraForm /> </ProtectedRoute>}/>
        <Route path="/Proyeccion_Financiera/:id" element={ <ProtectedRoute> <Proyeccion_FinancieraForm /> </ProtectedRoute> }/>

        <Route path="*" element={<NoFound />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
