import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/authService";
import styles from "../styles/Navigation.module.css";

const Navigation = ({children}) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
<div className={styles.container}>
      <div className={`${styles.sidebar} ${!isOpen ? styles.collapsed : ''}`}>
        <div className={styles.sidebarHeader}>
          <button 
            className={styles.toggleButton}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '←' : '→'}
          </button>
          {isOpen && <h2>Menu</h2>}
        </div>
        
        <nav className={styles.sidebarNav}>
          <ul>
            <li onClick={() => navigate('/dashboard')}>
              <span className={styles.icon}>📊</span>
              {isOpen && <span>Dashboard</span>}
            </li>
            <li onClick={() => navigate('/profile')}>
              <span className={styles.icon}>👤</span>
              {isOpen && <span>Perfil</span>}
            </li>
            <li onClick={() => navigate('/settings')}>
              <span className={styles.icon}>⚙️</span>
              {isOpen && <span>Configuración</span>}
            </li>
            <li onClick={handleLogout}>
              <span className={styles.icon} onClick={logout}>🚪</span>
              {isOpen && <span>Cerrar Sesión</span>}
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.mainContent}>
        {children}
      </div>
    </div>
  );
};

export default Navigation;
