import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
import { supabase } from "../lib/supabase.js";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function fazerLoginAdmin(e) {
    e.preventDefault();

    setCarregando(true);
    setMensagem("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    });

    if (error) {
      setMensagem("Email ou senha de administrador inválidos.");
      setCarregando(false);
      return;
    }

    navigate("/admin");
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#070b14] px-4 pt-40 pb-20 text-white md:px-6 md:pt-32 md:pb-24">
        <section className="mx-auto flex min-h-[65vh] max-w-7xl items-center justify-center">
          <div className="w-full max-w-xl rounded-[2.5rem] border border-blue-500/60 bg-[#0b1020]/80 p-8 shadow-[0_0_35px_rgba(59,130,246,0.18)] md:p-12">
            <span className="mb-6 block text-center text-sm uppercase tracking-[0.3em] text-blue-300">
              Acesso restrito
            </span>

            <h1 className="text-center text-4xl font-light text-blue-100 md:text-5xl">
              Login Admin
            </h1>

            <div className="mx-auto my-6 h-1 w-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

            <p className="mb-8 text-center text-gray-400">
              Área exclusiva para administração do site.
            </p>

            <form onSubmit={fazerLoginAdmin} className="space-y-6">
              <div>
                <label className="mb-2 block text-blue-100">
                  Email do administrador
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-2xl border border-blue-500/40 bg-[#070b14] px-5 py-3 text-white outline-none transition focus:border-blue-400"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-blue-100">
                  Senha do administrador
                </label>

                <input
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="w-full rounded-2xl border border-blue-500/40 bg-[#070b14] px-5 py-3 text-white outline-none transition focus:border-blue-400"
                  required
                />
              </div>

              {mensagem && (
                <p className="text-center text-red-400">{mensagem}</p>
              )}

              <button
                type="submit"
                disabled={carregando}
                className="w-full rounded-2xl border border-blue-500/50 bg-blue-500/10 px-8 py-3 text-blue-100 transition duration-300 hover:border-blue-400 hover:bg-blue-500/20"
              >
                {carregando ? "Verificando admin..." : "Entrar como admin"}
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}