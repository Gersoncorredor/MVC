const Api_URL = process.env.REACT_APP_API_URL;  

export const loginAuth = async (credentials) => {
    try{
        const response = await fetch(`${Api_URL}/auth/login`,{
            method: 'POST',
            headers:{
                'Content-type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok){
            throw new Error("Error al Iniciar sesion")
        }
        const data = await response.json();
        return data;
    }catch(error){
        throw error;
    }
}