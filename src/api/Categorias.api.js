import axios from 'axios';

const categoriaAPI = axios.create({
    baseURL: 'http://127.0.0.1:8000/apiCategoria/'
})

export const getAllCategorias = () => categoriaAPI.get('/');
export const createCategoria = (categoria) => categoriaAPI.post('/',categoria);
export const deleteCategoria = (id) => categoriaAPI.delete('/'+ id + '/');