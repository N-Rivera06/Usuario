import axios from 'axios';

const GastosApi= axios.create({
    baseURL:  'http://127.0.0.1:8000/apiGastos/' 
})
export const getAllGastos= ()=>GastosApi.get('/');

export const getGasto=    (id) => GastosApi.get('/'+ id + '/');
//decirle donde debe capturar los datos
export const createGastos =(gastos)=> GastosApi.post('/',gastos);

export const deleteGastos = (id) => GastosApi.delete('/'+ id + '/');

export const updateGasto = (id, gastos)=> GastosApi.put('/'+ id + '/', gastos);

