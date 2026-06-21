import { useEffect, useState } from "react";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import ProdutoCard from "../Components/ProdutoCard.jsx";
import AdBanner from "../Components/AdBanner.jsx";
import { supabase } from "../lib/supabase.js";

export default function Recomendacoes() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarProdutos() {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("publicado", true)
        .order("created_at", { ascending: false });

      if (error) {
        console.log(error);
      } else {
        setProdutos(data || []);
      }

      setCarregando(false);
    }

    carregarProdutos();
  }, []);

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

          {carregando ? (
            <p className="text-center text-blue-100">
              Carregando recomendações...
            </p>
          ) : (
            <>
              <Categoria titulo="Notebooks" produtos={notebooks} />

              <div className="mb-20">
                <AdBanner />
              </div>

              <Categoria titulo="Periféricos" produtos={perifericos} />

              <div className="mb-20">
                <AdBanner />
              </div>
            </>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

function Categoria({ titulo, produtos }) {
  return (
    <section className="mb-20">
      <div className="mb-10 inline-block">
        <h2 className="mb-2 text-left text-3xl font-light text-blue-100 md:text-4xl">
          {titulo}
        </h2>

        <div className="h-1 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
      </div>

      {produtos.length === 0 ? (
        <p className="text-gray-400">
          Em breve, recomendações dessa categoria aparecerão aqui.
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {produtos.map((produto) => (
            <ProdutoCard key={produto.id} produto={produto} />
          ))}
        </div>
      )}
    </section>
  );
}