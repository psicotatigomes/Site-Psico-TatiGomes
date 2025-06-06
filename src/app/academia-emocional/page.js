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
          <ul>
            <li>
              Mentoria individual e em grupo para desenvolvimento pessoal
              baseado com foco na identificação e potencialização das forças
              pessoais.
            </li>
            <li>
              Grupo Conexão para apoio terapêutico, auto-conhecimento e
              desenvolvimento da inteligência emocional e comunicação
              interpessoal. Um grupo referenciado na CNV (comunicação não
              violenta), psicologia positiva e Mindfullness.
            </li>
            <li>
              Workshop: O Pode da Escuta referenciado na Comunicação Não
              Violenta e no Mindfullness
            </li>

            <li>Palestras psicoeducativas</li>
          </ul>
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
