
import styles from '../styles/Header.module.css'
import Image from 'next/image'
import logo from '../assets/logo.png'
const Header = () => {
  return (
    <nav className={styles.header}>
      <Image src={logo} alt="greedygame"/>
    </nav>
  )
}

export default Header