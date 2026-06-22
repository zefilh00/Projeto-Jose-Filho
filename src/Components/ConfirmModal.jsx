export default function ConfirmModal({
  aberto,
  titulo,
  mensagem,
  onConfirm,
  onCancel,
}) {
  if (!aberto) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-[2rem] border border-red-500/40 bg-[#0b1020] p-8 shadow-[0_0_30px_rgba(239,68,68,.15)]">
        <h2 className="text-2xl text-red-300">
          {titulo}
        </h2>

        <p className="mt-4 text-gray-300">
          {mensagem}
        </p>

        <div className="mt-8 flex gap-4">
          <button
            onClick={onCancel}
            className="flex-1 rounded-xl border border-gray-500/40 px-4 py-3 text-gray-300"
          >
            Cancelar
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 rounded-xl border border-red-500/50 bg-red-500/10 px-4 py-3 text-red-300"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}