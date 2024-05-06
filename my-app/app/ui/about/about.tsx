import styles from "./about.module.css";

export default function About() {
  return (
    <main className={styles.about_main}>
      <section className={styles.about_info}>
        <h1>О КОМПАНИИ</h1>
        <p>
          Компания Территория Строительства предоставляет свои услуги на рынке недвижимости
          и строительства объединяя в себе многолетний опыт работы
          профессионалов строительной индустрии. Опыт основан на выполнении
          полного комплекса работ по возведению, реконструкции и ремонту зданий
          промышленного, административного и гражданского строительства.
        </p>
      </section>
      <section className={styles.about_services}>SERVICES</section>
    </main>
  );
}
