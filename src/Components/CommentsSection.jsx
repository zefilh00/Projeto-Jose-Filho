import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { supabase } from "../lib/supabase.js";

const perfilIcone = "https://cdn-icons-png.flaticon.com/128/3963/3963065.png";

export default function CommentsSection({ targetType, targetId }) {
  const [usuario, setUsuario] = useState(null);
  const [comentarios, setComentarios] = useState([]);
  const [perfis, setPerfis] = useState({});
  const [votos, setVotos] = useState([]);

  const [texto, setTexto] = useState("");
  const [respostaAberta, setRespostaAberta] = useState(null);
  const [textoResposta, setTextoResposta] = useState("");
  const [editandoId, setEditandoId] = useState(null);
  const [textoEditado, setTextoEditado] = useState("");

  useEffect(() => {
    carregarUsuario();
    carregarComentarios();
  }, [targetType, targetId]);

  async function carregarUsuario() {
    const { data } = await supabase.auth.getUser();
    setUsuario(data.user || null);
  }

  async function carregarComentarios() {
    const { data: commentsData, error } = await supabase
      .from("comments")
      .select("*")
      .eq("target_type", targetType)
      .eq("target_id", Number(targetId))
      .order("created_at", { ascending: true });

    if (error) {
      toast.error("Erro ao carregar comentários.");
      return;
    }

    const listaComentarios = commentsData || [];
    setComentarios(listaComentarios);

    const idsUsuarios = [
      ...new Set(listaComentarios.map((comentario) => comentario.user_id)),
    ];

    if (idsUsuarios.length > 0) {
      const { data: perfisData } = await supabase
        .from("profiles")
        .select("id, nome, avatar_url")
        .in("id", idsUsuarios);

      const mapaPerfis = {};

      (perfisData || []).forEach((perfil) => {
        mapaPerfis[perfil.id] = perfil;
      });

      setPerfis(mapaPerfis);
    } else {
      setPerfis({});
    }

    const idsComentarios = listaComentarios.map((comentario) => comentario.id);

    if (idsComentarios.length > 0) {
      const { data: votosData } = await supabase
        .from("comment_votes")
        .select("*")
        .in("comment_id", idsComentarios);

      setVotos(votosData || []);
    } else {
      setVotos([]);
    }
  }

  async function comentar(e) {
    e.preventDefault();

    if (!usuario || !texto.trim()) return;

    const { error } = await supabase.from("comments").insert({
      target_type: targetType,
      target_id: Number(targetId),
      user_id: usuario.id,
      content: texto.trim(),
    });

    if (error) {
      toast.error("Erro ao publicar comentário.");
      return;
    }

    setTexto("");
    toast.success("Comentário publicado!");
    await carregarComentarios();
  }

  async function responder(parentId) {
    if (!usuario || !textoResposta.trim()) return;

    const { error } = await supabase.from("comments").insert({
      target_type: targetType,
      target_id: Number(targetId),
      parent_id: parentId,
      user_id: usuario.id,
      content: textoResposta.trim(),
    });

    if (error) {
      toast.error("Erro ao responder comentário.");
      return;
    }

    setTextoResposta("");
    setRespostaAberta(null);
    toast.success("Resposta enviada!");
    await carregarComentarios();
  }

  async function salvarEdicao(id) {
    if (!textoEditado.trim()) return;

    const { error } = await supabase
      .from("comments")
      .update({
        content: textoEditado.trim(),
        updated_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (error) {
      toast.error("Erro ao editar comentário.");
      return;
    }

    setEditandoId(null);
    setTextoEditado("");
    toast.success("Comentário atualizado!");
    await carregarComentarios();
  }

  async function apagarComentario(id) {
    const confirmar = window.confirm("Deseja apagar este comentário?");
    if (!confirmar) return;

    const { error } = await supabase.from("comments").delete().eq("id", id);

    if (error) {
      toast.error("Erro ao apagar comentário.");
      return;
    }

    toast.success("Comentário apagado!");
    await carregarComentarios();
  }

  async function votar(commentId, voteType) {
    if (!usuario) {
      toast.error("Você precisa entrar para votar.");
      return;
    }

    const votoAtual = votos.find(
      (voto) => voto.comment_id === commentId && voto.user_id === usuario.id
    );

    if (votoAtual?.vote_type === voteType) {
      await supabase.from("comment_votes").delete().eq("id", votoAtual.id);
    } else if (votoAtual) {
      await supabase
        .from("comment_votes")
        .update({ vote_type: voteType })
        .eq("id", votoAtual.id);
    } else {
      await supabase.from("comment_votes").insert({
        comment_id: commentId,
        user_id: usuario.id,
        vote_type: voteType,
      });
    }

    await carregarComentarios();
  }

  function contarVotos(commentId, tipo) {
    return votos.filter(
      (voto) => voto.comment_id === commentId && voto.vote_type === tipo
    ).length;
  }

  function formatarData(data) {
    return new Date(data).toLocaleString("pt-BR", {
      dateStyle: "short",
      timeStyle: "short",
    });
  }

  const comentariosPrincipais = comentarios.filter(
    (comentario) => !comentario.parent_id
  );

  function respostasDe(id) {
    return comentarios.filter((comentario) => comentario.parent_id === id);
  }

  return (
    <section className="mt-12 overflow-hidden rounded-[2rem] border border-blue-500/40 bg-[#0b1020]/70 p-4 shadow-[0_0_25px_rgba(59,130,246,0.12)] sm:p-6 md:rounded-[2.5rem] md:p-10">
      <div className="mb-8 inline-block">
        <h2 className="text-3xl font-light text-blue-100 md:text-4xl">
          Comentários
        </h2>

        <div className="mt-3 h-1 w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
      </div>

      {usuario ? (
        <form onSubmit={comentar} className="mb-10 space-y-4">
          <textarea
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Escreva seu comentário..."
            className="input-admin min-h-[130px]"
          />

          <button className="rounded-2xl border border-blue-500/50 bg-blue-500/10 px-6 py-3 text-blue-100 transition hover:bg-blue-500/20">
            Comentar
          </button>
        </form>
      ) : (
        <p className="mb-10 rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4 text-gray-300">
          Você precisa{" "}
          <Link to="/login" className="text-blue-300 hover:text-purple-300">
            entrar
          </Link>{" "}
          para comentar.
        </p>
      )}

      <div className="space-y-6">
        {comentariosPrincipais.length === 0 ? (
          <p className="text-gray-400">Nenhum comentário ainda.</p>
        ) : (
          comentariosPrincipais.map((comentario) => (
            <CommentItem
              key={comentario.id}
              comentario={comentario}
              perfil={perfis[comentario.user_id]}
              respostas={respostasDe(comentario.id)}
              perfis={perfis}
              usuario={usuario}
              editandoId={editandoId}
              setEditandoId={setEditandoId}
              textoEditado={textoEditado}
              setTextoEditado={setTextoEditado}
              salvarEdicao={salvarEdicao}
              apagarComentario={apagarComentario}
              votar={votar}
              contarVotos={contarVotos}
              formatarData={formatarData}
              respostaAberta={respostaAberta}
              setRespostaAberta={setRespostaAberta}
              textoResposta={textoResposta}
              setTextoResposta={setTextoResposta}
              responder={responder}
            />
          ))
        )}
      </div>
    </section>
  );
}

function CommentItem({
  comentario,
  perfil,
  respostas,
  perfis,
  usuario,
  editandoId,
  setEditandoId,
  textoEditado,
  setTextoEditado,
  salvarEdicao,
  apagarComentario,
  votar,
  contarVotos,
  formatarData,
  respostaAberta,
  setRespostaAberta,
  textoResposta,
  setTextoResposta,
  responder,
}) {
  const dono = usuario?.id === comentario.user_id;

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-blue-500/25 bg-[#070b14]/70 p-4 sm:p-5">
      <div className="flex w-full min-w-0 flex-col gap-4 sm:flex-row">
        <img
          src={perfil?.avatar_url || perfilIcone}
          alt="Perfil"
          className="h-14 w-14 shrink-0 rounded-full border border-blue-500/40 object-cover"
        />

        <div className="min-w-0 flex-1">
          <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="max-w-full break-words text-xl text-blue-100">
              {perfil?.nome || "Usuário"}
            </h3>

            <span className="shrink-0 text-sm text-gray-500">
              {formatarData(comentario.created_at)}
            </span>
          </div>

          {editandoId === comentario.id ? (
            <div className="mt-4 space-y-3">
              <textarea
                value={textoEditado}
                onChange={(e) => setTextoEditado(e.target.value)}
                className="input-admin min-h-[100px]"
              />

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => salvarEdicao(comentario.id)}
                  className="rounded-xl border border-blue-500/40 px-4 py-2 text-blue-200 hover:bg-blue-500/10"
                >
                  Salvar
                </button>

                <button
                  type="button"
                  onClick={() => setEditandoId(null)}
                  className="rounded-xl border border-gray-500/40 px-4 py-2 text-gray-300 hover:bg-gray-500/10"
                >
                  Cancelar
                </button>
              </div>
            </div>
          ) : (
            <p className="mt-4 max-w-full whitespace-pre-wrap break-words text-lg leading-relaxed text-gray-300">
              {comentario.content}
            </p>
          )}

          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
            <button
              type="button"
              onClick={() => votar(comentario.id, "like")}
              className="rounded-xl border border-blue-500/30 px-3 py-1 text-blue-200 hover:bg-blue-500/10"
            >
              👍 {contarVotos(comentario.id, "like")}
            </button>

            <button
              type="button"
              onClick={() => votar(comentario.id, "dislike")}
              className="rounded-xl border border-red-500/30 px-3 py-1 text-red-300 hover:bg-red-500/10"
            >
              👎 {contarVotos(comentario.id, "dislike")}
            </button>

            {usuario && (
              <button
                type="button"
                onClick={() =>
                  setRespostaAberta(
                    respostaAberta === comentario.id ? null : comentario.id
                  )
                }
                className="text-blue-300 hover:text-purple-300"
              >
                Responder
              </button>
            )}

            {dono && (
              <>
                <button
                  type="button"
                  onClick={() => {
                    setEditandoId(comentario.id);
                    setTextoEditado(comentario.content);
                  }}
                  className="text-blue-300 hover:text-purple-300"
                >
                  Editar
                </button>

                <button
                  type="button"
                  onClick={() => apagarComentario(comentario.id)}
                  className="text-red-300 hover:text-red-400"
                >
                  Apagar
                </button>
              </>
            )}
          </div>

          {respostaAberta === comentario.id && (
            <div className="mt-4 space-y-3">
              <textarea
                value={textoResposta}
                onChange={(e) => setTextoResposta(e.target.value)}
                placeholder="Escreva sua resposta..."
                className="input-admin min-h-[100px]"
              />

              <button
                type="button"
                onClick={() => responder(comentario.id)}
                className="rounded-xl border border-blue-500/40 px-4 py-2 text-blue-200 hover:bg-blue-500/10"
              >
                Enviar resposta
              </button>
            </div>
          )}

          {respostas.length > 0 && (
            <div className="mt-6 space-y-4 border-l border-blue-500/30 pl-3 sm:pl-5">
              {respostas.map((resposta) => (
                <CommentItem
                  key={resposta.id}
                  comentario={resposta}
                  perfil={perfis[resposta.user_id]}
                  respostas={[]}
                  perfis={perfis}
                  usuario={usuario}
                  editandoId={editandoId}
                  setEditandoId={setEditandoId}
                  textoEditado={textoEditado}
                  setTextoEditado={setTextoEditado}
                  salvarEdicao={salvarEdicao}
                  apagarComentario={apagarComentario}
                  votar={votar}
                  contarVotos={contarVotos}
                  formatarData={formatarData}
                  respostaAberta={respostaAberta}
                  setRespostaAberta={setRespostaAberta}
                  textoResposta={textoResposta}
                  setTextoResposta={setTextoResposta}
                  responder={responder}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}