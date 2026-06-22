import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import Home from "./Pages/Home.jsx";
import Recomendacoes from "./Pages/Recomendacoes.jsx";
import ProdutoDetalhe from "./Pages/ProdutoDetalhe.jsx";
import Opinioes from "./Pages/Opinioes.jsx";
import ArtigoDetalhe from "./Pages/ArtigoDetalhe.jsx";
import AdminLogin from "./Pages/AdminLogin.jsx";
import Admin from "./Pages/Admin.jsx";
import Login from "./Pages/Login.jsx";
import Registro from "./Pages/Registro.jsx";
import Perfil from "./Pages/Perfil.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/perfil" element={<Perfil />} />
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