import styles from '../styles/Home.module.css'
import Image from 'next/image'
import dreamteam from '../assets/dreamteam.png'
import Link from 'next/link'
import qoutes from '../assets/quotes.png'
const Testo = () => {
  return (
    <div className={styles.testo}>
      <div className={styles.qoutes}>
       <Image
        src={qoutes}
        alt="qoutes"
        width={200}
        height={200}
       />
      </div>
        <h2>Hear it from Client</h2>
        <div className={styles.testcard}>
        <Image
        src={dreamteam}
        alt="dream team"
        />
        <p>22.4 Mn minutes of branding results in 25k high-quality registrations</p>
        <span>The placement of clickable units natively placed on the main menu, gameplay screen and pause screen ensured high engagement, registrations and transactions.</span>
        <Link href="/">Read Casestudy</Link>
        </div>
    </div>
  )
}

export default Testo