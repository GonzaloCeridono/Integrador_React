import { Link } from "react-router-dom";
import { productos } from "../data/productos";
import styles from "../styles/Home.module.css";
import HeroCarrusel from "../components/HeroCarrusel";
import { useRef } from "react";

export default function Home() {
  const destacados = productos.slice(0, 4);
  const aboutRef = useRef(null);

  return (
    <main className={styles.home}>
      {/* HERO */}
      <HeroCarrusel scrollToRef={aboutRef} />

      {/* ABOUT PREVIEW */}
      <section className={styles.aboutIntro} ref={aboutRef}>
        <div className={styles.aboutContent}>
          <h2>Sobre nosotros</h2>
          <p>
            En <strong>SmartWear</strong> creemos que vestirse bien no debería
            ser complicado. Diseñamos prendas que combinan líneas limpias,
            materiales de calidad y una identidad urbana que se adapta a
            cualquier ocasión. Desde la oficina hasta una salida nocturna, la
            elegancia puede ser tan natural como respirar.
          </p>
          <Link to="/nosotros" className={styles.btnSection}>
            Conocé más sobre nosotros
          </Link>
        </div>
      </section>

      {/* PRODUCTOS DESTACADOS */}
      <section className={styles.destacados}>
        <h2>Productos destacados</h2>
        <p>
          Nuestra selección de temporada: piezas que definen la nueva estética
          urbana. Simples, funcionales y con un toque de sofisticación que nunca
          pasa desapercibido.
        </p>
        <div className={styles.grid}>
          {destacados.map((prod) => (
            <div key={prod.id} className={styles.card}>
              <img src={prod.imagen} alt={prod.nombre} />
              <h3>{prod.nombre}</h3>
              <p>${prod.precio.toLocaleString("es-AR")}</p>
            </div>
          ))}
        </div>
        <Link to="/catalogo" className={styles.btnSection}>
          Ver todo el catálogo
        </Link>
      </section>
    </main>
  );
}
