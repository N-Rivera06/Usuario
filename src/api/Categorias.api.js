import axios from 'axios';
import { ACCESS_TOKEN } from '../constants';

const categoriaAPI = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/Categoria/'
})

categoriaAPI.interceptors.request.use(
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

export const getAllCategorias = ()  => categoriaAPI.get('/');
export const getCategoria=    (id) => categoriaAPI.get('/'+ id + '/');
export const createCategoria = (categoria) => categoriaAPI.post('/',categoria);
export const deleteCategoria = (id) => categoriaAPI.delete('/'+ id + '/');
export const updateCategoria = (id, categoria)=> categoriaAPI.put('/'+ id + '/',categoria);