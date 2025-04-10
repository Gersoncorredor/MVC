import { ApiDelivery } from "./ApiDelivery";

 

export const loginAuth = async (credentials) => {
    try{
        const response = await ApiDelivery.post("/auth/login", credentials,{
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
        const response = await ApiDelivery.post("/auth/register", credentials,{
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
    