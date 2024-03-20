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
            Olá, me chamo Tatiana. Sou psicóloga e ofereço atendimento de forma
            on-line para pessoas adultas. Se você sofre de alguma forma em razão
            de traumas e gostaria de tratá-los para conquistar uma vida mais
            fluída, leve com mais realizações, ou mesmo, se quer investir no seu
            autoconhecimento, bem estar e resiliência para os desafios da vida.
             Posso te ajudar!
          </p>

          <p>
            Ofereço atendimentos para pessoas que buscam tratar sofrimentos,
            bloqueios emocionais, fobias e vários outros tipos de sintomas e
            transtornos relacionados a traumas através das psicoterapias EMDR e
            TCC- Terapia Cognitiva Comportamental de Terceira Geração com foco
            no tratamento de traumas além de outras abordagens complementares
            como Mindfulness e Psicologia Positiva.
          </p>
          <p>
            Não pratico apenas uma, mas diferentes abordagens de psicoterapias
            respaldadas cientificamente para poder oferecer um conjunto de
            estratégias e técnicas, com o objetivo de atender cada vez mais,
            melhor e com mais eficiência a cada situação e pessoa.
          </p>
          <p>
            Formei-me psicóloga em 2005, desde então venho me dedicando a
            estudar, praticar e aprender cada vez mais sobre saúde mental, bem
            estar, formação e desenvolvimento humano através de diversas
            especializações e outros tipos de cursos ao longo demais de 18 anos.
            Amo aprender e compartilhar conhecimento das mais diversas formas.
          </p>
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
            Então, se você sofre de alguma forma em razão de traumas e gostaria
            de tratá-los ou mesmo, se quer investir no seu bem estar individual
            e relacional, autoconhecimento, crescimento  pessoal, desenvolver
            sua  resiliência, entre em contato! Posso ajudar!
          </p>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.subTitle}>Mais sobre mim</h2>

          <p>
            <strong>Conto a você</strong> algumas das minhas formações as quais
            acredito serem relevantes para os serviços que ofereço aqui.
          </p>
          <p>
            Em 2010 conclui minha pesquisa de mestrado sobre cultura, política
            educacional, desenvolvimento humano e autonomia pelo CNPQ - Conselho
            Nacional de Desenvolvimento Científico e Tecnológico – pela UNIMEP.
          </p>
          <p>
            Em 2018 me formei na abordagem psicoterápica EMDR certificada pelo
            Institute Francine Shapiro PH.D., EMDRIA Institute e EMDR Ibero
            América.
          </p>
          <p>
            Em 2019 iniciei meu aprendizado em CNV- Comunicação Não Violenta- na
            UNIFESP, Baixada Santista e desde então me tornei estudiosa de CNV e
            através de treinamentos e grupos de práticas que ofereço, sou também
            disseminadora dessa abordagem de comunicação, chamada de comunicação
            consciente e colaborativa. Uma abordagem de comunicação que
            contribui para o autoconhecimento, desenvolvimento de habilidades
            sócio-emocionais, bem estar individual e relacional, útil também
            como ferramentas para lidar com conflitos.
          </p>
          <p>
             Em 2019, pós-graduei em Justiça Restaurativa, uma abordagem sobre
            diálogos e cuidados humanistas para facilitação, condução de grupos
            em instituições e comunidades. Uma abordagem que cuida do bem estar
            individual e coletivo e da facilitação de resolução de conflitos em
            instituições, comunidades e em grupos em geral.
          </p>
          <p>
            Em 2022, me especializei em “Neurociência, Psicologia Positiva e
            Mindfulness” pela PUCPR.
          </p>
          <p>
            Em 2023, me certifiquei em Psicologia Positiva como “Analista e
            Interventora com forças pessoais” pelo Instituto Líder Flow com
            Helder Kamei.
          </p>
          <p>
            Atualmente sou especializanda em TCC - Terapia Cognitiva
            Comportamental pela PUCRS com foco nas  TCCs de terceira geração e
            tratamentos de traumas.
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

export default About;
