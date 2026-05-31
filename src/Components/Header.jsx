import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-blue-500/30 backdrop-blur-md bg-[#070b14]/85">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">

        <Link
          to="/"
          className="transition duration-300 hover:scale-105"
        >
          <img
            src={logo}
            alt="José Filho"
            className="h-14 w-auto"
          />
        </Link>

        <nav>
          <ul className="flex items-center gap-12 text-xl font-light">
            <li>
              <Link
                to="/"
                className="group relative text-gray-300 transition duration-300 hover:text-blue-300"
              >
                início

                <span className="absolute -bottom-2 left-0 h-[3px] w-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>

            <li>
              <Link
                to="/opinioes"
                className="group relative text-gray-300 transition duration-300 hover:text-blue-300"
              >
                opiniões

                <span className="absolute -bottom-2 left-0 h-[3px] w-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>

            <li>
              <Link
                to="/secoes"
                className="group relative text-gray-300 transition duration-300 hover:text-blue-300"
              >
                seções

                <span className="absolute -bottom-2 left-0 h-[3px] w-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>

            <li>
              <Link
                to="/sobre"
                className="group relative text-gray-300 transition duration-300 hover:text-blue-300"
              >
                sobre

                <span className="absolute -bottom-2 left-0 h-[3px] w-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="h-[1px] w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-70" />
    </header>
  );
}