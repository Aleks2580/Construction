'use client'
import styles from "./contacts.module.css";
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function Contacts() {
  // Randomly generating global coordinates
  const randomLat = Math.random() * 180 - 90; // Latitude range from -90 to 90
  const randomLng = Math.random() * 360 - 180; // Longitude range from -180 to 180
  const mapData = {
    center: [randomLat, randomLng],
    zoom: 5, // Zoom level adjusted for broader geographic view
  };

  return (
    <div className={styles.contacts_main}>
      <div className={styles.contacts_map}>
        <YMaps>
          <div>
            My awesome application with maps!
            <Map defaultState={mapData} width="100%" height="400px">
              <Placemark geometry={[randomLat, randomLng]} />
            </Map>
          </div>
        </YMaps>
      </div>
      <div className={styles.contacts_info}>
        <div className={styles.contact_card}>
          <h3>Phone</h3>
          <p>+123 456 7890</p>
        </div>
        <div className={styles.contact_card}>
          <h3>Email</h3>
          <p>contact@example.com</p>
        </div>
        <div className={styles.contact_card}>
          <h3>Address</h3>
          <p>1234 Street, City, Country</p>
        </div>
      </div>
    </div>
  );
}
