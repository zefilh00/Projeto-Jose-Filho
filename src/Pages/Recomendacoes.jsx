import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import ProdutoCard from "../Components/ProdutoCard.jsx";
import { produtos } from "../data/produtos.js";
import AdBanner from "../Components/AdBanner.jsx";

export default function Recomendacoes() {
  const notebooks = produtos.filter(
    (produto) => produto.categoria === "notebooks"
  );

  const perifericos = produtos.filter(
    (produto) => produto.categoria === "perifericos"
  );

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#070b14] px-4 pt-40 pb-20 text-white md:px-6 md:pt-32 md:pb-24">
        <section className="mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <h1 className="text-4xl font-light tracking-wide text-blue-100 md:text-6xl">
              Recomendações
            </h1>

            <div className="mx-auto my-6 h-1 w-28 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
              Produtos, periféricos, hardwares e tecnologias que recomendo com
              base em custo-benefício, utilidade e experiência de uso.
            </p>
          </div>

          <div className="mb-20">
            <AdBanner />
          </div>

          <section className="mb-20">
            <div className="mb-10 inline-block">
              <h2 className="mb-2 text-left text-3xl font-light text-blue-100 md:text-4xl">
                Notebooks
              </h2>

              <div className="h-1 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {notebooks.map((produto) => (
                <ProdutoCard key={produto.id} produto={produto} />
              ))}
            </div>
          </section>

          <div className="mb-20">
            <AdBanner />
          </div>

          <section>
            <div className="mb-10 inline-block">
              <h2 className="mb-2 text-left text-3xl font-light text-blue-100 md:text-4xl">
                Periféricos
              </h2>

              <div className="h-1 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {perifericos.map((produto) => (
                <ProdutoCard key={produto.id} produto={produto} />
              ))}
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}