
import styles from './App.module.css'
import { PlusCircle } from '@phosphor-icons/react'

import { Button } from './components/Button/Button'
import Header from './components/Header/Header'
import Input from './components/Input/Input'

function App() {
  

  return (
    <main>
    <Header />
    <section className={styles.content}>
    <div className={styles.taskBar}>
    <Input />
    <Button>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
          </div>
          </section>
    </main>
      
    
  )
}

export default App
