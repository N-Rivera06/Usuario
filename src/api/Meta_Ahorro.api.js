import axios from 'axios';
import { ACCESS_TOKEN } from '../constants';

const Meta_AhorroApi= axios.create({
    baseURL: 'http://127.0.0.1:8000/api/Meta_Ahorro/'
})

Meta_AhorroApi.interceptors.request.use(
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
export const getAllMeta_Ahorro= ()=>Meta_AhorroApi.get('/');
export const getMeta_Ahorro    = (id) => Meta_AhorroApi.get('/'+ id + '/');
export const createMeta_Ahorro = (Meta_Ahorro)=> Meta_AhorroApi.post('/', Meta_Ahorro);
export const deleteMeta_Ahorro = (id) => Meta_AhorroApi.delete('/'+ id + '/');
export const updateMeta_Ahorro = (id, Meta_Ahorro)=> Meta_AhorroApi.put('/'+ id + '/', Meta_Ahorro);
