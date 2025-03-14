import React, { useState } from 'react'
import '../styles/Login.module.css'
import { loginAuth } from '../services/authService.js';
import { useNavigate } from 'react-router-dom'


const Login = () => {
 const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [messages, setMessages] = useState()

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
    try {
      const response = await loginAuth(formData);
      if (response.token) {
        localStorage.setItem('MVC_authToken', JSON.stringify(response));
        navigate('/home');
      }else{
        setMessages(response.message);
      }
    } catch (error) {
      console.log("Error en el login", error);
    }
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Iniciar Sesión</h2>
        <div className="Form-group">
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
        <div className="Form-group">
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
        {messages && <p>{messages}</p>}
        <button type="submit">Inciar sesion</button>
      </form>
    </div>
  )
}

export default Login