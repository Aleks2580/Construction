import styles from './hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero_main}>

        <h5 className={styles.hero_subname}>СТРОИТЕЛЬНАЯ ГРУППА</h5>
        <h1 className={styles.hero_name}>ТЕРРИТОРИЯ <span className={styles.hero_span}>СТРОИТЕЛЬСТВА</span></h1>
        {/* <h5 className={styles.hero_moto}>СИСТЕМА ОПТИМАЛЬНЫХ <span className={styles.hero_span}>СТРОИТЕЛЬНЫХ РЕШЕНИЙ</span></h5> */}
    </section>
  )
}