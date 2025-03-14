import styles from './Header.module.css'

function Header() {

return (
  <header className={styles.container}>
    <img src="/logo.svg" alt="Logotipo da lista de tarefas" />
  </header>
);
} 

export default Header;