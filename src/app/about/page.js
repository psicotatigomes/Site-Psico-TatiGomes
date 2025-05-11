import Image from "next/image";
import Contact from "../components/ContactSection/Contact";
import styles from "./styles.module.scss";

function About() {
  return (
    <>
      <div className={styles.cover} />
      <section className={styles.section}>
        <div className={styles.imgContainer}>
          <Image
            src="/about-page.png"
            alt="Profile picture from Tatiana Gomes"
            width={674}
            height={110}
            priority
          />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.sectionTitle}>
            <h2>
              Sobre <span className={styles.ghost}>mim</span>{" "}
            </h2>
            <p>Um pouco sobre minha trajetória até aqui</p>
          </div>
          <p>
            Formei-me psicóloga em 2005, desde então venho me dedicando a
            estudar, praticar e aprender cada vez mais sobre saúde mental, bem
            estar, formação e desenvolvimento humano através de diversas
            especializações e outros tipos de cursos ao longo demais de 18 anos.
            Amo aprender e compartilhar conhecimento das mais diversas formas.
          </p>

          <p>
            Durante minha trajetória no serviço público e clínica particular, me
            chamou atenção, a importância de se cuidar das vivências traumáticas
            por um lado e por outro, a possibilidade de se investir no
            desenvolvimento da potencialidade humana, de investir naquelas
            forças que todos nós temos e muitas vezes nem nos damos conta, e
            acabamos não fazendo uso delas! Você sabe quais são as suas forças
            pessoais?
          </p>
          <p>
            Uma das minhas forças pessoais  mais marcante é o amor ao
            aprendizado. Aprecio e me esforço em aprender caminhos para ajudar
            as pessoas a superarem seus traumas e tomarem às rédeas de suas
            vidas, e também para conhecerem-se e desenvolverem-se a partir do
            que há de melhor em si mesmas, descobrirem suas forças para lidar
            com os desafios da vida, para conquistarem mais saúde integral,
            realizações, para alcançarem suas metas, melhorar relacionamentos e
            fluidez no seu caminhar!
          </p>
          <p>
            Conto a você algumas das minhas formações as quais acredito serem
            relevantes para os serviços oferecidos aqui. Além da minha graduação
            em Psicologia (bacharel e licenciatura) me pós graduei em:
          </p>

          <ul>
            <li>
              Mestre através da pesquisa sobre cultura, política educacional,
              desenvolvimento humano e autonomia pelo CNPQ - Conselho Nacional
              de Desenvolvimento Científico e Tecnológico – pela UNIMEP.
            </li>
            <li>
              Formada na abordagem psicoterápica EMDR certificada pelo Institute
              Francine Shapiro PH.D., EMDRIA Institute e EMDR Ibero América para
              tratamento de sofrimentos e transtornos relacionados a traumas com
              posteriores aprimoramentos
            </li>
            <li>
              Facilitadora e especializanda em CNV- Comunicação Não Violenta.
              Iniciei meu aprendizado em CNV na UNIFESP, Baixada Santista e
              desde então venho aprendendo com outros cursos e atividades. Me
              tornei estudiosa de CNV e através de treinamentos e grupos de
              práticas que ofereço, sou também disseminadora dessa abordagem de
              comunicação conhecida também como comunicação consciente,
              colaborativa e compassiva. Uma abordagem de comunicação que
              contribui para o autoconhecimento, desenvolvimento de habilidades
              sócio-emocionais, bem estar individual e relacional, útil também
              como ferramentas para lidar com conflitos.
            </li>
            <li>
              Pós-graduada em Justiça Restaurativa pela UNISANTA- em Santos. Uma
              abordagem sobre diálogos e cuidados humanistas para facilitação,
              condução de grupos em instituições e comunidades. Uma abordagem
              que cuida do bem estar individual e coletivo e da facilitação de
              resolução de conflitos em instituições, comunidades e em grupos em
              geral através de “troca de lentes” e da cultura de paz.
            </li>
            <li>
              Especializada em “Neurociência, Psicologia Positiva e Mindfulness”
              pela PUCPR.
            </li>
            <li>
              Certificada em Psicologia Positiva como “Analista e Interventora
              com forças pessoais” pelo Instituto Líder Flow com Helder Kamei.
            </li>
            <li>
              Especializada em TCC - Terapia Cognitiva Comportamental pela PUCRS
              com foco nas  TCCs de terceira geração e tratamentos de traumas.
            </li>
          </ul>

          <p>
            Além da psicoterapia on-line individual, ofereço também outras
             alternativas de atendimentos na @academiasemocional.tatigomes,  com
            foco em apoio emocional, autoconhecimento, desenvolvimento de
            habilidades sócio-emocionais, comunicação  e resiliência por meio de
            workshops e grupos de florescimento humano.
          </p>
          <p>
            Durante minha trajetória no serviço público e clínica particular, me
            chamou atenção, a importância de se cuidar das vivências traumáticas
            por um lado e por outro, a possibilidade de se investir no
            desenvolvimento da potencialidade humana, de investir naquelas
            forças que todos nós temos e muitas vezes nem nos damos conta, e
            acabamos não fazendo uso delas! Você sabe quais são as suas forças
            pessoais?
          </p>
          <p>
             Uma das minhas forças pessoais  mais marcante é o amor ao
            aprendizado. Aprecio e me esforço em aprender caminhos para ajudar
            as pessoas a superarem seus traumas e tomarem às rédeas de suas
            vidas, e também para conhecerem-se e se desenvolverem a partir do
            que há de melhor em si mesmas, descobrirem suas forças para lidar
            com os desafios da vida, para conquistarem mais saúde integral,
            realizações, para alcançarem suas metas e fluidez no seu caminhar.
          </p>
          <p>
            Então, se você busca saúde mental e desenvolvimento para você ou
            para sua empresa, posso te ajudar!
          </p>
          <br />
          <br />
          <br />
          <br />
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

export default About;
