import Header from "../../Components/Header.jsx";
import Footer from "../../Components/Footer.jsx";

const secoes = [
  {
    titulo: "Aceitação dos Termos",
    icone: "📜",
    texto: [
      "Ao acessar ou utilizar o site José Filho, você concorda com os presentes Termos de Uso. Caso não concorde com qualquer disposição destes termos, recomendamos que não utilize os serviços disponibilizados nesta plataforma.",
      "Estes termos podem ser alterados periodicamente para acompanhar mudanças no funcionamento do site ou em exigências legais.",
    ],
  },

  {
    titulo: "Objetivo do Site",
    icone: "🌐",
    texto: [
      "O site José Filho tem como finalidade compartilhar artigos de opinião, conteúdos sobre tecnologia, política, cultura geek, recomendações de produtos e demais assuntos relacionados aos interesses do autor.",
      "Todo o conteúdo possui caráter informativo e opinativo, podendo refletir exclusivamente a visão do autor sobre determinados assuntos.",
    ],
  },

  {
    titulo: "Cadastro de Usuários",
    icone: "👤",
    texto: [
      "Algumas funcionalidades, como comentários e interação com conteúdos, exigem a criação de uma conta.",
      "O usuário é responsável por manter sua senha em sigilo e por todas as atividades realizadas em sua conta.",
    ],
  },

  {
    titulo: "Comentários",
    icone: "💬",
    texto: [
      "Os usuários são responsáveis pelos comentários publicados.",
      "Não serão permitidos conteúdos que contenham ofensas, discursos de ódio, ameaças, spam, divulgação ilegal, violação de direitos autorais ou qualquer conteúdo considerado ilícito pela legislação brasileira.",
      "Comentários que violem estas regras poderão ser removidos sem aviso prévio.",
    ],
  },

  {
    titulo: "Conteúdo Publicado",
    icone: "✍️",
    texto: [
      "Os artigos publicados representam opiniões e análises do autor, podendo conter interpretações pessoais sobre acontecimentos, produtos, tecnologias, filmes, jogos e demais assuntos abordados.",
      "Apesar do compromisso com informações corretas, não há garantia de que todo conteúdo permanecerá atualizado permanentemente.",
    ],
  },

  {
    titulo: "Propriedade Intelectual",
    icone: "©️",
    texto: [
      "Todo o conteúdo original deste site, incluindo textos, identidade visual, logotipo, imagens produzidas pelo autor e demais materiais exclusivos, é protegido pela legislação brasileira de direitos autorais.",
      "É proibida a reprodução integral sem autorização prévia do autor.",
    ],
  },

  {
    titulo: "Links para Terceiros",
    icone: "🔗",
    texto: [
      "Este site pode conter links para sites, produtos e serviços de terceiros.",
      "O José Filho não possui responsabilidade sobre conteúdos, políticas de privacidade ou práticas adotadas por esses serviços externos.",
    ],
  },

  {
    titulo: "Limitação de Responsabilidade",
    icone: "⚠️",
    texto: [
      "Embora sejam adotadas boas práticas de desenvolvimento e segurança, não é possível garantir funcionamento ininterrupto do site.",
      "O autor não se responsabiliza por eventuais indisponibilidades temporárias, falhas técnicas ou prejuízos decorrentes do uso das informações aqui disponibilizadas.",
    ],
  },

  {
    titulo: "Suspensão ou Exclusão de Contas",
    icone: "🚫",
    texto: [
      "Contas que utilizarem o sistema de forma abusiva, praticarem spam, tentarem explorar vulnerabilidades ou violarem estes Termos poderão ser suspensas ou removidas.",
    ],
  },

  {
    titulo: "Alterações dos Termos",
    icone: "🔄",
    texto: [
      "Os presentes Termos de Uso poderão ser modificados a qualquer momento para refletir alterações no funcionamento do site ou exigências legais.",
      "A versão mais recente estará sempre disponível nesta página.",
    ],
  },

  {
    titulo: "Legislação Aplicável",
    icone: "⚖️",
    texto: [
      "Estes Termos são regidos pela legislação brasileira, especialmente pelo Código Civil, Marco Civil da Internet e pela Lei Geral de Proteção de Dados (LGPD), quando aplicável.",
    ],
  },

  {
    titulo: "Contato",
    icone: "📧",
    texto: [
      "Em caso de dúvidas relacionadas a estes Termos de Uso, entre em contato pelo e-mail josearnaldofilho123@gmail.com.",
    ],
  },
];

export default function TermosUso() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#070b14] px-4 pt-44 pb-20 text-white md:px-6 md:pt-36 md:pb-24">
        <section className="mx-auto max-w-6xl">

          <div className="relative mb-16 overflow-hidden rounded-[3rem] border border-blue-500/60 bg-[#0b1020] p-8 text-center shadow-[0_0_40px_rgba(59,130,246,0.18)] md:p-14">

            <div
              className="absolute inset-0 scale-105 bg-cover bg-center opacity-20 blur-sm"
              style={{
                backgroundImage:
                  "url('https://ticoopbrasil.coop.br/wp-content/uploads/2024/10/O-Que-E-Programacao.jpg.webp')",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/90 via-[#0b1020]/80 to-purple-950/70" />

            <div className="relative z-10">

              <span className="mb-5 inline-block rounded-full border border-blue-500/40 px-5 py-2 text-sm uppercase tracking-[0.3em] text-blue-200">
                Institucional
              </span>

              <h1 className="text-4xl font-light tracking-wide text-blue-100 md:text-6xl">
                Termos de Uso
              </h1>

              <div className="mx-auto my-6 h-1 w-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
                Conheça as regras de utilização do site José Filho e as
                responsabilidades relacionadas ao uso da plataforma.
              </p>

            </div>
          </div>

          <div className="space-y-8">

            {secoes.map((secao) => (
              <section
                key={secao.titulo}
                className="rounded-[2.5rem] border border-blue-500/40 bg-[#0b1020]/80 p-6 shadow-[0_0_30px_rgba(59,130,246,0.12)] md:p-10"
              >

                <div className="mb-5 flex items-center gap-4">

                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/40 bg-blue-500/10 text-2xl">
                    {secao.icone}
                  </span>

                  <div>

                    <h2 className="text-2xl font-light text-blue-100 md:text-3xl">
                      {secao.titulo}
                    </h2>

                    <div className="mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

                  </div>

                </div>

                <div className="space-y-4 text-base leading-relaxed text-gray-300 md:text-lg">

                  {secao.texto.map((paragrafo, index) => (
                    <p key={index}>{paragrafo}</p>
                  ))}

                </div>

              </section>
            ))}

          </div>

          <div className="mt-10 rounded-[2rem] border border-purple-500/40 bg-purple-950/20 p-6 text-center text-gray-300">
            <p>
              Última atualização: <strong>junho de 2026</strong>
            </p>
          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}