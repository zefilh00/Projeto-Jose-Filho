import { Link } from "react-router-dom";
import {
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/Logo.png";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-blue-500/30 bg-[#070b14]">

      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/10 via-transparent to-purple-950/20" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="José Filho"
              className="mb-5 h-12 w-auto"
            />

            <p className="mb-4 text-blue-200">
              Tecnologia • Política • Cultura Nerd
            </p>

            <p className="leading-relaxed text-gray-400">
              Opiniões, análises e recomendações sobre tecnologia,
              desenvolvimento de software, política e universo geek.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="mb-5 text-xl text-blue-100">
              Navegação
            </h3>

            <div className="space-y-3">

              <Link
                to="/"
                className="block text-gray-400 transition hover:translate-x-1 hover:text-blue-300"
              >
                Início
              </Link>

              <Link
                to="/opinioes"
                className="block text-gray-400 transition hover:translate-x-1 hover:text-blue-300"
              >
                Opiniões
              </Link>

              <Link
                to="/recomendacoes"
                className="block text-gray-400 transition hover:translate-x-1 hover:text-blue-300"
              >
                Recomendações
              </Link>

              <Link
                to="/#sobre"
                className="block text-gray-400 transition hover:translate-x-1 hover:text-blue-300"
              >
                Sobre
              </Link>

            </div>
          </div>

          {/* Institucional */}
          <div>

            <h3 className="mb-5 text-xl text-blue-100">
              Institucional
            </h3>

            <div className="space-y-3">

              <Link
                to="/politica-de-privacidade"
                className="block text-gray-400 transition hover:translate-x-1 hover:text-blue-300"
              >
                Política de Privacidade
              </Link>

              <Link
                to="/termos-de-uso"
                className="block text-gray-400 transition hover:translate-x-1 hover:text-blue-300"
              >
                Termos de Uso
              </Link>

              <Link
                to="/contato"
                className="block text-gray-400 transition hover:translate-x-1 hover:text-blue-300"
              >
                Contato
              </Link>

              <Link
                to="/cookies"
                className="block text-gray-400 transition hover:translate-x-1 hover:text-blue-300"
              >
                Política de Cookies
              </Link>

            </div>

          </div>

          {/* Redes */}

          <div>

            <h3 className="mb-5 text-xl text-blue-100">
              Redes Sociais
            </h3>

            <div className="flex flex-wrap gap-5">

              <a
                href="https://github.com/zefilh00"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-blue-500/30 p-3 text-gray-300 transition hover:scale-110 hover:border-blue-400 hover:bg-blue-500/10"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/josearnald0"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-blue-500/30 p-3 text-gray-300 transition hover:scale-110 hover:border-blue-400 hover:bg-blue-500/10"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="https://www.instagram.com/zefilh00/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-blue-500/30 p-3 text-gray-300 transition hover:scale-110 hover:border-purple-400 hover:bg-purple-500/10"
              >
                <FaInstagram size={22} />
              </a>

              <a
                href="https://www.youtube.com/@zefilh00"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-blue-500/30 p-3 text-gray-300 transition hover:scale-110 hover:border-red-400 hover:bg-red-500/10"
              >
                <FaYoutube size={22} />
              </a>

              <a
                href="https://x.com/zezinh00_"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-blue-500/30 p-3 text-gray-300 transition hover:scale-110 hover:border-sky-400 hover:bg-sky-500/10"
              >
                <FaXTwitter size={20} />
              </a>

            </div>

          </div>

        </div>

        <div className="mt-14 border-t border-blue-500/20 pt-8 text-center">

          <p className="text-gray-400">
            Desenvolvido por{" "}
            <span className="text-blue-300">
              José Filho
            </span>{" "}
            utilizando React, Tailwind CSS e Supabase.
          </p>

          <p className="mt-2 text-sm text-gray-500">
            © 2026 José Filho. Todos os direitos reservados.
          </p>

        </div>

      </div>

    </footer>
  );
}