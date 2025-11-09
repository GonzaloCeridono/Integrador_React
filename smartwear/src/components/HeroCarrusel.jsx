import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import styles from "../styles/HeroCarrusel.module.css";

export default function HeroCarrusel({ scrollToRef }) {
  const imagenes = [
    "assets/img/hero1.jpg",
    "assets/img/hero2.jpg",
    "assets/img/hero3.jpg",
    "assets/img/hero4.jpg",
    "assets/img/hero5.jpg",
    "assets/img/hero6.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagenes.length);
    }, 3000);
    return () => clearInterval(intervalo);
  }, [imagenes.length]);

  const handleScroll = () => {
    if (scrollToRef?.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.hero}>
      {imagenes.map((img, i) => (
        <div
          key={i}
          className={`${styles.slide} ${i === index ? styles.active : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>SmartWear</h1>
          <p>Estilo urbano. Elegancia sin esfuerzo.</p>
          <button className={styles.scrollDown} onClick={handleScroll}>
            <FaArrowDown size={30} />
          </button>
        </div>
      </div>
    </section>
  );
}
