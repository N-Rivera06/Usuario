import axios from 'axios';

const Proyeccion_FinancieraAPI = axios.create({
    baseURL: 'http://127.0.0.1:8000/apiProyeccion_Financiera/'
})

export const getAllProyeccion_Financiera = () =>Proyeccion_FinancieraAPI.get('/');
export const getProyeccion=    (id) => Proyeccion_FinancieraAPI.get('/'+ id + '/');
export const createProyeccion_Financiera = (Proyeccion_Financiera) => Proyeccion_FinancieraAPI.post('/', Proyeccion_Financiera);
export const deleteProyeccion_Financiera = (id) => Proyeccion_FinancieraAPI.delete('/'+ id + '/');
export const updateProyeccion = (id, Proyeccion_Financiera)=> Proyeccion_FinancieraAPI.put('/'+ id + '/',Proyeccion_Financiera);