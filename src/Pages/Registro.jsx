import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import { supabase } from "../lib/supabase.js";

export default function Registro() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function criarConta(e) {
    e.preventDefault();

    if (carregando) return;

    setCarregando(true);
    toast.dismiss();

    const { data, error } = await supabase.auth.signUp({
      email,
      password: senha,
    });

    if (error) {
      console.log("Erro no cadastro:", error);
      toast.error(error.message || "Erro ao criar conta.");
      setCarregando(false);
      return;
    }

    if (data.user) {
      const { error: profileError } = await supabase.from("profiles").insert({
        id: data.user.id,
        nome,
        email,
        role: "user",
      });

      if (profileError) {
        console.log("Erro ao criar perfil:", profileError);
        toast.error(profileError.message || "Erro ao criar perfil.");
        setCarregando(false);
        return;
      }
    }

    toast.success("Conta criada com sucesso!");
    setCarregando(false);

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#070b14] px-4 pt-44 pb-20 text-white md:px-6 md:pt-36">
        <section className="mx-auto flex min-h-[65vh] max-w-7xl items-center justify-center">
          <div className="w-full max-w-xl rounded-[2.5rem] border border-purple-500/60 bg-[#0b1020]/80 p-8 shadow-[0_0_35px_rgba(168,85,247,0.18)] md:p-12">
            <h1 className="text-center text-4xl font-light text-blue-100 md:text-5xl">
              Criar Conta
            </h1>

            <div className="mx-auto my-6 h-1 w-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

            <p className="mb-8 text-center text-gray-400">
              Crie sua conta para participar dos comentários do site.
            </p>

            <form onSubmit={criarConta} className="space-y-6">
              <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="input-admin"
                required
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-admin"
                required
              />

              <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="input-admin"
                minLength={6}
                required
              />

              <button
                type="submit"
                disabled={carregando}
                className="w-full rounded-2xl border border-purple-500/50 bg-purple-500/10 px-8 py-3 text-blue-100 transition hover:bg-purple-500/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {carregando ? "Criando conta..." : "Registrar"}
              </button>
            </form>

            <p className="mt-8 text-center text-gray-400">
              Já tem conta?{" "}
              <Link
                to="/login"
                className="text-blue-300 hover:text-purple-300"
              >
                Entrar
              </Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}