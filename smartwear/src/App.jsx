import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Catalogo from "./pages/Catalogo";
import Contacto from "./pages/Contacto";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";

function App() {
  const location = useLocation();

  // Detecta la ruta y quita el gradiente de fondo en login y register
  useEffect(() => {
    const body = document.body;

    if (location.pathname === "/login" || location.pathname === "/register") {
      body.classList.add("no-gradient");
    } else {
      body.classList.remove("no-gradient");
    }
  }, [location]);

  return (
    <Routes>
      {/* Rutas con layout (Navbar + Footer) */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>

      {/* Rutas sin layout (solo login y registro) */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
