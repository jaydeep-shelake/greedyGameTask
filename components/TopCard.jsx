import styles from '../styles/Home.module.css'
import Image from 'next/image'
const TopCard = ({img , text}) => {
  return (
    <div className={styles.topSec_card}>
       <Image src={img} alt="name"/>
       <p>{text}</p>
    </div>
  )
}

export default TopCard