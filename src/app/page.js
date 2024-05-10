import React from 'react'; 
import styles from './page.module.css'; 

const Home = () => {
  return (
    <div className={styles['home-container']}> 
      <header className={styles.header}> 
        <div>
          <h1>Coleta de Recursos</h1>
          <h1 style={{ fontWeight: 800 }}>Rio Grande do Sul</h1> 
        </div>

        <p>
          Ajude doando para o local de arrecadação mais próximo ou, direto para RS por Pix. Você pode também adicionar sua organização de arrecadação.
        </p>

        <a href="/form" rel="noopener noreferrer"> 
          Registrar arrecadação
        </a>
      </header>

      <main className={styles.main}> 
        <h1>Ajude onde for mais próximo!</h1>

        <ul>
          <li>
              <a href="/rs">
                Rio Grande do Sul
              </a>

          </li>
          

        </ul>
      </main>
    </div>
  );
};

export default Home;
