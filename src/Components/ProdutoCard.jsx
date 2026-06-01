import { Link } from "react-router-dom";

export default function ProdutoCard({ produto }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-blue-500/40 bg-[#0b1020]/80 shadow-[0_0_25px_rgba(59,130,246,0.12)] transition duration-300 hover:-translate-y-2 hover:border-blue-400/80 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]">
      <div className="h-56 overflow-hidden bg-[#070b14]">
        <img
          src={produto.foto}
          alt={produto.nome}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="space-y-4 p-6">
        <h3 className="text-2xl font-light text-blue-100">{produto.nome}</h3>

        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

        <p className="text-base leading-relaxed text-gray-300">
          {produto.descricao}
        </p>

        <Link
          to={`/recomendacoes/${produto.id}`}
          className="inline-block rounded-xl border border-blue-500/50 px-5 py-2 text-sm text-blue-100 transition hover:border-blue-400 hover:bg-blue-500/10"
        >
          Ver recomendação 
        </Link>
      </div>
    </article>
  );
}