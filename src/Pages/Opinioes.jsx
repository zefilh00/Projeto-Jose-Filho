import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import ArtigoCard from "../Components/ArtigoCard.jsx";
import AdBanner from "../Components/AdBanner.jsx";
import { artigos } from "../data/artigos.js";

export default function Opinioes() {
  const politica = artigos.filter((artigo) => artigo.categoria === "politica");
  const tecnologia = artigos.filter(
    (artigo) => artigo.categoria === "tecnologia"
  );
  const geek = artigos.filter((artigo) => artigo.categoria === "geek");

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#070b14] px-4 pt-40 pb-20 text-white md:px-6 md:pt-32 md:pb-24">
        <section className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-light tracking-wide text-blue-100 md:text-6xl">
              Opiniões
            </h1>

            <div className="mx-auto my-6 h-1 w-28 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
              Artigos, análises e reflexões sobre política, tecnologia, cultura
              geek e temas atuais.
            </p>
          </div>

          <div className="mb-20">
            <AdBanner />
          </div>

          <section className="mb-20">
            <div className="mb-10 inline-block">
              <h2 className="mb-2 text-3xl font-light text-blue-100 md:text-4xl">
                Política
              </h2>

              <div className="h-1 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {politica.map((artigo) => (
                <ArtigoCard key={artigo.id} artigo={artigo} />
              ))}
            </div>
          </section>

          <div className="mb-20">
            <AdBanner />
          </div>

          <section className="mb-20">
            <div className="mb-10 inline-block">
              <h2 className="mb-2 text-3xl font-light text-blue-100 md:text-4xl">
                Tecnologia
              </h2>

              <div className="h-1 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            </div>

            {tecnologia.length === 0 ? (
              <p className="text-gray-400">
                Em breve, artigos de tecnologia aparecerão aqui.
              </p>
            ) : (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {tecnologia.map((artigo) => (
                  <ArtigoCard key={artigo.id} artigo={artigo} />
                ))}
              </div>
            )}
          </section>

          <div className="mb-20">
            <AdBanner />
          </div>

          <section>
            <div className="mb-10 inline-block">
              <h2 className="mb-2 text-3xl font-light text-blue-100 md:text-4xl">
                Geek
              </h2>

              <div className="h-1 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            </div>

            {geek.length === 0 ? (
              <p className="text-gray-400">
                Em breve, artigos sobre cultura geek aparecerão aqui.
              </p>
            ) : (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {geek.map((artigo) => (
                  <ArtigoCard key={artigo.id} artigo={artigo} />
                ))}
              </div>
            )}
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}