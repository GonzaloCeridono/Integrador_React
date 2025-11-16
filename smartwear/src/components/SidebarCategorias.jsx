import styles from "../styles/SidebarCategorias.module.css";

export default function SidebarCategorias({ categoria, setCategoria }) {
  const categorias = [
    "todo",
    "casual",
    "urbano",
    "elegante",
    "accesorios",
    "hombre",
    "mujer",
  ];

  return (
    <div className={styles.sidebar}>
      <h3>Categorías</h3>

      <ul>
        {categorias.map((cat) => (
          <li
            key={cat}
            className={categoria === cat ? styles.activo : ""}
            onClick={() => setCategoria(cat)}
          >
            {cat.toUpperCase()}
          </li>
        ))}
      </ul>
    </div>
  );
}
