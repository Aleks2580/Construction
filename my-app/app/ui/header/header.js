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
      <Link className={styles.header_logo} href="/" onClick={() => setActive('')}><img className={styles.logo} src="logos/logo-black.png" alt="Company Logo" /></Link>
      <div className={styles.header_contacts}>
        <a className={styles.link} href="tel:+7(927)115-84-36"><span className={styles.header_phone}>+7(927)115-84-36</span></a>
        <a className={styles.link} href="mailto:admin@terstroy.com"><span className={styles.header_email}>admin@terstroy.com</span></a>
        <button className={styles.header_button}>
          <a className={styles.link} href="https://yandex.ru/maps/213/moscow/house/varshavskoye_shosse_42/Z04YcAVlSUYAQFtvfXp2d31jbA==/?ll=37.625037%2C55.676108&z=17" target='blank'><img className={styles.header_icon} src='/icons/location.png'/></a>
        </button>
      </div>
      <nav className={styles.header_nav}>
       
        {navLinks.map((link) => (
         <Link 
           href={`#${link.id}`} 
           className={`${styles.link_wrapper} ${active === link.id ? styles.active : ''}`}
           onClick={() => setActive(link.id)}
           key={link.id}
         >
           {link.title}
         </Link>
      ))}
    </nav>
    </header>
  )
}
