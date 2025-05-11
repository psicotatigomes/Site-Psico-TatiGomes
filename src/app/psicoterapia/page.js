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
          <h1>Psicoterepia</h1>
          <p>
            Olá, você está buscando cuidar do seu bem estar, investir no seu
            auto-conhecimento e descobrir ou fortalecer seu poder pessoal? Você
            pode fazer psicoterapia sem sair de casa, quer você esteja no Brasil
            ou no exterior. A psicoterapia pode ser um processo de travessia
            para novos caminhos e significados em sua vida! Seja bem vindo (a)
            ao meu consultório on-line!
          </p>
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
