import { useEffect, useState } from "react";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import ArtigoCard from "../Components/ArtigoCard.jsx";
import AdBanner from "../Components/AdBanner.jsx";
import { supabase } from "../lib/supabase.js";

export default function Opinioes() {
  const [artigos, setArtigos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarArtigos() {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("publicado", true)
        .order("created_at", { ascending: false });

      if (error) {
        console.log(error);
      } else {
        setArtigos(data);
      }

      setCarregando(false);
    }

    carregarArtigos();
  }, []);

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

          {carregando ? (
            <p className="text-center text-blue-100">Carregando artigos...</p>
          ) : (
            <>
              <Categoria titulo="Política" artigos={politica} />

              <div className="mb-20">
                <AdBanner />
              </div>

              <Categoria titulo="Tecnologia" artigos={tecnologia} />

              <div className="mb-20">
                <AdBanner />
              </div>

              <Categoria titulo="Geek" artigos={geek} />
            </>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

function Categoria({ titulo, artigos }) {
  return (
    <section className="mb-20">
      <div className="mb-10 inline-block">
        <h2 className="mb-2 text-3xl font-light text-blue-100 md:text-4xl">
          {titulo}
        </h2>

        <div className="h-1 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
      </div>

      {artigos.length === 0 ? (
        <p className="text-gray-400">
          Em breve, artigos dessa categoria aparecerão aqui.
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {artigos.map((artigo) => (
            <ArtigoCard key={artigo.id} artigo={artigo} />
          ))}
        </div>
      )}
    </section>
  );
}