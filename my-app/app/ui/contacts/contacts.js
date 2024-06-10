"use client";
import styles from "./contacts.module.css";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { message } from "antd";

const mapData = {
  center: [55.676108, 37.625037],
  zoom: 15,
};

export default function Contacts() {
  const formRef = useRef(null);
  const [form, setFrom] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFrom({ ...form, [name]: value });
  };

  const handleTextareaChange = (e) => {
    const { name, value } = e.target;
    setFrom({ ...form, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.message) {
      messageApi.open({
        type: "warning",
        content: "Заполните все поля",
      });
    } else {
      setLoading(true);
      emailjs
        .send(
          "service_k382w78",
          "template_oeks1k8",
          {
            from_name: form.name,
            to_name: "Территория Строительства",
            from_email: form.email,
            to_email: "ID@terstroy.com",
            message: [form.message, `email:${form.email}`],
          },
          "88J_75uEmDIBW3VJZ"
        )
        .then(
          () => {
            setLoading(false);
            messageApi.open({
              type: "success",
              content: "Спасибо! Мы скоро с вами свяжемся.",
            });
            setFrom({ name: "", email: "", message: "" });
          },
          (error) => {
            setLoading(false);
            messageApi.open({
              type: "error",
              content: "Что-то пошло не так.",
            });
          }
        );
    }
  };
  return (
<div className={styles.contacts_main}>
{contextHolder}
  <div className={styles.form_and_cards_section}>
    <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
      <h4 className={styles.form_title}>ОТПРАВИТЬ СООБЩЕНИЕ</h4>
      <p className={styles.form_info}>Мы нигде не публикуем ваш e-mail адрес</p>
      <div className={styles.form_inputs}>
        <input type="text" placeholder="Ваше имя" className={styles.input} name="name" onChange={handleChange} />
        <input type="email" placeholder="Ваш e-mail" className={styles.input} name="email" onChange={handleChange}/>
      </div>
      <textarea placeholder="Ваше сообщение" className={styles.textarea} name="message" value={form.message} onChange={handleTextareaChange}></textarea>
      <button type="submit" className={styles.button}>{loading ? "ОТПРАВКА..." : "ОТПРАВИТЬ"}</button>
    </form>
    <div className={styles.cards_section}>
        <a href="tel:+7(927)115-84-36" className={styles.contact_card}>
        <img className={styles.icon} src="icons/phone.png" alt="phone icon" />
        <p>+7(927)115-84-36</p>
      </a>
 
      <a href="mailto:ID@terstroy.com" className={styles.contact_card}>
        <img className={styles.icon} src="icons/email.png" alt="email icon" />
        <p>ID@terstroy.com</p>
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