"use client";
import styles from "./services.module.css";
import { Fade } from "react-awesome-reveal";

export default function Services() {
  return (
    <div className={styles.services_main}>
      <section className={styles.services_info}>
        <h1 className={styles.title}>НАШИ УСЛУГИ:</h1>
        <div className={styles.about_cards}>
          <Fade direction="left" delay={500}>
            <div className={styles.about_card}>
              <img
                className={styles.about_icon}
                src="/icons/contract.png"
                alt="contract"
              />{" "}
              <h4 className={styles.card_title}>Генеральный подряд</h4>
            </div>
          </Fade>
          <Fade direction="left" delay={800}>
          <div className={styles.about_card}>
            <img
              className={styles.about_icon}
              src="/icons/buildings.png"
              alt="buildings"
            />{" "}
            <h4 className={styles.card_title}>
              Возведение промышленных, гражданских и административных объектов
            </h4>
          </div>
          </Fade>
          <Fade direction="left" delay={1100}>
          <div className={styles.about_card}>
            <img
              className={styles.about_icon}
              src="/icons/construction.png"
              alt="construction"
            />{" "}
            <h4 className={styles.card_title}>
              Строительство многоквартирных домов и загородной недвижимости
            </h4>
          </div>
          </Fade>
          <Fade direction="left" delay={1400}>
          <div className={styles.about_card}>
            <img
              className={styles.about_icon}
              src="/icons/house.png"
              alt="house"
            />{" "}
            <h4 className={styles.card_title}>
              Реконструкция объектов различного назначения
            </h4>
          </div>
          </Fade>
          <Fade direction="left" delay={1700}>
          <div className={styles.about_card}>
            <img
              className={styles.about_icon}
              src="/icons/small.png"
              alt="small"
            />{" "}
            <h4 className={styles.card_title}>Малоэтажное строительство</h4>
          </div>
          </Fade>
          <Fade direction="left" delay={2000}>
          <div className={styles.about_card}>
            <img
              className={styles.about_icon}
              src="/icons/project.png"
              alt="project"
            />{" "}
            <h4 className={styles.card_title}>Управление проектами</h4>
          </div>
          </Fade>
        </div>
      </section>
    </div>
  );
}
