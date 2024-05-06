import styles from "./arrows.module.css";
import Link from "next/link";

export default function Arrows() {
  return (
    <Link className={styles.arrows_main} href="#about">
      <div className={styles.arrow}></div>
      <div className={styles.arrowTwo}></div>
    </Link>
  );
}
