import Link from "next/link";
import Image from "next/image";

function About() {
  return (
    <section className="about container" id="about">
      <Link href="/about" className="mobile button">
        Conheça mais sobre mim
      </Link>
      <div className="img-container">
        <Image
          src="/about-image.png"
          alt="Profile picture from Tatiana Gomes"
          width={674}
          height={110}
          priority
        />
      </div>
      <div className="text-container">
        <h2 className="section-title">Sobre mim</h2>
        <p>
          Olá, me chamo Tatiana, sou psicóloga e psicoterapeuta (CRP 06/80456).
        </p>
        <p>
          Hoje alinho minhas práticas de conhecimentos teóricos ao trabalho
          focado no trauma psicológico e suas diversas consequências.
        </p>
        <p>
          Posso te ajudar se você sofre de alguma forma, em razão de traumas e
          gostaria de tratá-lo s para conquistar uma vida mais fluída, leve, com
          mais realizações, ou mesmo, se quer investir no seu autoconhecimento,
          bem estar e resiliência para os desafios da vida.
        </p>
        <p>
          Não pratico apenas uma, mas diferentes abordagens de psicoterapias e
          desenvolvimento pessoal, respaldadas cientificamente para poder
          oferecer além de uma escuta atenta, presença empática e acolhedora,
          também um conjunto de estratégias e técnicas, com o objetivo de
          atender cada vez melhor e com mais eficiência a cada pessoa e
          situação.
        </p>
        <p>
          Enfim, se busca cuidar da sua saúde mental, emocional e
          desenvolvimento pessoal, entre em contato! Posso ajudar!
        </p>

        <p className="btn-placeholder">
          <Link href="/about" className="button desktop">
            Conheça mais sobre mim
          </Link>
        </p>
      </div>
    </section>
  );
}

export default About;
