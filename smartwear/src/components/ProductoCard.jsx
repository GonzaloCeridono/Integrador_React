import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import Swal from "sweetalert2";
import styles from "../styles/ProductoCard.module.css";

export default function ProductoCard({ producto }) {
  const dispatch = useDispatch();

  const agregar = () => {
    dispatch(addToCart(producto));
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "success",
      title: `${producto.nombre} agregado al carrito`,
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <div className={styles.card}>
      <img src={producto.imagen} alt={producto.nombre} />

      <h3>{producto.nombre}</h3>
      <p className={styles.precio}>${producto.precio.toLocaleString()}</p>

      <button onClick={agregar}>Agregar al carrito</button>
    </div>
  );
}
