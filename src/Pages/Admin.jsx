import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import { supabase } from "../lib/supabase.js";

const artigoInicial = {
  titulo: "",
  categoria: "politica",
  imagem: "",
  resumo: "",
  conteudo: "",
};

const produtoInicial = {
  nome: "",
  categoria: "perifericos",
  imagem: "",
  descricao: "",
  texto: "",
  link_produto: "",
};

export default function Admin() {
  const navigate = useNavigate();

  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const [artigos, setArtigos] = useState([]);
  const [produtos, setProdutos] = useState([]);

  const [artigo, setArtigo] = useState(artigoInicial);
  const [produto, setProduto] = useState(produtoInicial);

  const [artigoEditandoId, setArtigoEditandoId] = useState(null);
  const [produtoEditandoId, setProdutoEditandoId] = useState(null);

  useEffect(() => {
    verificarAdmin();
  }, []);

  async function verificarAdmin() {
    const { data: sessionData } = await supabase.auth.getSession();

    if (!sessionData.session) {
      navigate("/admin-login");
      return;
    }

    const userId = sessionData.session.user.id;

    const { data: profile, error } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", userId)
      .single();

    if (error || profile?.role !== "admin") {
      navigate("/");
      return;
    }

    await carregarDados();
    setCarregando(false);
  }

  async function carregarDados() {
    const { data: artigosData, error: artigosError } = await supabase
      .from("articles")
      .select("*")
      .order("created_at", { ascending: false });

    const { data: produtosData, error: produtosError } = await supabase
      .from("products")
      .select("*")
      .order("created_at", { ascending: false });

    if (artigosError) console.log(artigosError);
    if (produtosError) console.log(produtosError);

    setArtigos(artigosData || []);
    setProdutos(produtosData || []);
  }

  async function sair() {
    await supabase.auth.signOut();
    navigate("/");
  }

  async function salvarArtigo(e) {
    e.preventDefault();
    setMensagem("");
    setSalvando(true);

    const dadosArtigo = {
      titulo: artigo.titulo,
      categoria: artigo.categoria,
      imagem: artigo.imagem,
      resumo: artigo.resumo,
      conteudo: artigo.conteudo,
      autor: "José Filho",
      publicado: true,
    };

    const { error } = artigoEditandoId
      ? await supabase
          .from("articles")
          .update(dadosArtigo)
          .eq("id", artigoEditandoId)
      : await supabase.from("articles").insert(dadosArtigo);

    if (error) {
      console.log(error);
      setMensagem("Erro ao salvar artigo.");
      setSalvando(false);
      return;
    }

    setMensagem(
      artigoEditandoId
        ? "Artigo atualizado com sucesso!"
        : "Artigo criado com sucesso!",
    );

    setArtigo(artigoInicial);
    setArtigoEditandoId(null);
    await carregarDados();
    setSalvando(false);
  }

  async function salvarProduto(e) {
    e.preventDefault();
    setMensagem("");
    setSalvando(true);

    const dadosProduto = {
      nome: produto.nome,
      categoria: produto.categoria,
      imagem: produto.imagem,
      descricao: produto.descricao,
      texto: produto.texto,
      link_produto: produto.link_produto,
      publicado: true,
    };

    const { error } = produtoEditandoId
      ? await supabase
          .from("products")
          .update(dadosProduto)
          .eq("id", produtoEditandoId)
      : await supabase.from("products").insert(dadosProduto);

    if (error) {
      console.log(error);
      setMensagem("Erro ao salvar produto.");
      setSalvando(false);
      return;
    }

    setMensagem(
      produtoEditandoId
        ? "Produto atualizado com sucesso!"
        : "Produto criado com sucesso!",
    );

    setProduto(produtoInicial);
    setProdutoEditandoId(null);
    await carregarDados();
    setSalvando(false);
  }

  function editarArtigo(item) {
    setArtigo({
      titulo: item.titulo || "",
      categoria: item.categoria || "politica",
      imagem: item.imagem || "",
      resumo: item.resumo || "",
      conteudo: item.conteudo || "",
    });

    setArtigoEditandoId(item.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function editarProduto(item) {
    setProduto({
      nome: item.nome || "",
      categoria: item.categoria || "perifericos",
      imagem: item.imagem || "",
      descricao: item.descricao || "",
      texto: item.texto || "",
      link_produto: item.link_produto || "",
    });

    setProdutoEditandoId(item.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function excluirArtigo(id) {
    const confirmar = window.confirm(
      "Tem certeza que deseja excluir este artigo?",
    );

    if (!confirmar) return;

    const { error } = await supabase.from("articles").delete().eq("id", id);

    if (error) {
      console.log(error);
      setMensagem("Erro ao excluir artigo.");
      return;
    }

    setMensagem("Artigo excluído com sucesso!");
    await carregarDados();
  }

  async function excluirProduto(id) {
    const confirmar = window.confirm(
      "Tem certeza que deseja excluir este produto?",
    );

    if (!confirmar) return;

    const { error } = await supabase.from("products").delete().eq("id", id);

    if (error) {
      console.log(error);
      setMensagem("Erro ao excluir produto.");
      return;
    }

    setMensagem("Produto excluído com sucesso!");
    await carregarDados();
  }

  function cancelarEdicaoArtigo() {
    setArtigo(artigoInicial);
    setArtigoEditandoId(null);
  }

  function cancelarEdicaoProduto() {
    setProduto(produtoInicial);
    setProdutoEditandoId(null);
  }

  if (carregando) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#070b14] text-white">
        <p className="text-blue-100">Verificando acesso...</p>
      </main>
    );
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#070b14] px-4 pt-40 pb-20 text-white md:px-6 md:pt-32 md:pb-24">
        <section className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="inline-block">
              <h1 className="text-4xl font-light text-blue-100 md:text-6xl">
                Painel Admin
              </h1>

              <div className="mt-3 h-1 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            </div>

            <button
              onClick={sair}
              className="w-fit rounded-2xl border border-red-500/50 px-6 py-3 text-red-300 transition hover:bg-red-500/10"
            >
              Sair
            </button>
          </div>

          {mensagem && (
            <div className="mb-10 rounded-2xl border border-blue-500/40 bg-blue-500/10 p-4 text-blue-100">
              {mensagem}
            </div>
          )}

          <div className="grid gap-10 lg:grid-cols-2">
            <form
              onSubmit={salvarArtigo}
              className="rounded-[2.5rem] border border-blue-500/50 bg-[#0b1020]/80 p-6 shadow-[0_0_30px_rgba(59,130,246,0.14)] md:p-8"
            >
              <h2 className="mb-6 text-3xl font-light text-blue-100">
                {artigoEditandoId ? "Editar Artigo" : "Novo Artigo"}
              </h2>

              <div className="space-y-5">
                <input
                  placeholder="Título"
                  value={artigo.titulo}
                  onChange={(e) =>
                    setArtigo({ ...artigo, titulo: e.target.value })
                  }
                  className="input-admin"
                  required
                />

                <select
                  value={artigo.categoria}
                  onChange={(e) =>
                    setArtigo({ ...artigo, categoria: e.target.value })
                  }
                  className="input-admin"
                >
                  <option value="politica">Política</option>
                  <option value="tecnologia">Tecnologia</option>
                  <option value="geek">Geek</option>
                </select>

                <input
                  placeholder="URL da imagem"
                  value={artigo.imagem}
                  onChange={(e) =>
                    setArtigo({ ...artigo, imagem: e.target.value })
                  }
                  className="input-admin"
                />

                <textarea
                  placeholder="Resumo"
                  value={artigo.resumo}
                  onChange={(e) =>
                    setArtigo({ ...artigo, resumo: e.target.value })
                  }
                  className="input-admin min-h-[120px]"
                  required
                />

                <textarea
                  placeholder="Texto completo do artigo"
                  value={artigo.conteudo}
                  onChange={(e) =>
                    setArtigo({ ...artigo, conteudo: e.target.value })
                  }
                  className="input-admin min-h-[280px]"
                  required
                />

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    disabled={salvando}
                    className="w-full rounded-2xl border border-blue-500/50 bg-blue-500/10 px-6 py-3 text-blue-100 transition hover:bg-blue-500/20"
                  >
                    {salvando
                      ? "Salvando..."
                      : artigoEditandoId
                        ? "Atualizar artigo"
                        : "Publicar artigo"}
                  </button>

                  {artigoEditandoId && (
                    <button
                      type="button"
                      onClick={cancelarEdicaoArtigo}
                      className="w-full rounded-2xl border border-gray-500/50 px-6 py-3 text-gray-300 transition hover:bg-gray-500/10"
                    >
                      Cancelar
                    </button>
                  )}
                </div>
              </div>
            </form>

            <form
              onSubmit={salvarProduto}
              className="rounded-[2.5rem] border border-purple-500/50 bg-[#0b1020]/80 p-6 shadow-[0_0_30px_rgba(168,85,247,0.14)] md:p-8"
            >
              <h2 className="mb-6 text-3xl font-light text-blue-100">
                {produtoEditandoId ? "Editar Produto" : "Novo Produto"}
              </h2>

              <div className="space-y-5">
                <input
                  placeholder="Nome"
                  value={produto.nome}
                  onChange={(e) =>
                    setProduto({ ...produto, nome: e.target.value })
                  }
                  className="input-admin"
                  required
                />

                <select
                  value={produto.categoria}
                  onChange={(e) =>
                    setProduto({ ...produto, categoria: e.target.value })
                  }
                  className="input-admin"
                >
                  <option value="notebooks">Notebooks</option>
                  <option value="perifericos">Periféricos</option>
                </select>

                <input
                  placeholder="URL da imagem"
                  value={produto.imagem}
                  onChange={(e) =>
                    setProduto({ ...produto, imagem: e.target.value })
                  }
                  className="input-admin"
                />

                <input
                  placeholder="Link do produto"
                  value={produto.link_produto}
                  onChange={(e) =>
                    setProduto({
                      ...produto,
                      link_produto: e.target.value,
                    })
                  }
                  className="input-admin"
                />

                <textarea
                  placeholder="Descrição curta"
                  value={produto.descricao}
                  onChange={(e) =>
                    setProduto({ ...produto, descricao: e.target.value })
                  }
                  className="input-admin min-h-[120px]"
                  required
                />

                <textarea
                  placeholder="Texto completo da recomendação"
                  value={produto.texto}
                  onChange={(e) =>
                    setProduto({ ...produto, texto: e.target.value })
                  }
                  className="input-admin min-h-[280px]"
                />

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    disabled={salvando}
                    className="w-full rounded-2xl border border-purple-500/50 bg-purple-500/10 px-6 py-3 text-blue-100 transition hover:bg-purple-500/20"
                  >
                    {salvando
                      ? "Salvando..."
                      : produtoEditandoId
                        ? "Atualizar produto"
                        : "Publicar produto"}
                  </button>

                  {produtoEditandoId && (
                    <button
                      type="button"
                      onClick={cancelarEdicaoProduto}
                      className="w-full rounded-2xl border border-gray-500/50 px-6 py-3 text-gray-300 transition hover:bg-gray-500/10"
                    >
                      Cancelar
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>

          <section className="mt-16">
            <div className="mb-8 inline-block">
              <h2 className="text-3xl font-light text-blue-100 md:text-4xl">
                Artigos publicados
              </h2>
              <div className="mt-3 h-1 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            </div>

            <div className="space-y-4">
              {artigos.length === 0 ? (
                <p className="text-gray-400">Nenhum artigo publicado ainda.</p>
              ) : (
                artigos.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col justify-between gap-4 rounded-2xl border border-blue-500/30 bg-[#0b1020]/70 p-5 md:flex-row md:items-center"
                  >
                    <div>
                      <p className="text-xl text-blue-100">{item.titulo}</p>
                      <p className="mt-1 text-sm text-gray-400">
                        {item.categoria} • ID {item.id}
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => editarArtigo(item)}
                        className="rounded-xl border border-blue-500/40 px-4 py-2 text-blue-200 transition hover:bg-blue-500/10"
                      >
                        Editar
                      </button>

                      <button
                        onClick={() => excluirArtigo(item.id)}
                        className="rounded-xl border border-red-500/40 px-4 py-2 text-red-300 transition hover:bg-red-500/10"
                      >
                        Excluir
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>

          <section className="mt-16">
            <div className="mb-8 inline-block">
              <h2 className="text-3xl font-light text-blue-100 md:text-4xl">
                Produtos publicados
              </h2>
              <div className="mt-3 h-1 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            </div>

            <div className="space-y-4">
              {produtos.length === 0 ? (
                <p className="text-gray-400">Nenhum produto publicado ainda.</p>
              ) : (
                produtos.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col justify-between gap-4 rounded-2xl border border-purple-500/30 bg-[#0b1020]/70 p-5 md:flex-row md:items-center"
                  >
                    <div>
                      <p className="text-xl text-blue-100">{item.nome}</p>
                      <p className="mt-1 text-sm text-gray-400">
                        {item.categoria} • ID {item.id}
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => editarProduto(item)}
                        className="rounded-xl border border-blue-500/40 px-4 py-2 text-blue-200 transition hover:bg-blue-500/10"
                      >
                        Editar
                      </button>

                      <button
                        onClick={() => excluirProduto(item.id)}
                        className="rounded-xl border border-red-500/40 px-4 py-2 text-red-300 transition hover:bg-red-500/10"
                      >
                        Excluir
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}
