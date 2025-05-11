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
          <h1>Saúde Mental nas Empresas</h1>
          <p>Avaliação de Risco Psicossocial para implementação de NR1.</p>
          <p>Implementação de Programas de Saúde Mental.</p>
          <p>Programas de Saúde Mental Burnout</p>
          <p>Programa de Inteligência Emocional para Líderes</p>
          <p>Programa de Plantão Picológico</p>
          <p>Programa de Saúde Mental e Clima Organizacional</p>
          <p>Programa para Manejo de Estresse</p>
          <p>Programa Equilíbrio Vida Trabalho</p>
          <p>Programa Psicologia Positiva</p>
          <p>Programa Sobre Assédio Moral</p>
          <p>Programa de Avalição Psicológica</p>
          <p>Programa para Comunicação Interpessoal</p>
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
