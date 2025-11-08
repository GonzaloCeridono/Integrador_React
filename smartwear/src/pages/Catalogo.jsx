import { useState } from "react";
import { productos } from "../data/productos";
import styles from "../styles/Catalogo.module.css";

export default function Catalogo() {
  const [categoria, setCategoria] = useState("todo");

  const categorias = [
    "todo",
    "casual",
    "urbano",
    "elegante",
    "accesorios",
    "hombre",
    "mujer",
  ];

  const productosFiltrados = productos.filter(
    (p) => categoria === "todo" || p.categoria.includes(categoria)
  );

  return (
    <section className={styles.catalogoPage}>
      <h1>Catálogo</h1>

      {/* Filtro por categorías */}
      <div className={styles.filtroCategorias}>
        {categorias.map((cat) => (
          <button
            key={cat}
            className={`${styles.btnCategoria} ${
              categoria === cat ? styles.activo : ""
            }`}
            onClick={() => setCategoria(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Grid de productos */}
      <div className={styles.gridProductos}>
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((prod) => (
            <div key={prod.id} className={styles.card}>
              <img src={prod.imagen} alt={prod.nombre} />
              <h3>{prod.nombre}</h3>
              <p className={styles.categoria}>{prod.categoria.join(" / ")}</p>
              <p className={styles.precio}>${prod.precio.toLocaleString()}</p>
              <button className={styles.btnAgregar}>Agregar al carrito</button>
            </div>
          ))
        ) : (
          <p className={styles.sinResultados}>
            No hay productos en esta categoría.
          </p>
        )}
      </div>
    </section>
  );
}
