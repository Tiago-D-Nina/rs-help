import React from 'react'; 
import styles from './header.module.css'; 


const Header = ({title = ''}) => {
  return (
    <header className={styles.header}> 
      <h1>
        <a href="../../">
          Coleta de Recursos
        </a>
      </h1> 
      <h1 style={{ fontWeight: 800 }}>{title}</h1> 
    </header>
  );
};

export default Header; 
