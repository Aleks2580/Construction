"use client";
import { useRef } from 'react';
import styles from "./hero.module.css";
import { Fade } from "react-awesome-reveal";
import Arrows from '../arrows/arrows';


export default function Hero() {
  return (
    <>
      <section className={styles.hero_main}>
        <Fade direction="up" delay={1000} duration={3000}>
          <h5 className={styles.hero_subname}>СТРОИТЕЛЬНАЯ ГРУППА</h5>
        </Fade>
        <Fade direction="up" delay={2200} duration={4000}>
          <h1 className={styles.hero_name}>
            ТЕРРИТОРИЯ <span className={styles.hero_span}>СТРОИТЕЛЬСТВА</span>
          </h1>
        </Fade>
        <Fade direction="up" delay={3800} duration={4000}>
          <button className={styles.hero_button}>ПРЕЗЕНТАЦИЯ КОМПАНИИ</button>
        </Fade>
       <Arrows/>
      </section>
    </>
  );
}
