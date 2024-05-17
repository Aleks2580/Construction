"use client"
import { useState } from 'react';
import Link from 'next/link';
import styles from './header.module.css'

export default function Header() {
  const navLinks = [
    { id: '/', title: 'ГЛАВНАЯ' },
    { id: 'about', title: 'О КОМПАНИИ' },
    { id: 'services', title: 'УСЛУГИ' },
    { id: 'projects', title: 'ПРОЕКТЫ' },
    { id: 'contacts', title: 'КОНТАКТЫ' }
  ];

  const [active, setActive] = useState('');

  return (
    <header className={styles.header}>
      <div className={styles.header_logo} id='/'>
      <Link href="/" onClick={() => setActive('')}><img className={styles.logo} src="logos/logo-black.png" alt="Company Logo" /></Link>
      </div>
      <div className={styles.header_contacts}>
        <a className={styles.link} href="tel:+7(495)111-11-11"><span className={styles.header_phone}>+7(495)111-11-11</span></a>
        <a className={styles.link} href="mailto:info@construct.com"><span className={styles.header_email}>info@construct.com</span></a>
        <button className={styles.header_button}>
          <a className={styles.link} href="https://yandex.com/maps/geo/moskva/53000094/?ll=37.385439%2C55.584227&z=9.63" target='blank'><img className={styles.header_icon} src='/icons/location.png'/></a>
        </button>
      </div>
      <nav className={styles.header_nav}>
        <ul>
        {navLinks.map((link) => (
        <Link 
          key={link.id} 
          href={`#${link.id}`} 
          className={`${styles.link_wrapper} ${active === link.id ? styles.active : ''}`}
          onClick={() => setActive(link.id)}
        >
          {link.title}
        </Link>
      ))}
        </ul>
    </nav>
    </header>
  )
}
