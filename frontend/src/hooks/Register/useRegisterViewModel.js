import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom'
import { registerAuth } from '../../services/authService.js'




export const useRegisterViewModel = () => {
    const navigate = useNavigate()
 
    const [formData, setFormData] = useState({
      nombre: '',
      email: '',
      password: '',
    })
    const [loading, setLoading] = useState(false)
    const [messages, setMessages] = useState('')
  
  
  
    
    const handleChange = useCallback((e) => {
      const { name, value } = e.target
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }))
    }, [setFormData]);
  
  const handleSubmit = async (e) =>{
      e.preventDefault();
      setLoading(true);
      try{
          const response = await registerAuth(formData)
          if(response.message){
            setLoading(false);
           return setMessages(response.message)
          }else{
            navigate('/')
             return console.log(response)
          }
      }catch(error){
          return setMessages(error.response?.data || "Error intente mas tarde")
      }
      finally{
          setLoading(false);
      }
  }

  return {
    formData,
    handleChange,
    handleSubmit,
    loading,
    messages,
  }

}