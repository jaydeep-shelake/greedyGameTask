import styles from '../styles/Home.module.css'
const Barnds = ({children,bgImg}) => {
  return (
    <div className={styles.brand} style={{background:bgImg?`rgba(179, 221, 248, 0.205) url(/bg3.png) center 100% no-repeat`:"url()"}}>
      {children}
    </div>
  )
}

export default Barnds