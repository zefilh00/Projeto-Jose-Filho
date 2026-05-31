import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#070b14] px-4 pt-28 pb-20 text-white md:px-6 md:pt-32 md:pb-24">
        <section className="relative mx-auto flex min-h-[520px] max-w-7xl items-center justify-center overflow-hidden rounded-[3rem] border-2 border-blue-500/80 bg-[#0b1020] shadow-[0_0_40px_rgba(59,130,246,0.25)] md:rounded-[5rem]">
          <div
            className="absolute inset-0 scale-105 bg-cover bg-center opacity-35 blur-sm"
            style={{
              backgroundImage:
                "url('https://ticoopbrasil.coop.br/wp-content/uploads/2024/10/O-Que-E-Programacao.jpg.webp')",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/80 via-[#0b1020]/60 to-purple-950/70" />

          <div className="relative z-10 px-4 text-center md:px-6">
            <h1 className="text-5xl font-light tracking-wide drop-shadow-[0_0_20px_rgba(147,197,253,0.45)] md:text-7xl">
              José Filho
            </h1>

            <div className="mx-auto my-8 h-1 w-28 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

            <p className="mx-auto max-w-2xl text-2xl font-light leading-snug text-blue-100 md:text-4xl">
              Tecnologia + Política + Recomendações
            </p>
          </div>
        </section>

        <section id="sobre" className="mx-auto mt-20 max-w-7xl scroll-mt-28 md:mt-24 md:scroll-mt-32">
          <h2 className="mb-8 text-4xl font-light tracking-wide text-blue-100 md:mb-10 md:text-5xl">
            Sobre José Filho
          </h2>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-blue-500/70 bg-[#0b1020]/80 p-6 shadow-[0_0_35px_rgba(59,130,246,0.18)] md:rounded-[4rem] md:p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-purple-950/30" />

            <div className="relative z-10 space-y-5 text-base leading-relaxed text-gray-300 md:space-y-6 md:text-xl">
              <p>
                Meu nome é José Arnaldo de Carvalho Filho e sou estudante de
                Análise e Desenvolvimento de Sistemas na FAMINAS, atualmente
                cursando o terceiro semestre da graduação. Desde que tive meu
                primeiro contato com a tecnologia, descobri uma grande paixão
                pela programação e pelo universo da computação, uma área que
                estudo constantemente em busca de novos conhecimentos e desafios.
              </p>

              <p>
                Além da tecnologia, sou alguém profundamente conectado à cultura
                nerd. Sou um grande admirador da obra O Senhor dos Anéis, fã do
                universo da DC Comics e apaixonado por jogos que marcaram
                gerações, como os clássicos da franquia God of War e o lendário
                The Elder Scrolls V: Skyrim. Essas histórias, personagens e
                mundos fantásticos ajudaram a moldar minha criatividade, minha
                forma de pensar e até mesmo minha visão sobre diversos temas do
                cotidiano.
              </p>

              <p>
                No campo político, minhas ideias se alinham à direita liberal,
                valorizando princípios como liberdade individual,
                responsabilidade, livre mercado e limitação do poder estatal.
                Acredito que o debate saudável de ideias é fundamental para uma
                sociedade mais livre e desenvolvida, e por isso gosto de estudar
                e acompanhar os acontecimentos políticos e econômicos do Brasil
                e do mundo.
              </p>

              <p>
                Este site foi criado com o objetivo de compartilhar minhas
                opiniões, análises e reflexões sobre temas relacionados à
                política, tecnologia e assuntos que considero relevantes para a
                sociedade atual. Aqui você encontrará artigos nos quais apresento
                minhas perspectivas e argumentos sobre diferentes temas, sempre
                buscando promover o debate e a troca de ideias.
              </p>

              <p>
                Além disso, também publicarei conteúdos voltados para
                recomendações de produtos, principalmente relacionados ao
                universo da tecnologia. Seja um novo hardware, periférico,
                notebook, smartphone ou qualquer outra novidade do mundo tech,
                pretendo compartilhar minhas impressões e sugestões para ajudar
                outras pessoas a fazerem escolhas mais informadas.
              </p>

              <p>
                Se você gosta de tecnologia, política, cultura nerd e discussões
                sobre o mundo atual, espero que encontre aqui conteúdos
                interessantes e que este espaço possa se tornar um ponto de troca
                de ideias e aprendizado.
              </p>

              <p className="text-center text-xl font-medium text-blue-200 md:text-2xl">
                Seja muito bem-vindo!
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}