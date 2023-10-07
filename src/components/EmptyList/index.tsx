import IconClipBoard from "../../icons/IconClipBoard"
import styles from './styles.module.css'

export const EmptyList = ()=>{
  return(
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <IconClipBoard/>
        <div className={styles.wrapper_text}>
        <p className={styles.first_paragraph}>Você ainda não tem tarefas cadastradas</p>
        <p className={styles.second_paragraph}>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </div>
    </div>
  )
}