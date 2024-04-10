import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

function FAQ() {
  return (
    <section className="faq container" id="faq">
      <h2 className="section-title">
        Dúvidas frequentes sobre o funcionamento prático da psicoterapia.
      </h2>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <AccordionButton>
            <h2>
              <Box as="span">
                <strong>1. Quando devo procurar um psicólogo (a)?</strong>
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
              <li>há busca para aprender a gerenciar o estresse;</li>
              <li>
                quiser lidar melhor com situações pontuais, como separações,
                transições, mudanças e perdas;
              </li>
              <li>a vida perder o sentido; </li>
              <li>
                quando as frustrações e mágoas te transformarem ao ponto de você
                não se reconhecer;
              </li>
              <li>sentir que perdeu o controle sobre si e com os outros; </li>
              <li>
                se perceber estagnado na vida e quiser adquirir autoconhecimento
                para realizar alguma mudança;
              </li>
              <li>quiser aprender a regular-se emocionalmente;</li>
              <li>tratar de transtornos de saúde mental;</li>
              <li>melhorar relacionamentos.</li>
            </ul>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <h2>
              <Box as="span">
                <strong>2. Terapia online funciona?</strong>
              </Box>
              <AccordionIcon />
            </h2>
          </AccordionButton>
          <AccordionPanel pb={4}>
            <p>
              O acompanhamento psicológico online tem a mesma eficácia do
              acompanhamento presencial, desde que respeitadas as condições
              necessárias. A terapia online tem como benefício reduzir custos e
              tempo com deslocamento, também proporciona ao cliente realizar a
              sessão no local onde se sentir mais confortável e com mais
              privacidade.
            </p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <h2>
              <Box as="span">
                <strong>3. Qual a duração do tratamento? </strong>
              </Box>
              <AccordionIcon />
            </h2>
          </AccordionButton>
          <AccordionPanel pb={4}>
            <p>
              Cada pessoa tem o seu tempo e seu ritmo. Porém, há outros fatores
              que vão implicar na duração da terapia. Observo que há pessoas que
              chegam com expectativa “de arrumar sua mesa, outras de arrumar seu
              quarto e outras ainda querem arrumar a casa toda”, ou seja, o
              objetivo da terapia é um dos fatores a ser considerado em relação
              a sua duração. Outro fator é que a terapia é um processo de
              corresponsabilidade entre paciente e terapeuta. Então, vai
              depender também do empenho e da disponibilidade da pessoa para
              lidar com o desenvolvimento das suas questões.
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
                <strong>5. Aceita plano de saúde?</strong>
              </Box>
              <AccordionIcon />
            </h2>
          </AccordionButton>
          <AccordionPanel pb={4}>
            <p>
              No momento as consultas são particulares, não aceito plano de
              saúde. Mas posso emitir um recibo para solicitação de reembolso ao
              seu plano de saúde.
            </p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <h2>
              <Box as="span">
                <strong>6. Qual é a modalidade de atendimento?</strong>
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
                  7. Como funciona e o que é necessário para o atendimento
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
                2.É necessário internet segura (não utilizar internet de locais
                públicos).
              </ol>
              <ol>
                3.Será necessário um computador, notebook ou celular que tenha o
                aplicativo Zoom para a realização da sessão. É importante usar
                fone de ouvido e checar o carregador e bateria do equipamento
                previamente.
              </ol>
              <ol>
                4.Será combinado com o consultante o dia e horário para o
                atendimento, com sessões que podem ser uma vez na semana e
                posteriormente de 15 em 15 dias a depender da queixa e objetivos
                da psicoterapia. Este dia e horário ficará agendado de forma
                fixa para o consultante, havendo a possiblidade de troca
                mediante o aviso com antecedência de no mínimo 24 horas e
                disponibilidade na minha agenda para remarcação.
              </ol>
            </ul>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <h2>
              <Box as="span">
                <strong>8. Como funciona o pagamento?</strong>
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
                  9. Se eu faltar da terapia, a sessão vai ser cobrada?
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
                  10. Com devo fazer se eu não puder comparecer no dia e horário
                  agendado ?
                </strong>
              </Box>
              <AccordionIcon />
            </h2>
          </AccordionButton>
          <AccordionPanel pb={4}>
            <p>
              Entre em contato por WhatsApp o quanto antes para que sua consulta
              seja reagendada. Caso este contato não seja realizado, será
              entendido como falta e a sessão será contabilizada, pois a
              profissional ficou disponível neste tempo somente para a sua
              consulta.
            </p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <h2>
              <Box as="span">
                <strong>11. O que fazer em caso de problemas técnicos?</strong>
              </Box>
              <AccordionIcon />
            </h2>
          </AccordionButton>
          <AccordionPanel pb={4}>
            <p>
              Sabemos que pode haver oscilações de internet, problemas no
              equipamento e vários fatores que influenciam a chamada até mesmo
              no momento da consulta. Caso isso aconteça e não consiga realizar
              o retorno imediato à psicóloga, assim que for possível entre em
              contato pelas vias de comunicação informadas no site para que sua
              consulta seja reagendada.
            </p>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <h2>
              <Box as="span">
                <strong>
                  12. Sou brasileiro (a) estou fora do Brasil ou irei morar
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
                <strong>13. Qual o valor da sessão de terapia?</strong>
              </Box>
              <AccordionIcon />
            </h2>
          </AccordionButton>
          <AccordionPanel pb={4}>
            <p>
              O valor da sessão não pode ser divulgado publicamente, de acordo
              com as normas éticas do Conselho Regional de Psicologia. Entre em
              contato via WhatsApp para que eu possa esclarecer todas as
              dúvidas.
            </p>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <h2>
              <Box as="span">
                <strong>
                  14. Há alguma demanda ou casos os quais não são atendidos
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
  );
}

export default FAQ;
