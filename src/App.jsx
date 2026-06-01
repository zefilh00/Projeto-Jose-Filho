import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Recomendacoes from "./Pages/Recomendacoes.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recomendacoes" element={<Recomendacoes />} />
    </Routes>
  );
}