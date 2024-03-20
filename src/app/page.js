import Image from "next/image";
import "./globals.scss";
import { fetchPosts } from "@/app/lib/data";
import PostCard from "../app/components/PostCard";
import ContactForm from "./components/ContactForm";

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <main>
      <section className="hero">
        <video autoPlay muted loop className="hero-video">
          <source src="hero-video.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
        <div className="text-container">
          <small>psicóloga</small>
          <h1>
            <span>Tatiana</span> <span>Gomes</span>
          </h1>
          <p>
            Descubra o caminho para uma jornada de <br /> autocuidado e
            transformação
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
      </section>
      <Image
        src="/divider-top.png"
        alt="section divider"
        width={1440}
        height={186}
        className="divider"
      />
      <section className="about container">
        <button className="mobile">Conheça mais sobre mim</button>
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
            Então, se você sofre de alguma forma em razão de traumas e gostaria
            de tratá-los ou mesmo, se quer investir no seu bem estar individual
            e relacional, autoconhecimento, crescimento  pessoal, desenvolver
            sua  resiliência, entre em contato! Posso ajudar!
          </p>
          <button className="desktop">Conheça mais sobre mim</button>
        </div>
      </section>
      <Image
        src="/divider-bottom.png"
        alt="section divider"
        width={1440}
        height={186}
        className="divider"
      />
      <Image
        src="/divider-top.png"
        alt="section divider"
        width={1440}
        height={186}
        className="divider top"
      />
      <section className="path">
        <div className="text-container">
          <h2 className="section-title">
            Encontre o caminho para uma vida mais livre, leve e plena!
          </h2>
          <p>
            Traumas não tratados, conscientes ou não, podem se tornar bloqueio
            para uma mais livre, leve e plena. Eu ofereço psicoterapia para
            tratamento de questões, sofrimentos e transtornos relacionados a
            traumas emocionais. Te ajudo a deixar o seu passado, no passado e a
            tomar as rédeas da sua vida!!
          </p>
          <p>
            Se tratar traumas não for uma questão para você, mas sente a
            necessidade de se fortalecer, crescer, amplicar seu olhar, suas
            atitudes para lidar melhor com os desafios da vida, cuidar do seu
            bem estar e alcançar suas metas. Se buscar espaço de acolhimento e
            aprendizado para isso, também ofereço outros serviços como grupos e
            workshops para seu apoio emocional, autoconhecimento e ferramentas
            para desenvolver sua resiliência e habilidades socioemocionais.
          </p>
        </div>
        <div className="img-container">
          <Image
            src="/path-image.png"
            alt="section divider"
            width={678}
            height={526}
          />
        </div>
      </section>
      <Image
        src="/divider-bottom.png"
        alt="section divider"
        width={1440}
        height={186}
        className="divider"
      />
      <Image
        src="/divider-top.png"
        alt="section divider"
        width={1440}
        height={186}
        className="divider top"
      />
      <section className="blog" id="blog">
        <div>
          <h2 className="section-title">Blog</h2>
          <p>
            Abaixo estão artigos que escrevo a afim de elucidar conceitos sobre
            EMDR, psicologia clínica, tratamentos de traumas e saúde mnetal no
            geral.
            <br />
            Aproveite!
          </p>
        </div>

        <div className="articles">
          {posts.map(function renderPosts(post) {
            return <PostCard post={post} key={post.id} />;
          })}
        </div>
      </section>
      <Image
        src="/divider-bottom.png"
        alt="section divider"
        width={1440}
        height={186}
        className="divider"
      />
      <section className="contact" id="contact">
        <h2 className="section-title">Contato</h2>
        <p>
          Eu gostaria de ouvir de você. Envie uma mensagem e começaremos esta
          conversa em direção à sua <br /> jornada de autocuidado.
        </p>
        <ContactForm />
      </section>
    </main>
  );
}
