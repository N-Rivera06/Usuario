import axios from 'axios';
import { ACCESS_TOKEN } from '../constants';

const Proyeccion_FinancieraAPI = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/Proyeccion_Financiera/'
})

Proyeccion_FinancieraAPI.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error);
    }
)

export const getAllProyeccion_Financiera = () =>Proyeccion_FinancieraAPI.get('/');
export const getProyeccion=    (id) => Proyeccion_FinancieraAPI.get('/'+ id + '/');
export const createProyeccion_Financiera = (Proyeccion_Financiera) => Proyeccion_FinancieraAPI.post('/', Proyeccion_Financiera);
export const deleteProyeccion_Financiera = (id) => Proyeccion_FinancieraAPI.delete('/'+ id + '/');
export const updateProyeccion = (id, Proyeccion_Financiera)=> Proyeccion_FinancieraAPI.put('/'+ id + '/',Proyeccion_Financiera);