import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import styles from "../styles/Checkout.module.css";
import { clearOrder } from "../features/order/orderSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Checkout() {
  const { orderItems, total } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
    ciudad: "",
    provincia: "",
    metodoEnvio: "estandar",
    metodoPago: "tarjeta",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.email || !formData.direccion) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor completa todos los datos requeridos.",
        confirmButtonColor: "#7dc6d9",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "¡Compra confirmada!",
      text: "Gracias por tu compra. Te enviaremos un correo con los detalles.",
      confirmButtonColor: "#7dc6d9",
    }).then(() => {
      dispatch(clearOrder());
      navigate("/");
    });
  };

  if (orderItems.length === 0) {
    return (
      <div className={styles.checkoutContainer}>
        <h1>Finalizar compra</h1>
        <p className={styles.vacio}>No hay productos para mostrar</p>
      </div>
    );
  }

  return (
    <div className={styles.checkoutContainer}>
      <h1>Finalizar compra</h1>

      <div className={styles.checkoutGrid}>
        <section className={styles.resumen}>
          <h2>Tu pedido</h2>

          <div className={styles.listaScroll}>
            {orderItems.map((item) => (
              <div key={item.id} className={styles.item}>
                <img src={item.imagen} alt={item.nombre} />
                <div>
                  <h4>{item.nombre}</h4>
                  <p>
                    {item.cantidad} × ${item.precio.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.total}>
            <strong>Total:</strong> ${total.toLocaleString()}
          </div>
        </section>

        <form className={styles.formulario} onSubmit={handleSubmit}>
          <h2>Datos del comprador</h2>

          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
          />
          <input
            type="text"
            name="direccion"
            placeholder="Dirección"
            value={formData.direccion}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="ciudad"
            placeholder="Ciudad"
            value={formData.ciudad}
            onChange={handleChange}
          />
          <input
            type="text"
            name="provincia"
            placeholder="Provincia"
            value={formData.provincia}
            onChange={handleChange}
          />

          <h3>Método de envío</h3>
          <select
            name="metodoEnvio"
            value={formData.metodoEnvio}
            onChange={handleChange}
          >
            <option value="estandar">Envío estándar (3-5 días)</option>
            <option value="express">Envío exprés (24hs)</option>
            <option value="retiro">Retiro en tienda</option>
          </select>

          <h3>Método de pago</h3>
          <select
            name="metodoPago"
            value={formData.metodoPago}
            onChange={handleChange}
          >
            <option value="tarjeta">Tarjeta de crédito / débito</option>
            <option value="transferencia">Transferencia bancaria</option>
          </select>

          <button type="submit" className={styles.btnConfirmar}>
            Finalizar compra
          </button>
        </form>
      </div>
    </div>
  );
}
