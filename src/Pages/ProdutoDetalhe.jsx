import { Link, useParams } from "react-router-dom";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import { produtos } from "../data/produtos.js";
import AdBanner from "../Components/AdBanner.jsx";

export default function ProdutoDetalhe() {
  const { id } = useParams();

  const produto = produtos.find((item) => item.id === Number(id));

  if (!produto) {
    return (
      <>
        <Header />

        <main className="min-h-screen bg-[#070b14] px-4 pt-40 pb-20 text-white md:px-6 md:pt-32">
          <section className="mx-auto max-w-5xl text-center">
            <h1 className="text-4xl font-light text-blue-100">
              Produto não encontrado
            </h1>

            <Link
              to="/recomendacoes"
              className="mt-8 inline-block rounded-xl border border-blue-500/50 px-6 py-3 text-blue-100 transition hover:bg-blue-500/10"
            >
              Voltar para recomendações
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
        <section className="mx-auto max-w-7xl">
          <Link
            to="/recomendacoes"
            className="mb-8 inline-block text-blue-300 transition hover:text-purple-300"
          >
            ← Voltar para recomendações
          </Link>

          <div className="mb-8">
            <AdBanner />
          </div>

          <div className="grid gap-10 rounded-[2.5rem] border border-blue-500/60 bg-[#0b1020]/80 p-6 shadow-[0_0_35px_rgba(59,130,246,0.18)] md:grid-cols-2 md:p-10">
            <div className="overflow-hidden rounded-[2rem] border border-blue-500/30 bg-[#070b14]">
              <img
                src={produto.foto}
                alt={produto.nome}
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="mb-4 w-fit rounded-full border border-blue-500/40 px-4 py-1 text-sm uppercase tracking-wide text-blue-200">
                {produto.categoria}
              </span>

              <h1 className="text-4xl font-light tracking-wide text-blue-100 md:text-6xl">
                {produto.nome}
              </h1>

              <div className="my-6 h-1 w-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

              <p className="text-lg leading-relaxed text-gray-300 md:text-xl">
                {produto.descricao}
              </p>

              <a
                href={produto.linkProduto}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-fit rounded-2xl border border-blue-500/50 bg-blue-500/10 px-8 py-3 text-blue-100 transition hover:border-blue-400 hover:bg-blue-500/20 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]"
              >
                Ver produto 
              </a>
            </div>
          </div>

          <section className="mt-12 rounded-[2.5rem] border border-blue-500/40 bg-[#0b1020]/70 p-6 shadow-[0_0_25px_rgba(59,130,246,0.12)] md:p-10">
            <div className="mb-8 inline-block">
              <h2 className="text-3xl font-light text-blue-100 md:text-4xl">
                Por que recomendo?
              </h2>

              <div className="mt-3 h-1 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            </div>

            <p className="whitespace-pre-line text-base leading-relaxed text-gray-300 md:text-xl">
              {produto.texto}
            </p>
          </section>
          <div className="mt-12">
            <AdBanner />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}