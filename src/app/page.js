import Image from "next/image";
import "./globals.scss";
import { fetchPosts } from "@/app/lib/data";
import Contact from "@components/ContactSection/Contact";
import { Hero, About, Path, Blog, FAQ } from "@components/sections";

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <main>
      <Hero />
      <Image
        src="/divider-top.png"
        alt="section divider"
        width={1440}
        height={186}
        className="divider"
      />
      <div className="pre-intro">
        <strong>
          <p>
            Olá, você está buscando cuidar do seu bem estar, investir no seu
            auto-conhecimento e descobrir ou fortalecer seu poder pessoal?
          </p>
        </strong>

        <p>
          Você pode fazer psicoterapia sem sair de casa, quer você esteja no
          Brasil ou no exterior. A psicoterapia pode ser um processo de
          travessia para novos caminhos e significados em sua vida!
        </p>
        <p>Seja bem vindo (a) ao meu consultório on-line!</p>
        <p>Deixa eu me apresentar!</p>
      </div>
      <About />
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
      <Path />
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
      <Blog posts={posts} />
      <Image
        src="/divider-bottom.png"
        alt="section divider"
        width={1440}
        height={186}
        className="divider"
      />
      <FAQ />
      <Contact />
    </main>
  );
}
