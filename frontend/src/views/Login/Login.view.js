import React from 'react'
import styles from './Login.module.css'
import Button from '../../components/Button/Button.js';
import { useLoginViewModel }from '../../hooks/Login/useLoginViewModel.js'


const Login = () => {

  const { formData, handleChange, handleSubmit, messages ,loading } = useLoginViewModel();
  
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
    <a href="/registrame">Registrarse</a>
    </form>
  </div>
  )
}

export default Login