import Link from 'next/link';
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_logo}>
        <span>Территория <br /> Cтроительства</span>
      </div>
      <div className={styles.header_contacts}>
        <span className={styles.header_phone}>+7(495)111-11-11</span>
        <span className={styles.header_email}>info@construct.com</span>
      </div>
    </header>
  )
}
