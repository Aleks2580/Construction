import styles from './hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero_main}>

        <h5 className={styles.hero_subname}>СТРОИТЕЛЬНАЯ ГРУППА</h5>
        <h1 className={styles.hero_name}>ТЕРРИТОРИЯ <span className={styles.hero_span}>СТРОИТЕЛЬСТВА</span></h1>
        <button className={styles.hero_button}>ПРЕЗЕНТАЦИЯ КОМПАНИИ</button>
    </section>
  )
}