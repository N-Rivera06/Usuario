import axios from 'axios';
import { ACCESS_TOKEN } from '../constants';

const GastosApi= axios.create({
    baseURL:  'http://127.0.0.1:8000/api/Gastos/' 
})

GastosApi.interceptors.request.use(
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

export const getAllGastos= ()=>GastosApi.get('/');
export const getGasto=    (id) => GastosApi.get('/'+ id + '/');
//decirle donde debe capturar los datos
export const createGastos =(gastos)=> GastosApi.post('/',gastos);
export const deleteGastos = (id) => GastosApi.delete('/'+ id + '/');
export const updateGasto = (id, gastos)=> GastosApi.put('/'+ id + '/', gastos);

