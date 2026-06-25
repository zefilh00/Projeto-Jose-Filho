import { Link } from "react-router-dom";
import Header from "../../Components/Header.jsx";
import Footer from "../../Components/Footer.jsx";

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#070b14] px-4 pt-44 pb-20 text-white md:px-6 md:pt-36 md:pb-24">
        <section className="mx-auto flex min-h-[65vh] max-w-6xl items-center justify-center">
          <div className="relative w-full overflow-hidden rounded-[3rem] border border-blue-500/60 bg-[#0b1020]/80 p-8 text-center shadow-[0_0_40px_rgba(59,130,246,0.18)] md:p-14">
            <div
              className="absolute inset-0 scale-105 bg-cover bg-center opacity-20 blur-sm"
              style={{
                backgroundImage:
                  "url('https://ticoopbrasil.coop.br/wp-content/uploads/2024/10/O-Que-E-Programacao.jpg.webp')",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/95 via-[#0b1020]/85 to-purple-950/70" />

            <div className="relative z-10">
              <span className="mb-6 inline-block rounded-full border border-blue-500/40 px-5 py-2 text-sm uppercase tracking-[0.3em] text-blue-200">
                Erro 404
              </span>

              <h1 className="text-7xl font-light tracking-wide text-blue-100 drop-shadow-[0_0_25px_rgba(59,130,246,0.35)] md:text-9xl">
                404
              </h1>

              <div className="mx-auto my-7 h-1 w-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

              <h2 className="text-3xl font-light text-blue-100 md:text-5xl">
                Página não encontrada
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
                Parece que você tentou acessar um caminho que não existe ou que
                foi movido. Talvez o link esteja incorreto, expirado ou a página
                ainda não tenha sido criada.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/"
                  className="rounded-2xl border border-blue-500/50 bg-blue-500/10 px-8 py-3 text-blue-100 transition hover:border-blue-400 hover:bg-blue-500/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]"
                >
                  Voltar para o início
                </Link>

                <Link
                  to="/opinioes"
                  className="rounded-2xl border border-purple-500/50 bg-purple-500/10 px-8 py-3 text-blue-100 transition hover:border-purple-400 hover:bg-purple-500/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.22)]"
                >
                  Ver opiniões
                </Link>

                <Link
                  to="/recomendacoes"
                  className="rounded-2xl border border-blue-500/40 px-8 py-3 text-blue-100 transition hover:bg-blue-500/10"
                >
                  Recomendações
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}