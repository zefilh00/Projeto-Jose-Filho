import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full border-t border-blue-500/30 bg-[#070b14]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-8 py-8 md:flex-row">
        <p className="text-center text-sm text-gray-400">
          © 2026 José Filho. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/zefilh00"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition duration-300 hover:scale-110 hover:text-blue-300"
          >
            <FaGithub size={24} />
          </a>

          <a
            href="https://www.instagram.com/zefilh00/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition duration-300 hover:scale-110 hover:text-purple-300"
          >
            <FaInstagram size={24} />
          </a>

          <a
            href="https://www.youtube.com/@zefilh00"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition duration-300 hover:scale-110 hover:text-red-400"
          >
            <FaYoutube size={26} />
          </a>

          <a
            href="https://x.com/zezinh00_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition duration-300 hover:scale-110 hover:text-blue-300"
          >
            <FaXTwitter size={23} />
          </a>
        </div>
      </div>
    </footer>
  );
}