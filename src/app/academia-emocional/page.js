import Image from "next/image";
import styles from "../about/styles.module.scss";
import Contact from "../components/ContactSection/Contact";
import "../globals.scss";
import "./styles.scss";

function EmotionalAcademy() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.imgContainer}>
          <Image
            src="/academia-emocional.jpeg"
            alt="Profile picture from Tatiana Gomes"
            width={674}
            height={110}
            priority
          />
        </div>
        <div className={styles.textContainer}>
          <h1>Academia emocional</h1>
          <h2>Agenda fechada no momento!</h2>
        </div>
      </section>
      <Image
        src="/divider-bottom.png"
        alt="section divider"
        width={1440}
        height={186}
        className="divider"
      />
      <Contact />
    </>
  );
}

export default EmotionalAcademy;
