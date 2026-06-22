import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/Logo.png";
import { supabase } from "../lib/supabase.js";

const perfilIcone = "https://cdn-icons-png.flaticon.com/128/3963/3963065.png";

export default function Header() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    async function carregarUsuario() {
      const { data } = await supabase.auth.getUser();
      setUsuario(data.user);
    }

    carregarUsuario();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUsuario(session?.user || null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-blue-500/30 bg-[#070b14]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:h-24 md:px-8 md:py-0">
        <Link
          to="/"
          className="shrink-0 transition duration-300 hover:scale-105"
        >
          <img src={logo} alt="José Filho" className="h-9 w-auto md:h-14" />
        </Link>

        <nav className="hidden flex-1 justify-center lg:flex">
          <ul className="flex items-center justify-center gap-10 text-xl font-light">
            <li>
              <Link
                to="/"
                className="group relative text-gray-300 transition hover:text-blue-300"
              >
                início
                <span className="absolute -bottom-2 left-0 h-[3px] w-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>

            <li>
              <Link
                to="/opinioes"
                className="group relative text-gray-300 transition hover:text-blue-300"
              >
                opiniões
                <span className="absolute -bottom-2 left-0 h-[3px] w-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>

            <li>
              <Link
                to="/recomendacoes"
                className="group relative text-gray-300 transition hover:text-blue-300"
              >
                recomendações
                <span className="absolute -bottom-2 left-0 h-[3px] w-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>

            <li>
              <HashLink
                smooth
                to="/#sobre"
                className="group relative text-gray-300 transition hover:text-blue-300"
              >
                sobre
                <span className="absolute -bottom-2 left-0 h-[3px] w-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full" />
              </HashLink>
            </li>
          </ul>
        </nav>

        <div className="hidden shrink-0 justify-end lg:flex">
          {usuario ? (
            <Link
              to="/perfil"
              className="flex items-center gap-3 rounded-2xl border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-blue-100 transition hover:border-blue-400 hover:bg-blue-500/20"
            >
              <img src={perfilIcone} alt="Perfil" className="h-8 w-8" />
              <span className="text-sm">Meu perfil</span>
            </Link>
          ) : (
            <div className="flex gap-3">
              <Link
                to="/login"
                className="rounded-xl border border-blue-500/40 px-4 py-2 text-sm text-blue-100 transition hover:bg-blue-500/10"
              >
                Login
              </Link>

              <Link
                to="/registro"
                className="rounded-xl border border-purple-500/40 bg-purple-500/10 px-4 py-2 text-sm text-blue-100 transition hover:bg-purple-500/20"
              >
                Registrar
              </Link>
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          {usuario ? (
            <Link
              to="/perfil"
              className="rounded-xl border border-blue-500/40 bg-blue-500/10 p-2"
            >
              <img src={perfilIcone} alt="Perfil" className="h-7 w-7" />
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-xl border border-blue-500/40 px-3 py-2 text-sm text-blue-100"
              >
                Login
              </Link>

              <Link
                to="/registro"
                className="rounded-xl border border-purple-500/40 bg-purple-500/10 px-3 py-2 text-sm text-blue-100"
              >
                Registrar
              </Link>
            </>
          )}
        </div>
      </div>

      <nav className="border-t border-blue-500/20 px-4 py-3 lg:hidden">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-base font-light">
          <li>
            <Link to="/" className="text-gray-300 transition hover:text-blue-300">
              início
            </Link>
          </li>

          <li>
            <Link
              to="/opinioes"
              className="text-gray-300 transition hover:text-blue-300"
            >
              opiniões
            </Link>
          </li>

          <li>
            <Link
              to="/recomendacoes"
              className="text-gray-300 transition hover:text-blue-300"
            >
              recomendações
            </Link>
          </li>

          <li>
            <HashLink
              smooth
              to="/#sobre"
              className="text-gray-300 transition hover:text-blue-300"
            >
              sobre
            </HashLink>
          </li>
        </ul>
      </nav>

      <div className="h-[1px] w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-70" />
    </header>
  );
}