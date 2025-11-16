import styles from "../styles/BarraOrdenamiento.module.css";

export default function BarraOrdenamiento({ setOrden }) {
  return (
    <div className={styles.barra}>
      <label>Ordenar por:</label>
      <select onChange={(e) => setOrden(e.target.value)}>
        <option value="">Seleccionar</option>
        <option value="menor">Precio menor a mayor</option>
        <option value="mayor">Precio mayor a menor</option>
      </select>
    </div>
  );
}
