import React, { useState } from 'react'
import '../styles/Login.module.css'
import {loginAuth} from '../services/authService.js';


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [messages, setMessages] = useState("manolo")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const response = await loginAuth(formData);

        alert("funciona", response.token);
    }catch(error){
        setMessages(error.messages)
        alert("no funciona", error)
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
