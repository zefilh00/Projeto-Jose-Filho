import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Recomendacoes from "./Pages/Recomendacoes.jsx";
import ProdutoDetalhe from "./Pages/ProdutoDetalhe.jsx";
import Opinioes from "./Pages/Opinioes.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/opinioes" element={<Opinioes />} />
      <Route path="/recomendacoes" element={<Recomendacoes />} />
      <Route path="/recomendacoes/:id" element={<ProdutoDetalhe />} />
    </Routes>
  );
}