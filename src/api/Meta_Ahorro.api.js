import axios from 'axios';

const Meta_AhorroApi= axios.create({
    baseURL: 'http://127.0.0.1:8000/apiMeta_Ahorro/'

})
export const getAllMeta_Ahorro= ()=>Meta_AhorroApi.get('/');
export const getMeta_Ahorro    = (id) => Meta_AhorroApi.get('/'+ id + '/');
export const createMeta_Ahorro = (Meta_Ahorro)=> Meta_AhorroApi.post('/', Meta_Ahorro);
export const deleteMeta_Ahorro = (id) => Meta_AhorroApi.delete('/'+ id + '/');
export const updateMeta_Ahorro = (id, Meta_Ahorro)=> Meta_AhorroApi.put('/'+ id + '/', Meta_Ahorro);
