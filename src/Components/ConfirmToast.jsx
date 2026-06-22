import toast from "react-hot-toast";

export function confirmToast({ titulo, mensagem, confirmarTexto = "Confirmar", onConfirm }) {
  toast.custom(
    (t) => (
      <div className="w-[92vw] max-w-md rounded-[2rem] border border-red-500/40 bg-[#0b1020] p-6 text-white shadow-[0_0_30px_rgba(239,68,68,0.18)]">
        <h2 className="text-xl font-light text-red-300">{titulo}</h2>

        <p className="mt-3 text-sm leading-relaxed text-gray-300">
          {mensagem}
        </p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full rounded-xl border border-gray-500/40 px-4 py-2 text-gray-300 transition hover:bg-gray-500/10"
          >
            Cancelar
          </button>

          <button
            onClick={() => {
              toast.dismiss(t.id);
              onConfirm();
            }}
            className="w-full rounded-xl border border-red-500/50 bg-red-500/10 px-4 py-2 text-red-300 transition hover:bg-red-500/20"
          >
            {confirmarTexto}
          </button>
        </div>
      </div>
    ),
    {
      duration: Infinity,
    }
  );
}