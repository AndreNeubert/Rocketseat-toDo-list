import styles from './Empty.module.css'

export function Empty() {
  return (
    <div className={styles.container}>
      <img src="/clipboard.png" alt="ícone da prancheta" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie taredas e organize seus itens a fazer
      </p>
    </div>
  )
}