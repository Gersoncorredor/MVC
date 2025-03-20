import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/authService";
import styles from "../styles/Navigation.module.css";
import Modal from "../components/Modal";
import Menu from "../assets/icons/navigation/menu.png"

const Navigation = ({children}) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);



  return (
<div className={styles.container}>
      <div className={`${styles.sidebar} ${!isOpen ? styles.collapsed : ''}`}>
        <div className={styles.sidebarHeader}>
          <img src={Menu} alt="toggle menu" 
            className={`${styles.toggleButton} ${styles.menu}`}
            role="button"
            onClick={() => setIsOpen(!isOpen)}
          >
          </img>
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
            <li onClick={""}>
              <span className={styles.icon}>⚙️</span>
              {isOpen && <span>Configuración</span>}
            </li>
            <li data-bs-toggle="modal" data-bs-target="#logoutModal">
              <span className={styles.icon} >🚪</span>
              {isOpen && <span>Cerrar Sesión</span>}
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.mainContent}>
        {children}

        <Modal
        id="logoutModal"
        title="Confirmación"
        closeText="Cancelar"
        confirmText="Salir"
        onConfirm={logout}
      >
        <p>¿Quieres cerrar sesion?</p>
      </Modal>
      </div>
    </div>
  );
};

export default Navigation;
