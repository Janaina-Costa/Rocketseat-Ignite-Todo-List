import { CSSProperties, ReactNode } from "react"
import styles from './styles.module.css'


export interface IPropsItem {
  isChecked?: boolean,
  id: string,
  text: string,
}

interface IProps extends IPropsItem {
  IconCheck?: ReactNode,
  IconTrash?: ReactNode,
  onCheckTask: () => void,
  onDeleteTask:()=>void,
  style?: CSSProperties
}
export const ItemTask = ({ text, IconCheck, IconTrash, id, style, onCheckTask, onDeleteTask }: IProps) => {
  return (
    <div className={styles.container} id={id}>
      <button 
      className={styles.iconCheck} 
      onClick={onCheckTask} >
        {IconCheck}
      </button>
      <p className={styles.textTask} style={style}>{text}</p>
      <button onClick={onDeleteTask} className={styles.iconTrash} >{IconTrash}</button>
    </div>
  )
}
