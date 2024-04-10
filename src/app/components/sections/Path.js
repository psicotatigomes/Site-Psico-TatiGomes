import Image from "next/image";

function Path() {
  return (
    <section className="path container" id="therapy">
      <div className="text-container">
        <h2 className="section-title">
          Encontre o caminho para uma vida mais livre, leve e plena!
        </h2>
        <p>
          Traumas não tratados, conscientes ou não, podem se tornar bloqueio
          para uma vida mais livre, leve e plena. Ofereço psicoterapia para
          tratamento de questões, sofrimentos e transtornos relacionados a
          traumas emocionais.
        </p>
        <p>
          Atendo pessoas que buscam tratar sofrimentos, bloqueios emocionais,
          fobias e vários outros tipos de sintomas e transtornos de saúde mental
          relacionados a traumas.
        </p>
        <p>
          Meu trabalho fundamenta-se nas psicoterapias EMDR- Eye Movement
          Desensitization and Reprocessing- e TCC- Terapia Cognitiva
          Comportamental de Terceira Geração com foco no tratamento de traumas
          além de outras abordagens complementares como Mindfulness e Psicologia
          Positiva.
        </p>
        <p>
          A psicoterapia pode ser a ponte para sua transformação! Posso te
          ajudar a deixar o seu passado, no passado e a tomar as rédeas da sua
          vida!!
        </p>
        <p>
          <a
            className="button"
            href={`https://api.whatsapp.com/send?phone=5513996188808&text=Olá, gostaria de agendar um primeiro contato!`}
          >
            Entre em contato!
          </a>
        </p>
      </div>
      <div className="img-container">
        <Image
          src="/path-image.jpeg"
          alt="section divider"
          width={678}
          height={526}
        />
      </div>
    </section>
  );
}

export default Path;
