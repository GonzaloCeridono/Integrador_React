import styles from "../styles/Nosotros.module.css";

export default function Nosotros() {
  return (
    <main className={styles.about}>
      {/* Sección principal */}
      <section className={styles.intro}>
        <h1>Sobre SmartWear</h1>
        <p>
          En SmartWear nacimos de una idea sencilla: que la ropa puede ser
          moderna sin perder su esencia. Combinamos diseño urbano con tendencias
          globales, para crear prendas que hablan de vos —sin decir una palabra.
        </p>
        <p>
          Nuestra inspiración está en las calles, en los cafés, en los momentos
          cotidianos donde la moda se vuelve parte de la vida real. Creemos en
          la calidad, en los detalles y en la autenticidad.
        </p>
        <p className={styles.final}>Vestite para ser vos, no para parecerlo.</p>
      </section>

      {/* Sección de beneficios */}
      <section className={styles.benefits}>
        <div className={styles.texto}>
          <h2>Nuestros beneficios</h2>
          <p>
            En SmartWear, no solo ofrecemos ropa; brindamos una experiencia de
            compra inigualable. Nos enorgullece ofrecer beneficios que hacen que
            cada compra sea especial y conveniente para vos.
          </p>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <img src="assets/icons/tarjeta.png" alt="Pagos" />
            <p>Recibimos todos los medios de pago</p>
          </div>
          <div className={styles.card}>
            <img src="assets/icons/envio.png" alt="Envíos" />
            <p>Envío gratis desde $200.000</p>
          </div>
          <div className={styles.card}>
            <img src="assets/icons/talle.png" alt="Devolución" />
            <p>Devolución gratuita por talle erróneo</p>
          </div>
          <div className={styles.card}>
            <img src="assets/icons/oferta.png" alt="Ofertas" />
            <p>Ofertas todos los viernes pagando con QR</p>
          </div>
        </div>
      </section>
    </main>
  );
}
