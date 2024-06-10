"use client";
import styles from "./contacts.module.css";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const mapData = {
  center: [55.676108, 37.625037],
  zoom: 15,
};

export default function Contacts() {
  return (
<div className={styles.contacts_main}>
  <div className={styles.form_and_cards_section}>
    <form className={styles.form}>
      <h4 className={styles.form_title}>ОТПРАВИТЬ СООБЩЕНИЕ</h4>
      <p className={styles.form_info}>Мы нигде не публикуем ваш e-mail адрес</p>
      <div className={styles.form_inputs}>
        <input type="text" placeholder="Ваше имя" className={styles.input} />
        <input type="email" placeholder="Ваш e-mail" className={styles.input} />
      </div>
      <textarea placeholder="Ваше сообщение" className={styles.textarea}></textarea>
      <button type="submit" className={styles.button}>ОТПРАВИТЬ</button>
    </form>
    <div className={styles.cards_section}>
        <a href="tel:+7(927)115-84-36" className={styles.contact_card}>
        <img className={styles.icon} src="icons/phone.png" alt="phone icon" />
        <p>+7(927)115-84-36</p>
      </a>
 
      <a href="mailto:admin@terstroy.com" className={styles.contact_card}>
        <img className={styles.icon} src="icons/email.png" alt="email icon" />
        <p>admin@terstroy.com</p>
      </a>
      <a href="https://yandex.ru/maps/213/moscow/house/varshavskoye_shosse_42/Z04YcAVlSUYAQFtvfXp2d31jbA==/?ll=37.625037%2C55.676108&z=17" target='blank' className={styles.contact_card}>
        <img className={styles.icon} src="icons/location1.png" alt="location icon" />
        <p>Варшавское ш. 42</p>
      </a>
    </div>
  </div>
  <div className={styles.map_section}>
    <YMaps>
      <Map className={styles.map} defaultState={mapData}>
        <Placemark geometry={mapData.center} />
      </Map>
    </YMaps>
  </div>
</div>
  )
}