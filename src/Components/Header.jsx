import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/Logo.png";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-blue-500/30 bg-[#070b14]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 py-4 md:h-24 md:flex-row md:justify-between md:px-8 md:py-0">
        <Link to="/" className="transition duration-300 hover:scale-105">
          <img src={logo} alt="José Filho" className="h-9 w-auto md:h-14" />
        </Link>

        <nav>
          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-base font-light md:gap-12 md:text-xl">
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
      </div>

      <div className="h-[1px] w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-70" />
    </header>
  );
}