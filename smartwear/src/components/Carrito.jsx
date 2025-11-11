import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  addToCart,
  decreaseQuantity,
} from "../features/cart/cartSlice";
import styles from "../styles/Carrito.module.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { setOrder } from "../features/order/orderSlice";

export default function Carrito({ onClose }) {
  const { items, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = () => {
    onClose();
    setTimeout(() => {
      navigate("/checkout");
    }, 300);
  };

  // Scroll lock cuando el carrito está abierto
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // Animacion cierre del carrito
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <>
      <div
        className={`${styles.overlay} ${isClosing ? styles.fadeOut : ""}`}
        onClick={handleClose}
      ></div>

      <aside className={`${styles.drawer} ${isClosing ? styles.slideOut : ""}`}>
        <header className={styles.header}>
          <h2>Lista de compras</h2>
          <button className={styles.cerrar} onClick={handleClose}>
            ✕
          </button>
        </header>

        <div className={styles.contenido}>
          {items.length === 0 ? (
            <p className={styles.vacio}>Sin productos en el carrito</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className={styles.item}>
                <img src={item.imagen} alt={item.nombre} />
                <div className={styles.info}>
                  <h4>{item.nombre}</h4>
                  <p>${item.precio.toLocaleString()}</p>
                  <div className={styles.cantidad}>
                    <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                      -
                    </button>
                    <span>{item.cantidad}</span>
                    <button onClick={() => dispatch(addToCart(item))}>+</button>
                  </div>
                  <button
                    className={styles.eliminar}
                    onClick={() => {
                      Swal.fire({
                        title: "¿Eliminar producto?",
                        text: `¿Deseas eliminar "${item.nombre}" del carrito?`,
                        icon: "question",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Sí, eliminar",
                        cancelButtonText: "Cancelar",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          dispatch(removeFromCart(item.id));
                          Swal.fire(
                            "Eliminado",
                            `"${item.nombre}" ha sido removido del carrito.`,
                            "success"
                          );
                        }
                      });
                    }}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <footer className={styles.footer}>
            <div className={styles.total}>
              <span>Total:</span>
              <strong>${total.toLocaleString()}</strong>
            </div>

            <button
              className={styles.checkout}
              onClick={() => {
                Swal.fire({
                  title: "¿Confirmar compra?",
                  text: `Total a pagar: $${total.toLocaleString()}`,
                  icon: "info",
                  showCancelButton: true,
                  confirmButtonColor: "#7dc6d9",
                  cancelButtonColor: "#aaa",
                  confirmButtonText: "Pagar",
                  cancelButtonText: "Cancelar",
                }).then((result) => {
                  if (result.isConfirmed) {
                    Swal.fire({
                      title: "Compra confirmada",
                      text: "A continuación serás redirigido a la caja.",
                      icon: "success",
                      confirmButtonColor: "#7dc6d9",
                    }).then(() => {
                      dispatch(
                        setOrder({
                          items: items,
                          total: total,
                        })
                      );
                      dispatch(clearCart());
                      onClose();
                      setTimeout(() => navigate("/checkout"), 300);
                    });
                  }
                });
              }}
            >
              Ir a pagar
            </button>

            <button
              className={styles.vaciar}
              onClick={() => {
                Swal.fire({
                  title: "¿Vaciar carrito?",
                  text: "Esta acción eliminará todos los productos.",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Sí, vaciar",
                  cancelButtonText: "Cancelar",
                }).then((result) => {
                  if (result.isConfirmed) {
                    dispatch(clearCart());
                    Swal.fire(
                      "Carrito vacío",
                      "Tu carrito ha sido vaciado.",
                      "success"
                    );
                  }
                });
              }}
            >
              Vaciar carrito
            </button>
          </footer>
        )}
      </aside>
    </>
  );
}
