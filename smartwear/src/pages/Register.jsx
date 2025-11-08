import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/user/userSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/AuthPage.module.css";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const images = [
    "/assets/img/1.webp",
    "/assets/img/2.webp",
    "/assets/img/3.webp",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentImage((prev) => (prev + 1) % images.length),
      3000
    );
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.authPage}>
      {/* PANEL IZQUIERDO */}
      <div className={styles.leftPanel}>
        <div
          className={styles.bgImage}
          style={{ backgroundImage: `url(${images[currentImage]})` }}
        />
        <div className={styles.overlay}>
          <h1 className={styles.brand}>SmartWear</h1>
          <p className={styles.slogan}>
            Creá tu cuenta y llevá la innovación puesta.
          </p>
        </div>
      </div>

      {/* PANEL DERECHO */}
      <div className={styles.rightPanel}>
        <Link to="/" className={styles.backHome}>
          ⟵ Volver al inicio
        </Link>
        <h2>Crear cuenta</h2>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={Yup.object({
            name: Yup.string().required("Campo obligatorio"),
            email: Yup.string()
              .email("Correo inválido")
              .required("Campo obligatorio"),
            password: Yup.string()
              .min(6, "Mínimo 6 caracteres")
              .required("Campo obligatorio"),
          })}
          onSubmit={(values) => {
            const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

            const userExists = storedUsers.some(
              (u) => u.email === values.email
            );
            if (userExists) {
              alert("Ya existe un usuario con este correo.");
              return;
            }

            const updatedUsers = [...storedUsers, values];
            localStorage.setItem("users", JSON.stringify(updatedUsers));

            dispatch(registerUser(values));
            localStorage.setItem("loggedUser", JSON.stringify(values));
            alert("¡Cuenta creada con éxito!");
            navigate("/");
          }}
        >
          <Form className={styles.form}>
            <label htmlFor="name">Nombre</label>
            <Field name="name" type="text" />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />

            <label htmlFor="email">Correo electrónico</label>
            <Field name="email" type="email" />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.error}
            />

            <label htmlFor="password">Contraseña</label>
            <Field name="password" type="password" />
            <ErrorMessage
              name="password"
              component="div"
              className={styles.error}
            />

            <button type="submit">Registrarse</button>

            <p className={styles.switchText}>
              ¿Ya tenés cuenta? <Link to="/login">Iniciá sesión</Link>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
