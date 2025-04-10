import axios from 'axios';
 //ipconfig
 //PARA OBTENER LA IP DEL SERVIDOR
const ApiDelivery = axios.create({
    baseURL: "http://localhost:3001/api",
    headers: {
        'Content-Type': 'application/json',
    },
})

export {ApiDelivery};