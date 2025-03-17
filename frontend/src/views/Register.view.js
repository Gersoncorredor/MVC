import React, { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/Register.module.css'
import { registerAuth } from '../services/authService.js'
import Button from '../components/Button.js'

const Register = () => {
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
            navigate('/login')
        }
    }catch(error){
        return setMessages(error.response?.data || "Error intente mas tarde")
    }
    finally{
        setLoading(false);
    }
}  

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerForm}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
         {messages && <p>{messages}</p>}
        <Button type="submit" disabled={loading}>
        {loading ? 'Cargando...' : 'Registrarse'}
        </Button>
        </form>
      </div>
    </div>
  )
}

export default Register
