import Image from "next/image";
import Link from "next/link";
import "./globals.scss";
import { fetchPosts } from "@/app/lib/data";
import PostCard from "../app/components/PostCard";
import Contact from "./components/ContactSection/Contact";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <main>
      <section className="hero" id="hero">
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
      <div style={{ textAlign: "center" }}>
        <strong>
          <p>Olá, você está buscando lidar com seu sofrimento?</p>
        </strong>
        <p>
          Busca acolhimento, quer apoio, orientação profissional e humanizada
          para se cuidar, se fortalecer, se desenvolver?
        </p>
        <p>
          Você pode fazer psicoterapia sem sair de casa e ter ajuda de uma
          psicóloga para construir a ponte para novos caminhos e novos
          significados em sua vida!
        </p>
        <p>Seja bem vindo (a) ao meu consultório on-line!</p>
        <p>Deixa eu me apresentar!</p>
      </div>
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
            Me chamo Tatiana, sou psicóloga e psicoterapeuta (CRP 06.80456).
          </p>
          <p>
            Se você sofre de alguma forma em razão de traumas e gostaria de
            tratá-los para conquistar uma vida mais fluída, leve com mais
            realizações, ou mesmo, se quer investir no seu autoconhecimento, bem
            estar e resiliência para os desafios da vida, posso te ajudar! 
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
            respaldadas cientificamente para poder oferecer além de uma escuta
            atenta, empática e acolhedora, também um conjunto de estratégias e
            técnicas, com o objetivo de atender cada vez melhor e com mais
            eficiência a cada pessoa e situação.
          </p>
          <p>
            Então, se você sofre de alguma forma e quer investir no seu bem
            estar, quer se relacionar melhor, aprender se autorregular
            emocionalmente, desenvolver sua  resiliência. Enfim, se busca cuidar
            da sua saúde emocional e desenvolvimento pessoal, entre em contato!
            Posso ajudar!
          </p>
          <Link href="" className="button desktop">
            Conheça mais sobre mim
          </Link>
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
      <section className="path" id="services">
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
            Aqui você encontrará alguns artigos que escrevo, relacionados à
            saúde mental, desenvolvimento pessoal te contanto um pouco como
            funciona os tratamentos e abordagens psicoterápicas, fatores de
            risco e e de proteção da saúde mental no dia-dia, hábitos saudáveis
            e práticas de autocuidado.
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
      <section className="faq container" id="faq">
        <h2 className="section-title">
          Dúvidas frequentes sobre o funcionamento prático da psicoterapia.
        </h2>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <AccordionButton>
              <h2>
                <Box as="span">
                  <strong>1-Quando devo procurar um psicólogo (a)?</strong>
                </Box>
                <AccordionIcon />
              </h2>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <ul>
                <li>
                  estiver buscando por autoconhecimento e mudanças de padrões de
                  comportamentos indesejados;
                </li>
                <li>
                  quiser aprender novas habilidades para se comunicar melhor;
                </li>
                <li>há busca para aprender a gerenciar o estresse ;</li>
                <li>
                  quiser lidar melhor com situações pontuais, como separações,
                  transições, mudanças, perdas;
                </li>
                <li>a vida perder o sentido; </li>
                <li>
                  quando as frustrações e mágoas te transformarem ao ponto de
                  você não se reconhecer;
                </li>
                <li>sentir que perdeu o controle sobre si e com os outros; </li>
                <li>
                  se perceber estagnado na vida e quiser adquirir
                  autoconhecimento para realizar alguma mudança.
                </li>
              </ul>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <h2>
                <Box as="span">
                  <strong>2 - Terapia online funciona?</strong>
                </Box>
                <AccordionIcon />
              </h2>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <p>
                O acompanhamento psicológico online tem a mesma eficácia do
                acompanhamento presencial, desde que respeitadas as condições
                necessárias. A terapia online tem como benefício reduzir custos
                e tempo com deslocamento também proporciona ao cliente realizar
                a sessão no local onde se sentir mais confortável e com mais
                privacidade.
              </p>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <h2>
                <Box as="span">
                  <strong>3 - Qual a duração do tratamento? </strong>
                </Box>
                <AccordionIcon />
              </h2>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <p>
                Cada pessoa tem o seu tempo, seu ritmo. Porém, há outros fatores
                que vão implicar na duração da terapia. Observo que há pessoas
                que chegam com expectativa “de arrumar sua mesa, outras de
                arrumar seu quarto e outras ainda querem arrumar a casa toda”,
                ou seja, o objetivo da terapia é um dos fatores a ser
                considerado em relação a sua duração. Outro fator é que a
                terapia é um processo de corresponsabilidade entre paciente e
                terapeuta. Então, vai depender também do empenho e das
                disponibilidades da pessoa para lidar com o desenvolvimento das
                suas questões.
              </p>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <h2>
                <Box as="span">
                  <strong>4. Qual a faixa etária é atendida?</strong>
                </Box>
                <AccordionIcon />
              </h2>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <p> Eu atendo adultos a partir de 18 anos.</p>{" "}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <h2>
                <Box as="span">
                  <strong>3. Aceita plano de saúde?</strong>
                </Box>
                <AccordionIcon />
              </h2>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <p>
                No momento as consultas são particulares, não aceito plano de
                saúde. Mas posso emitir um recibo para solicitação de reembolso
                ao seu plano de saúde.
              </p>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <h2>
                <Box as="span">
                  <strong>5. Qual é a modalidade de atendimento?</strong>
                </Box>
                <AccordionIcon />
              </h2>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <p>Realizo atendimentos exclusivamente na modalidade on-line.</p>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <h2>
                <Box as="span">
                  <strong>
                    6. Como funciona e o que é necessário para o atendimento
                    on-line?
                  </strong>
                </Box>
                <AccordionIcon />
              </h2>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <ul>
                <ol>
                  1.O consultante precisa estar em um ambiente reservado,
                  privativo, silencioso e sem interrupções, como é necessário no
                  atendimento em consultório físico.
                </ol>
                <ol>
                  2.É necessário internet segura (não utilizar internet de
                  locais públicos).
                </ol>
                <ol>
                  3.Será necessário um computador, notebook ou celular que tenha
                  o aplicativo Zoom para a realização da sessão. É importante
                  usar fone de ouvido e checar o carregador e bateria do
                  equipamento previamente.
                </ol>
                <ol>
                  4.Será combinado com o consultante o dia e horário para o
                  atendimento, com sessões que podem ser uma vez na semana e
                  posteriormente de 15 em 15 dias a depender da queixa e
                  objetivos da psicoterapia. Este dia e horário ficará agendado
                  de forma fixa para o consultante, havendo a possiblidade de
                  troca mediante o aviso com antecedência de no mínimo 24 horas
                  e disponibilidade na minha agenda para remarcação.
                </ol>
              </ul>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <h2>
                <Box as="span">
                  <strong>6. Como funciona o pagamento?</strong>
                </Box>
                <AccordionIcon />
              </h2>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <p>
                O pagamento é realizado antes do atendimento, pode ser feito por
                sessão ou fechamento do pacote de 4 sessões. Serão aceitas as
                modalidades de pix. depósito em conta ou link de pagamento para
                cartões de crédito ou débito
              </p>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <h2>
                <Box as="span">
                  <strong>
                    7 Se eu faltar da terapia, a sessão vai ser cobrada?
                  </strong>
                </Box>
                <AccordionIcon />
              </h2>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <p>
                Se houver aviso prévio de no mínimo 24 horas a sessão não será
                cobrada.
              </p>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <h2>
                <Box as="span">
                  <strong>
                    8. Com devo fazer se eu não puder comparecer no dia e
                    horário agendado ?
                  </strong>
                </Box>
                <AccordionIcon />
              </h2>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <p>
                Entre em contato por WhatsApp o quanto antes para que sua
                consulta seja reagendada. Caso este contato não seja realizado,
                será entendido como falta e a sessão será contabilizada, pois a
                profissional ficou disponível neste tempo somente para a sua
                consulta.
              </p>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <h2>
                <Box as="span">
                  <strong>9. O que fazer em caso de problemas técnicos?</strong>
                </Box>
                <AccordionIcon />
              </h2>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <p>
                Sabemos que pode haver oscilações de internet, problemas no
                equipamento e vários fatores que influenciam a chamada até mesmo
                no momento da consulta. Caso isso aconteça e não consiga
                realizar o retorno imediato a psicóloga, assim que for possível
                entre em contato pelas vias de comunicação informadas no site
                para que sua consulta seja reagendada.
              </p>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <h2>
                <Box as="span">
                  <strong>
                    10. Sou brasileiro (a) estou fora do Brasil ou irei morar
                    fora, posso fazer a terapia online?
                  </strong>
                </Box>
                <AccordionIcon />
              </h2>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <p>
                Sim, pode! Não há impedimento algum em fazer psicoterapia com um
                psicólogo (a) no Brasil.
              </p>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <h2>
                <Box as="span">
                  <strong>11. Qual o valor da sessão de terapia?</strong>
                </Box>
                <AccordionIcon />
              </h2>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <p>
                O valor da sessão não pode ser divulgado publicamente, de acordo
                com as normas éticas do Conselho Regional de Psicologia. Entre
                em contato via WhatsApp que tiro todas as dúvidas.
              </p>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton>
              <h2>
                <Box as="span">
                  <strong>
                    12-Há alguma demanda ou casos os quais não são atendidos
                    neste consultório psicológico on-line?
                  </strong>
                </Box>
                <AccordionIcon />
              </h2>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <p>Sim. Não atendo casos que possuam diagnóstico de:</p>
              <ul>
                <li>dependência química; </li>
                <li>esquizofrenia/psicótico; </li>
                <li>transtorno bipolar</li>
                <li>transtorno de personalidade borderline</li>
              </ul>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </section>

      <Contact />
    </main>
  );
}
