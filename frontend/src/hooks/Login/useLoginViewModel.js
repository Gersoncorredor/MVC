import { useState} from "react";
import {loginAuth} from "../../services/authService";
import { useNavigate } from "react-router-dom";

export const useLoginViewModel = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      email: '',
      password: '',
    })
  
    const [messages, setMessages] = useState()
    const [loading, setLoading] = useState(false)
  
    const handleChange = (e) => {
      const { name, value } = e.target
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }))
    }
  
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        const response = await loginAuth(formData);
        if (response.token) {
          console.log(response);
          localStorage.setItem('MVC_authToken', JSON.stringify(response));
          navigate('/home');
        }else{
          setMessages(response.message || "Error en el login");
        }
      } catch (error) {
        return setMessages(error.response?.data || "Error intente mas tarde")
      }finally{
        setLoading(false);
      }
    }
    
    return {
        formData,
        handleChange,
        handleSubmit,
        messages,
        loading,
    }



}