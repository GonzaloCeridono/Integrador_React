import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Marca */}
        <div className={styles.brand}>
          <h3>SmartWear</h3>
          <p>Moda inteligente para un mundo en movimiento.</p>
        </div>

        {/* Redes sociales */}
        <div className={styles.social}>
          <a
            href="https://www.instagram.com/gonzaceridono/"
            aria-label="Instagram"
            target="_blank"
          >
            <img src="/assets/icons/instagram.png" alt="Instagram" />
          </a>
          <a href="https://x.com/gonzaceridono" aria-label="X" target="_blank">
            <img src="/assets/icons/twitter.png" alt="X" />
          </a>
        </div>
      </div>

      <p className={styles.copy}>
        © {new Date().getFullYear()} SmartWear. Todos los derechos reservados.
      </p>
    </footer>
  );
}
