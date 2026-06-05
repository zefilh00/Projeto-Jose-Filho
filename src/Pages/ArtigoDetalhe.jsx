import { Link, useParams } from "react-router-dom";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import AdBanner from "../Components/AdBanner.jsx";
import { artigos } from "../data/artigos.js";

export default function ArtigoDetalhe() {
  const { id } = useParams();

  const artigo = artigos.find((item) => item.id === Number(id));

  if (!artigo) {
    return (
      <>
        <Header />

        <main className="min-h-screen bg-[#070b14] px-4 pt-40 pb-20 text-white md:px-6 md:pt-32">
          <section className="mx-auto max-w-5xl text-center">
            <h1 className="text-4xl font-light text-blue-100">
              Artigo não encontrado
            </h1>

            <Link
              to="/opinioes"
              className="mt-8 inline-block rounded-xl border border-blue-500/50 px-6 py-3 text-blue-100 transition hover:bg-blue-500/10"
            >
              Voltar para opiniões
            </Link>
          </section>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#070b14] px-4 pt-40 pb-20 text-white md:px-6 md:pt-32 md:pb-24">
        <article className="mx-auto max-w-5xl">
          <Link
            to="/opinioes"
            className="mb-8 inline-block text-blue-300 transition hover:text-purple-300"
          >
            ← Voltar para opiniões
          </Link>

          <div className="mb-10">
            <AdBanner />
          </div>

          <div className="overflow-hidden rounded-[2.5rem] border border-blue-500/50 bg-[#0b1020]/80 shadow-[0_0_35px_rgba(59,130,246,0.18)]">
            <div className="bg-[#070b14]">
              <img
                src={artigo.imagem}
                alt={artigo.titulo}
                className="h-[500px] w-full object-contain"
              />
            </div>

            <div className="p-6 md:p-10">
              <span className="mb-5 inline-block rounded-full border border-blue-500/40 px-4 py-1 text-sm uppercase tracking-[0.25em] text-blue-200">
                {artigo.categoria}
              </span>

              <h1 className="text-4xl font-light leading-tight tracking-wide text-blue-100 md:text-6xl">
                {artigo.titulo}
              </h1>

              <div className="my-6 h-1 w-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

              <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
                Por {artigo.autor} • {artigo.data}
              </p>
            </div>
          </div>

          <section className="mt-12 rounded-[2.5rem] border border-blue-500/40 bg-[#0b1020]/70 p-6 shadow-[0_0_25px_rgba(59,130,246,0.12)] md:p-10">
            <div className="space-y-6 text-base leading-relaxed text-gray-300 md:text-xl">
              {artigo.texto
                .trim()
                .split("\n\n")
                .map((paragrafo, index) => (
                  <p key={index}>{paragrafo.trim()}</p>
                ))}
            </div>
          </section>

          <div className="mt-12">
            <AdBanner />
          </div>

          <section className="mt-12 rounded-[2.5rem] border border-blue-500/40 bg-[#0b1020]/70 p-6 shadow-[0_0_25px_rgba(59,130,246,0.12)] md:p-10">
            <div className="mb-8 inline-block">
              <h2 className="text-3xl font-light text-blue-100 md:text-4xl">
                Fontes
              </h2>

              <div className="mt-3 h-1 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            </div>

            <div className="space-y-8">
              {artigo.fontes.map((grupo, index) => (
                <div key={index}>
                  <h3 className="mb-4 text-xl font-light text-blue-200 md:text-2xl">
                    {grupo.subtitulo}
                  </h3>

                  <div className="space-y-3">
                    {grupo.links.map((fonte, fonteIndex) => (
                      <a
                        key={fonteIndex}
                        href={fonte.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-2xl border border-blue-500/30 bg-[#070b14]/70 p-4 text-blue-300 transition hover:border-blue-400 hover:bg-blue-500/10"
                      >
                        {fonte.titulo}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-12 rounded-[2rem] border border-purple-500/40 bg-purple-950/20 p-6 text-gray-300">
            <p>
              As opiniões expressas neste artigo são de responsabilidade
              exclusiva do autor. As fontes acima foram utilizadas para
              contextualização histórica, política e eleitoral.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}