"use client";
import styles from "./contacts.module.css";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export default function Contacts() {
  // Coordinates for Tverskaya Street, Moscow
  const mapData = {
    center: [55.763285, 37.605993], // Directly using the provided coordinates
    zoom: 15, // Zoom level adjusted for street view
  };

  return (
    <div className={styles.contacts_main}>
      <form action="" className={styles.form}>
        <h4>ОТПРАВИТЬ СООБЩЕНИЕ</h4>
        <p>Мы нигде не публикуем ваш e-mail адрес</p>
        <div>
          <input type="text" />
          <input type="text" />
        </div>
        <textarea name=""></textarea>
        <button>ОТПРАВИТЬ</button>
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
