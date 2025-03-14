import styles from './Input.module.css'

function Input() {

return (
  <input className={styles.container}
        placeholder='Adicione uma tarefa'/>   
);
} 

export default Input;