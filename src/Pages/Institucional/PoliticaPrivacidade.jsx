import Header from "../../Components/Header.jsx";
import Footer from "../../Components/Footer.jsx";

const secoes = [
  {
    titulo: "Introdução",
    icone: "📄",
    texto: [
      "Esta Política de Privacidade explica como o site José Filho coleta, utiliza, armazena e protege as informações dos usuários que acessam a plataforma.",
      "O objetivo deste site é publicar artigos de opinião, conteúdos sobre tecnologia, cultura geek, política, recomendações de produtos e permitir a interação dos usuários por meio de comentários.",
    ],
  },
  {
    titulo: "Dados que coletamos",
    icone: "👤",
    texto: [
      "Ao criar uma conta no site, podemos coletar informações como nome, endereço de e-mail, foto de perfil e dados relacionados aos comentários publicados.",
      "Também podemos coletar informações técnicas de navegação, como endereço IP, tipo de dispositivo, navegador utilizado, páginas acessadas e tempo de permanência no site.",
    ],
  },
  {
    titulo: "Conta de usuário e comentários",
    icone: "💬",
    texto: [
      "Usuários cadastrados podem comentar em artigos e recomendações de produtos. Os comentários publicados podem exibir nome, foto de perfil, data e horário da publicação.",
      "O usuário é responsável pelo conteúdo que publica. Comentários ofensivos, ilegais, spam ou que violem direitos de terceiros poderão ser removidos ou sua conta poderá ser banida.",
    ],
  },
  {
    titulo: "Cookies",
    icone: "🍪",
    texto: [
      "Este site pode utilizar cookies para melhorar a experiência do usuário, lembrar preferências, analisar o tráfego e auxiliar na exibição de anúncios.",
      "Cookies são pequenos arquivos armazenados no navegador do usuário. Você pode desativá-los nas configurações do seu navegador, mas algumas funcionalidades do site podem ser afetadas.",
    ],
  },
  {
    titulo: "Google AdSense e publicidade",
    icone: "📢",
    texto: [
      "Este site pode utilizar o Google AdSense para exibir anúncios. O Google pode utilizar cookies para personalizar anúncios com base nas visitas anteriores do usuário a este e a outros sites.",
      "O usuário pode gerenciar a personalização de anúncios diretamente nas configurações da própria Conta Google.",
    ],
  },
  {
    titulo: "Serviços utilizados",
    icone: "🛠️",
    texto: [
      "Este site utiliza serviços de terceiros para seu funcionamento, como Supabase para autenticação, banco de dados e armazenamento de imagens, Vercel para hospedagem e Google AdSense para publicidade.",
      "Esses serviços podem processar dados conforme suas próprias políticas de privacidade.",
    ],
  },
  {
    titulo: "Segurança dos dados",
    icone: "🔒",
    texto: [
      "Adotamos medidas técnicas para proteger os dados dos usuários, incluindo autenticação segura, controle de permissões e regras de acesso no banco de dados.",
      "Apesar disso, nenhum sistema é totalmente imune a falhas. O usuário também deve proteger sua senha e evitar compartilhar dados de acesso.",
    ],
  },
  {
    titulo: "Direitos do usuário — LGPD",
    icone: "⚖️",
    texto: [
      "De acordo com a Lei Geral de Proteção de Dados Pessoais — LGPD, o usuário pode solicitar acesso, correção, exclusão ou informações sobre o tratamento de seus dados pessoais.",
      "Solicitações relacionadas a dados pessoais podem ser feitas pelo canal de contato informado nesta página.",
    ],
  },
  {
    titulo: "Alterações nesta política",
    icone: "🔄",
    texto: [
      "Esta Política de Privacidade poderá ser atualizada periodicamente para refletir mudanças no site, em suas funcionalidades ou em exigências legais.",
      "A data da última atualização estará sempre disponível ao final desta página.",
    ],
  },
  {
    titulo: "Contato",
    icone: "📧",
    texto: [
      "Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento de dados pessoais, entre em contato pelo e-mail: josearnaldofilho123@gmail.com.",
    ],
  },
];

export default function PoliticaPrivacidade() {
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
                Política de Privacidade
              </h1>

              <div className="mx-auto my-6 h-1 w-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
                Como coletamos, utilizamos e protegemos seus dados dentro do
                site José Filho.
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