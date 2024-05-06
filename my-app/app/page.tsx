import Image from "next/image";
import styles from "./page.module.css";
import Header from "./ui/header/header";
import Hero from "./ui/hero/hero";
import About from "./ui/about/about";
import Services from "./ui/services/services";
import Projects from "./ui/projects/projects";
import Contacts from "./ui/contacts/contacts";
import Footer from "./ui/footer/footer";

export default function Home() {
  return (
    <main>
      <div className={styles.header} id="/">
        <Header />
      </div>
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contacts">
        <Contacts />
      </div>
      <Footer />
    </main>
  );
}
