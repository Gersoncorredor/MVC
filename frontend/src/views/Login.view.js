import React, { useState } from 'react'
import styles from '../styles/Login.module.css'
import { loginAuth } from '../services/authService.js';
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button.js';


const Login = () => {
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

localStorage.removeItem('MVC_authToken'); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await loginAuth(formData);
      if (response.token) {
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

  return (
    <div className={styles.loginContainer}>
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <h2>Iniciar Sesión</h2>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email:</label>
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
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      {messages && (
        <p className={styles.errorMessage} aria-live="polite">
          {messages}
        </p>
      )}
      <Button type="submit" disabled={loading}>
      Iniciar sesión
      </Button>
    </form>
  </div>
  )
}

export default Login