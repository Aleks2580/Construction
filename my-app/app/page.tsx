import Image from "next/image";
import styles from "./page.module.css";
import Header from './ui/header/header'
import Hero from "./ui/hero/hero";


export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Hero/>
    </main>
  );
}
