import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import { Link } from "react-router-dom";
import AdBanner from "../Components/AdBanner.jsx";

export default function Opinioes() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#070b14] px-4 pt-40 pb-20 text-white md:px-6 md:pt-32 md:pb-24">
        <section className="mx-auto mb-12 max-w-7xl">
          <AdBanner />
        </section>

        <section className="mx-auto flex min-h-[65vh] max-w-7xl items-center justify-center">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-blue-500/60 bg-[#0b1020]/80 p-8 text-center shadow-[0_0_35px_rgba(59,130,246,0.18)] md:rounded-[4rem] md:p-14">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/25 via-transparent to-purple-950/35" />

            <div className="relative z-10">
              <span className="mb-6 inline-block rounded-full border border-blue-500/40 px-5 py-2 text-sm uppercase tracking-[0.3em] text-blue-200">
                Em breve
              </span>

              <h1 className="text-4xl font-light tracking-wide text-blue-100 md:text-6xl">
                Opiniões
              </h1>

              <div className="mx-auto my-6 h-1 w-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
                Em breve, esta página começará a receber artigos com minhas
                opiniões, análises e reflexões sobre os mundos que me propus a
                abordar neste site: tecnologia, política, cultura nerd,
                sociedade e temas atuais.
              </p>

              <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-400 md:text-lg">
                A ideia é transformar este espaço em um ambiente de debate,
                aprendizado e troca de ideias, sempre com argumentos,
                posicionamentos claros e respeito à liberdade de pensamento.
              </p>

              <Link
                to="/"
                className="mt-10 inline-block rounded-2xl border border-blue-500/50 bg-blue-500/10 px-8 py-3 text-blue-100 transition duration-300 hover:border-blue-400 hover:bg-blue-500/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]"
              >
                Voltar para início
              </Link>
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