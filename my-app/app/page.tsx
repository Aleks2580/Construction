import Image from "next/image";
import styles from "./page.module.css";
import Navbar from './ui/navbar'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <div>Hello</div>
    </main>
  );
}
