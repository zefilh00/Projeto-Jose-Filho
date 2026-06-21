import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import AdBanner from "../Components/AdBanner.jsx";
import { supabase } from "../lib/supabase.js";

export default function ArtigoDetalhe() {
  const { id } = useParams();

  const [artigo, setArtigo] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarArtigo() {
      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("id", Number(id))
        .eq("publicado", true)
        .single();

      if (error) {
        console.log(error);
      } else {
        setArtigo(data);
      }

      setCarregando(false);
    }

    carregarArtigo();
  }, [id]);

  if (carregando) {
    return (
      <>
        <Header />

        <main className="flex min-h-screen items-center justify-center bg-[#070b14] text-white">
          <p className="text-blue-100">Carregando artigo...</p>
        </main>

        <Footer />
      </>
    );
  }

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

  const dataFormatada = new Date(artigo.created_at).toLocaleDateString(
    "pt-BR"
  );

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
            {artigo.imagem && (
              <div className="bg-[#070b14] p-4">
                <img
                  src={artigo.imagem}
                  alt={artigo.titulo}
                  className="mx-auto max-h-[600px] w-full object-contain"
                />
              </div>
            )}

            <div className="p-6 md:p-10">
              <span className="mb-5 inline-block rounded-full border border-blue-500/40 px-4 py-1 text-sm uppercase tracking-[0.25em] text-blue-200">
                {artigo.categoria}
              </span>

              <h1 className="text-4xl font-light leading-tight tracking-wide text-blue-100 md:text-6xl">
                {artigo.titulo}
              </h1>

              <div className="my-6 h-1 w-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

              <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
                Por {artigo.autor || "José Filho"} • {dataFormatada}
              </p>
            </div>
          </div>

          <section className="mt-12 rounded-[2.5rem] border border-blue-500/40 bg-[#0b1020]/70 p-6 shadow-[0_0_25px_rgba(59,130,246,0.12)] md:p-10">
            <div className="space-y-6 text-base leading-relaxed text-gray-300 md:text-xl">
              {artigo.conteudo
                ?.trim()
                .split("\n\n")
                .map((paragrafo, index) => (
                  <p key={index}>{paragrafo.trim()}</p>
                ))}
            </div>
          </section>

          <div className="mt-12">
            <AdBanner />
          </div>

          <div className="mt-12 rounded-[2rem] border border-purple-500/40 bg-purple-950/20 p-6 text-gray-300">
            <p>
              As opiniões expressas neste artigo são de responsabilidade
              exclusiva do autor.
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}