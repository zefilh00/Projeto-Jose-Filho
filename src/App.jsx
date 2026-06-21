import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import Home from "./Pages/Home.jsx";
import Recomendacoes from "./Pages/Recomendacoes.jsx";
import ProdutoDetalhe from "./Pages/ProdutoDetalhe.jsx";
import Opinioes from "./Pages/Opinioes.jsx";
import ArtigoDetalhe from "./Pages/ArtigoDetalhe.jsx";
import AdminLogin from "./Pages/AdminLogin.jsx";
import Admin from "./Pages/Admin.jsx";
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/opinioes" element={<Opinioes />} />
        <Route path="/opinioes/:id" element={<ArtigoDetalhe />} />
        <Route path="/recomendacoes" element={<Recomendacoes />} />
        <Route path="/recomendacoes/:id" element={<ProdutoDetalhe />}/>
      </Routes>
    </>
  );
}