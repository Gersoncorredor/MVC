import axios from 'axios';

const Api_URL = "//localhost:3001";  

export const loginAuth = async (credentials) => {
    try{
        const response = await axios.post(`${Api_URL}/api/auth/login`, credentials,{
            headers: {
                'Content-Type': 'application/json',
            },  
        });

        return response.data;
    }catch(error){
     return error.response.data;
    }
}

export const registerAuth = async (credentials) => {
    try{
        const response = await axios.post(`${Api_URL}/api/auth/register`, credentials,{
            headers : {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    }catch (error) {
        return error.response.data;
    }
}

export const  logout = () => {
try{
    localStorage.removeItem('MVC_authToken');
    return  window.location.reload(); ;
}catch(error){
    return error;
}
}   
    