"use client";
import styles from "./contacts.module.css";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const mapData = {
  center: [55.751574, 37.573856],
  zoom: 9,
};

export default function Contacts() {
  return (
    <div className={styles.contacts_main}>
      <form action="" className={styles.form}>
        <h4 className={styles.form_title}>ОТПРАВИТЬ СООБЩЕНИЕ</h4>
        <p className={styles.form_info}>Мы нигде не публикуем ваш e-mail адрес</p>
        <div className={styles.form_inputs}>
          <input type="text" placeholder="Ваше имя" className={styles.input} />
          <input type="email" placeholder="Ваш e-mail" className={styles.input} />
        </div>
        <textarea placeholder="Ваше сообщение" className={styles.textarea}></textarea>
        <button type="submit" className={styles.button}>ОТПРАВИТЬ</button>
      </form>
      <div className={styles.contacts_info}>
        <div className={styles.contact_card}>
          <h4>Телефон:</h4>
          <p>+123 456 7890</p>
        </div>
        <div className={styles.contact_card}>
          <h4>Email:</h4>
          <p>contact@example.com</p>
        </div>
        <div className={styles.contact_card}>
          <h4>Адрес:</h4>
          <p>Москва, пр-кт Андропова, д.10, пом.140</p>
        </div>
      </div>
      <div className={styles.contacts_map}>
        <YMaps>
          <Map className={styles.map} defaultState={mapData}>
            <Placemark geometry={mapData.center} />
          </Map>
        </YMaps>
      </div>
    </div>
  );
}