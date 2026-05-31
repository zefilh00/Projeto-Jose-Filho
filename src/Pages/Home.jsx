import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#070b14] text-white px-6 pt-32">
        <section className="relative mx-auto flex min-h-[520px] max-w-7xl items-center justify-center overflow-hidden rounded-[5rem] border-2 border-blue-500/80 bg-[#0b1020] shadow-[0_0_40px_rgba(59,130,246,0.25)]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-35 blur-sm scale-105"
            style={{
              backgroundImage:
                "url('https://ticoopbrasil.coop.br/wp-content/uploads/2024/10/O-Que-E-Programacao.jpg.webp')",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/80 via-[#0b1020]/60 to-purple-950/70" />

          <div className="relative z-10 text-center px-6">
            <h1 className="text-5xl md:text-7xl font-light tracking-wide drop-shadow-[0_0_20px_rgba(147,197,253,0.45)]">
              José Filho
            </h1>

            <div className="mx-auto my-8 h-1 w-28 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

            <p className="mx-auto max-w-2xl text-2xl md:text-4xl font-light leading-snug text-blue-100">
              Tecnologia + Política + Recomendações
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
