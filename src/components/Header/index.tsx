import IconRocket from '../../icons/IconRocket'
import { Title } from '../Title'
import styles from './styles.module.css'

export const Header = ()=>{
  return(
    <div className={styles.container}>
      <div className={styles.title_content} >
      <IconRocket/>
      <Title/>
      </div>
    </div>
  )
}