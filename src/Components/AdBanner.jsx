export default function AdBanner({ tipo = "horizontal" }) {
  const estilos =
    tipo === "lateral"
      ? "min-h-[420px] w-full"
      : "min-h-[120px] w-full";

  return (
    <div
      className={`${estilos} flex items-center justify-center rounded-[2rem] border border-dashed border-blue-500/40 bg-[#0b1020]/60 px-6 text-center shadow-[0_0_25px_rgba(59,130,246,0.10)]`}
    >
      <span className="text-sm uppercase tracking-[0.25em] text-blue-300/70">
        Anúncio aqui
      </span>
    </div>
  );
}