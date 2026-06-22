import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import { supabase } from "../lib/supabase.js";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function fazerLogin(e) {
    e.preventDefault();
    setCarregando(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    });

    if (error) {
      toast.error("Email ou senha inválidos.");
      setCarregando(false);
      return;
    }

    toast.success("Login realizado com sucesso!");
    navigate("/");
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#070b14] px-4 pt-44 pb-20 text-white md:px-6 md:pt-36">
        <section className="mx-auto flex min-h-[65vh] max-w-7xl items-center justify-center">
          <div className="w-full max-w-xl rounded-[2.5rem] border border-blue-500/60 bg-[#0b1020]/80 p-8 shadow-[0_0_35px_rgba(59,130,246,0.18)] md:p-12">
            <h1 className="text-center text-4xl font-light text-blue-100 md:text-5xl">
              Entrar
            </h1>

            <div className="mx-auto my-6 h-1 w-28 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

            <p className="mb-8 text-center text-gray-400">
              Entre para comentar nos artigos e acessar seu perfil.
            </p>

            <form onSubmit={fazerLogin} className="space-y-6">
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
                required
              />

              <button
                disabled={carregando}
                className="w-full rounded-2xl border border-blue-500/50 bg-blue-500/10 px-8 py-3 text-blue-100 transition hover:bg-blue-500/20"
              >
                {carregando ? "Entrando..." : "Entrar"}
              </button>
            </form>

            <p className="mt-8 text-center text-gray-400">
              Ainda não tem conta?{" "}
              <Link
                to="/registro"
                className="text-blue-300 hover:text-purple-300"
              >
                Criar conta
              </Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}