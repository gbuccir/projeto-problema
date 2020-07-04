import axios from 'axios';

const api = axios.create({
    //baseURL: "http://192.168.0.14:3333/"
    baseURL: "http://177.194.5.47:5000/"

})

export default api;