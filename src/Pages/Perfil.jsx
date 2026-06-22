import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import { supabase } from "../lib/supabase.js";


const perfilIcone = "https://cdn-icons-png.flaticon.com/128/3963/3963065.png";

export default function Perfil() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState(null);
  const [perfil, setPerfil] = useState(null);
  const [comentarios, setComentarios] = useState([]);

  const [nome, setNome] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [avatar, setAvatar] = useState(null);
  const [preview, setPreview] = useState(perfilIcone);

  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    carregarPerfil();
  }, []);

  async function carregarPerfil() {
    const { data } = await supabase.auth.getUser();

    if (!data.user) {
      navigate("/login");
      return;
    }

    setUsuario(data.user);

    const { data: perfilData, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", data.user.id)
      .single();

    if (error) {
      console.log(error);
    }

    const { data: comentariosData, error: comentariosError } = await supabase
      .from("comments")
      .select("*")
      .eq("user_id", data.user.id)
      .order("created_at", { ascending: false });

    if (comentariosError) {
      console.log(comentariosError);
    }

    setPerfil(perfilData);
    setNome(perfilData?.nome || "");
    setPreview(perfilData?.avatar_url || perfilIcone);
    setComentarios(comentariosData || []);
    setCarregando(false);
  }

  function selecionarAvatar(e) {
    const arquivo = e.target.files[0];

    if (!arquivo) return;

    setAvatar(arquivo);
    setPreview(URL.createObjectURL(arquivo));
  }

  async function salvarPerfil(e) {
    e.preventDefault();

    setMensagem("");
    setSalvando(true);

    let avatarUrl = perfil?.avatar_url || null;

    if (avatar) {
      const extensao = avatar.name.split(".").pop();
      const caminhoArquivo = `${usuario.id}/avatar.${extensao}`;

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(caminhoArquivo, avatar, {
          upsert: true,
        });

      if (uploadError) {
        console.log(uploadError);
        setMensagem("Erro ao enviar imagem de perfil.");
        setSalvando(false);
        return;
      }

      const { data: urlData } = supabase.storage
        .from("avatars")
        .getPublicUrl(caminhoArquivo);

      avatarUrl = urlData.publicUrl;
    }

    const { error } = await supabase
      .from("profiles")
      .update({
        nome,
        avatar_url: avatarUrl,
      })
      .eq("id", usuario.id);

    if (error) {
      console.log(error);
      setMensagem("Erro ao atualizar perfil.");
      setSalvando(false);
      return;
    }

    setMensagem("Perfil atualizado com sucesso!");
    setSalvando(false);
    carregarPerfil();
  }

  async function trocarSenha(e) {
    e.preventDefault();

    setMensagem("");

    if (novaSenha.length < 6) {
      setMensagem("A senha precisa ter pelo menos 6 caracteres.");
      return;
    }

    if (novaSenha !== confirmarSenha) {
      setMensagem("As senhas não coincidem.");
      return;
    }

    const { error } = await supabase.auth.updateUser({
      password: novaSenha,
    });

    if (error) {
      console.log(error);
      setMensagem("Erro ao alterar senha.");
      return;
    }

    setNovaSenha("");
    setConfirmarSenha("");
    setMensagem("Senha alterada com sucesso!");
  }

  async function apagarConta() {
    const confirmar = window.confirm(
      "Tem certeza que deseja apagar seu perfil? Essa ação removerá seus dados públicos do perfil."
    );

    if (!confirmar) return;

    const { error } = await supabase
      .from("profiles")
      .delete()
      .eq("id", usuario.id);

    if (error) {
      console.log(error);
      setMensagem("Erro ao apagar perfil.");
      return;
    }

    await supabase.auth.signOut();
    navigate("/");
  }

  async function sair() {
    await supabase.auth.signOut();
    navigate("/");
  }

  function formatarData(data) {
    return new Date(data).toLocaleString("pt-BR", {
      dateStyle: "short",
      timeStyle: "short",
    });
  }

  if (carregando) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#070b14] text-white">
        <p className="text-blue-100">Carregando perfil...</p>
      </main>
    );
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#070b14] px-4 pt-44 pb-20 text-white md:px-6 md:pt-36">
        <section className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-light text-blue-100 md:text-6xl">
              Meu Perfil
            </h1>

            <div className="mx-auto mt-4 h-1 w-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

            <p className="mt-6 text-gray-400">
              Gerencie suas informações, foto de perfil, senha e comentários.
            </p>
          </div>

          {mensagem && (
            <div className="mb-8 rounded-2xl border border-blue-500/40 bg-blue-500/10 p-4 text-center text-blue-100">
              {mensagem}
            </div>
          )}

          <div className="grid gap-8 lg:grid-cols-2">
            <form
              onSubmit={salvarPerfil}
              className="rounded-[2.5rem] border border-blue-500/60 bg-[#0b1020]/80 p-8 shadow-[0_0_35px_rgba(59,130,246,0.18)]"
            >
              <h2 className="mb-6 text-3xl font-light text-blue-100">
                Dados do Perfil
              </h2>

              <div className="flex flex-col items-center text-center">
                <img
                  src={preview}
                  alt="Perfil"
                  className="h-28 w-28 rounded-full border border-blue-500/50 object-cover p-1"
                />

                <label className="mt-5 cursor-pointer rounded-2xl border border-blue-500/50 bg-blue-500/10 px-6 py-3 text-blue-100 transition hover:bg-blue-500/20">
                  Trocar foto
                  <input
                    type="file"
                    accept="image/*"
                    onChange={selecionarAvatar}
                    className="hidden"
                  />
                </label>
              </div>

              <div className="mt-8 space-y-5">
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="input-admin"
                  required
                />

                <input
                  type="email"
                  value={usuario?.email || ""}
                  disabled
                  className="input-admin cursor-not-allowed opacity-60"
                />

                <button
                  disabled={salvando}
                  className="w-full rounded-2xl border border-blue-500/50 bg-blue-500/10 px-8 py-3 text-blue-100 transition hover:bg-blue-500/20"
                >
                  {salvando ? "Salvando..." : "Salvar alterações"}
                </button>
              </div>
            </form>

            <div className="space-y-8">
              <form
                onSubmit={trocarSenha}
                className="rounded-[2.5rem] border border-purple-500/60 bg-[#0b1020]/80 p-8 shadow-[0_0_35px_rgba(168,85,247,0.18)]"
              >
                <h2 className="mb-6 text-3xl font-light text-blue-100">
                  Alterar Senha
                </h2>

                <div className="space-y-5">
                  <input
                    type="password"
                    placeholder="Nova senha"
                    value={novaSenha}
                    onChange={(e) => setNovaSenha(e.target.value)}
                    className="input-admin"
                  />

                  <input
                    type="password"
                    placeholder="Confirmar nova senha"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                    className="input-admin"
                  />

                  <button className="w-full rounded-2xl border border-purple-500/50 bg-purple-500/10 px-8 py-3 text-blue-100 transition hover:bg-purple-500/20">
                    Alterar senha
                  </button>
                </div>
              </form>

              <div className="rounded-[2.5rem] border border-red-500/50 bg-[#0b1020]/80 p-8 shadow-[0_0_35px_rgba(239,68,68,0.12)]">
                <h2 className="mb-4 text-3xl font-light text-red-300">
                  Zona de perigo
                </h2>

                <p className="mb-6 text-gray-400">
                  Você pode sair da conta ou remover seu perfil público do site.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <button
                    onClick={sair}
                    className="w-full rounded-2xl border border-blue-500/50 px-6 py-3 text-blue-100 transition hover:bg-blue-500/10"
                  >
                    Sair da conta
                  </button>

                  <button
                    onClick={apagarConta}
                    className="w-full rounded-2xl border border-red-500/50 px-6 py-3 text-red-300 transition hover:bg-red-500/10"
                  >
                    Apagar perfil
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-[2.5rem] border border-blue-500/50 bg-[#0b1020]/80 p-8 shadow-[0_0_35px_rgba(59,130,246,0.14)]">
            <div className="mb-6 inline-block">
              <h2 className="text-3xl font-light text-blue-100">
                Meus comentários
              </h2>

              <div className="mt-3 h-1 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            </div>

            {comentarios.length === 0 ? (
              <p className="text-gray-400">
                Você ainda não fez comentários.
              </p>
            ) : (
              <div className="space-y-4">
                {comentarios.map((comentario) => (
                  <div
                    key={comentario.id}
                    className="rounded-2xl border border-blue-500/30 bg-[#070b14]/70 p-5"
                  >
                    <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-sm uppercase tracking-[0.2em] text-blue-300">
                        {comentario.target_type === "article"
                          ? "Artigo"
                          : "Produto"}
                      </span>

                      <span className="text-sm text-gray-500">
                        {formatarData(comentario.created_at)}
                      </span>
                    </div>

                    <p className="whitespace-pre-line text-gray-300">
                      {comentario.content}
                    </p>

                    <Link
                      to={
                        comentario.target_type === "article"
                          ? `/opinioes/${comentario.target_id}`
                          : `/recomendacoes/${comentario.target_id}`
                      }
                      className="mt-4 inline-block text-blue-300 hover:text-purple-300"
                    >
                      Ir para publicação →
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}