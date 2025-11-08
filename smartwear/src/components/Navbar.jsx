import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../features/user/userSlice";
import styles from "../styles/Header.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuAbierto, setMenuAbierto] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const toggleMenu = () => setMenuAbierto(!menuAbierto);
  const handleLogout = () => {
    dispatch(logoutUser());
    setMenuAbierto(false);
  };
  const goToLogin = () => {
    navigate("/login");
    setMenuAbierto(false);
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.logoLink}>SmartWear</h1>

      {/* Botón del menú (mobile) */}
      <button
        className={styles.btnMenuLabel}
        aria-label="Abrir menú"
        onClick={toggleMenu}
      >
        <img src="./assets/icons/menu.png" alt="Ícono de menú" />
      </button>

      {/* Menú principal */}
      <nav
        className={`${styles.barraNavegacion} ${
          menuAbierto ? styles.menuAbierto : ""
        }`}
      >
        <Link to="/" onClick={() => setMenuAbierto(false)}>
          Inicio
        </Link>
        <Link to="/nosotros" onClick={() => setMenuAbierto(false)}>
          Nosotros
        </Link>
        <Link to="/catalogo" onClick={() => setMenuAbierto(false)}>
          Catálogo
        </Link>
        <Link to="/contacto" onClick={() => setMenuAbierto(false)}>
          Contacto
        </Link>

        {/* 👇 Botón Login/Cerrar sesión visible solo en menú móvil */}
        {user ? (
          <button onClick={handleLogout} className={styles.btnLoginMobile}>
            Cerrar sesión ({user.name})
          </button>
        ) : (
          <button onClick={goToLogin} className={styles.btnLoginMobile}>
            Iniciar sesión
          </button>
        )}
      </nav>

      {/* Acciones visibles en desktop */}
      <div className={styles.actions}>
        <button className={styles.abrirCarrito}>
          <img
            src="./assets/icons/carrito.png"
            alt="Ícono de carrito"
            className={styles.iconoCarrito}
          />
          <span className={styles.cartCount}>0</span>
        </button>

        {user ? (
          <button onClick={handleLogout} className={styles.btnLogin}>
            Cerrar sesión ({user.name})
          </button>
        ) : (
          <button onClick={goToLogin} className={styles.btnLogin}>
            <img
              src="./assets/icons/user.png"
              alt="Ícono de usuario"
              className={styles.iconoUsuario}
            />
            Iniciar sesión
          </button>
        )}
      </div>
    </header>
  );
}
