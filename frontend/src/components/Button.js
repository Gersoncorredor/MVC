import React from 'react';
import styles from '../styles/Button.module.css'

const Button = React.memo(({children, onClick, type="button", disabled = false}) =>{
    return(
        <button type={type} className={styles.button} onClick={onClick} disabled={disabled}>
                {disabled ? 'Cargando...' : children} 
        </button>
    )
});

export default Button;  