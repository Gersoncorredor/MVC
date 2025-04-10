import React from 'react'
import styles from './Register.module.css'
import Button from '../../components/Button/Button.js'
import { useRegisterViewModel } from '../../hooks/Register/useRegisterViewModel.js'

const Register = () => {

  const { formData, handleChange, handleSubmit, loading, messages } = useRegisterViewModel()
  
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
