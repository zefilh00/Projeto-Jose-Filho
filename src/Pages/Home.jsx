import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import ProdutoCard from "../Components/ProdutoCard.jsx";
import VideoCard from "../Components/VideoCard.jsx";
import { produtos } from "../data/produtos.js";
import { videos } from "../data/videos.js";
import AdBanner from "../Components/AdBanner.jsx";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#070b14] px-4 pt-40 pb-20 text-white md:px-6 md:pt-32 md:pb-24">
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

        <section className="mx-auto mt-16 max-w-7xl">
          <AdBanner />
        </section>

        <section className="mx-auto mt-24 max-w-7xl">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="inline-block">
              <h2 className="text-4xl font-light tracking-wide text-blue-100 md:text-5xl">
                Recomendações
              </h2>

              <div className="mt-3 h-1 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            </div>

            <a
              href="/recomendacoes"
              className="rounded-2xl border border-blue-500/50 bg-[#0b1020] px-8 py-3 text-blue-100 transition duration-300 hover:border-blue-400 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]"
            >
              Ver Todas →
            </a>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {produtos.slice(0, 3).map((produto) => (
              <ProdutoCard
                key={produto.id}
                produto={produto}
              />
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-7xl">
          <AdBanner />
        </section>

        <section className="mx-auto mt-24 max-w-7xl">
          <div className="mb-12">
            <div className="inline-block">
              <h2 className="text-4xl font-light tracking-wide text-blue-100 md:text-5xl">
                Últimos Vídeos
              </h2>

              <div className="mt-3 h-1 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            </div>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
              Também tenho um canal voltado para gameplays com humor, onde
              compartilho momentos divertidos, jogos variados e conteúdos mais
              descontraídos.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {videos.slice(0, 3).map((video) => (
              <VideoCard
                key={video.id}
                video={video}
              />
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-7xl">
          <AdBanner />
        </section>

        <section
          id="sobre"
          className="mx-auto mt-24 max-w-7xl scroll-mt-40 md:scroll-mt-32"
        >
          <div className="mb-10 inline-block">
            <h2 className="text-4xl font-light tracking-wide text-blue-100 md:text-5xl">
              Sobre José Filho
            </h2>

            <div className="mt-3 h-1 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
          </div>

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
                The Elder Scrolls V: Skyrim.
              </p>

              <p>
                No campo político, minhas ideias se alinham à direita liberal,
                valorizando princípios como liberdade individual,
                responsabilidade, livre mercado e limitação do poder estatal.
                Acredito que o debate saudável de ideias é fundamental para uma
                sociedade mais livre e desenvolvida.
              </p>

              <p>
                Este site foi criado com o objetivo de compartilhar minhas
                opiniões, análises e reflexões sobre temas relacionados à
                política, tecnologia e assuntos que considero relevantes para a
                sociedade atual.
              </p>

              <p>
                Além disso, também publicarei conteúdos voltados para
                recomendações de produtos, principalmente relacionados ao
                universo da tecnologia.
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

        <section className="mx-auto mt-16 max-w-7xl">
          <AdBanner />
        </section>

      </main>

      <Footer />
    </>
  );
}