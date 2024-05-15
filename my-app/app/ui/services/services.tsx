import styles from "./services.module.css"

export default function Services() {
  return (
    <div className={styles.services_main}>
      <section className={styles.services_info}>
        <h1 className={styles.title}>НАШИ УСЛУГИ:</h1>
        <div className={styles.about_cards}>
        <div className={styles.about_card}><img className={styles.about_icon} src="/icons/businessman.png" alt="businessman" /> <h4 className={styles.card_title}>ПРОФЕССИОНАЛИЗМ</h4></div>
        <div className={styles.about_card}><img className={styles.about_icon} src="/icons/empathy.png" alt="empathy" /> <h4 className={styles.card_title}>ЭМПАТИЯ</h4></div>
        <div className={styles.about_card}><img className={styles.about_icon} src="/icons/openness.png" alt="openness" /> <h4 className={styles.card_title}>ОТКРЫТОСТЬ</h4></div>
        <div className={styles.about_card}><img className={styles.about_icon} src="/icons/businessman.png" alt="businessman" /> <h4 className={styles.card_title}>ПРОФЕССИОНАЛИЗМ</h4></div>
        <div className={styles.about_card}><img className={styles.about_icon} src="/icons/empathy.png" alt="empathy" /> <h4 className={styles.card_title}>ЭМПАТИЯ</h4></div>
        <div className={styles.about_card}><img className={styles.about_icon} src="/icons/openness.png" alt="openness" /> <h4 className={styles.card_title}>ОТКРЫТОСТЬ</h4></div>
        </div>
      </section>
    </div>
  )
}
