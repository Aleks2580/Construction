import styles from "./about.module.css";

export default function About() {
  return (
    <main className={styles.about_main}>
      <section className={styles.about_info}>
        <h1 className={styles.title}>О КОМПАНИИ</h1>
        <span className={styles.line}></span>
        <p className={styles.text}>
          Компания Территория Строительства предоставляет свои услуги на рынке
          недвижимости и строительства объединяя в себе многолетний опыт работы
          профессионалов строительной индустрии. Опыт основан на выполнении
          полного комплекса работ по возведению, реконструкции и ремонту зданий
          промышленного, административного и гражданского строительства.
        </p>
        <p className={styles.sub_text}>
          Наша сплоченная команда нацелена на выполнение единой задачи, с четкой
          координацией взаимодействия, способная к внедрению в процесс
          строительства новейших технологий, материалов и инженерных новинок.
        </p>
        <div className={styles.about_cards}>
        <div className={styles.about_card}><img className={styles.about_icon} src="/icons/businessman.png" alt="businessman" /> <h4 className={styles.card_title}>ПРОФЕССИОНАЛИЗМ</h4> <p className={styles.card_text}>Мы привлекаем только профессионалов, специалистов, работающих в сфере строительства не один десяток лет.</p></div>
        <div className={styles.about_card}><img className={styles.about_icon} src="/icons/empathy.png" alt="empathy" /> <h4 className={styles.card_title}>ЭМПАТИЯ</h4> <p className={styles.card_text}>Мы стремимся к полному взаимопониманию с заказчиков, пытаемся идти от его потребностей.</p></div>
        <div className={styles.about_card}><img className={styles.about_icon} src="/icons/openness.png" alt="openness" /> <h4 className={styles.card_title}>ОТКРЫТОСТЬ</h4> <p className={styles.card_text}>Мы ведем свой бизнес открыто, у нас гибкая финансовая политика и индивидуальный подход.</p></div>
        </div>
      </section>
    </main>
  );
}
