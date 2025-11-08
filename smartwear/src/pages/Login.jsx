import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/user/userSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styles/AuthPage.module.css";

export default function Login() {
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
      {/* PANEL IZQUIERDO CON FONDO */}
      <div className={styles.leftPanel}>
        <div
          className={styles.bgImage}
          style={{ backgroundImage: `url(${images[currentImage]})` }}
        />
        <div className={styles.overlay}>
          <h1 className={styles.brand}>SmartWear</h1>
          <p className={styles.slogan}>
            Tecnología y estilo fusionados en cada prenda.
          </p>
        </div>
      </div>

      {/* PANEL DERECHO CON FORMULARIO */}
      <div className={styles.rightPanel}>
        <Link to="/" className={styles.backHome}>
          ⟵ Volver al inicio
        </Link>
        <h2>Iniciar sesión</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Correo inválido")
              .required("Campo obligatorio"),
            password: Yup.string().required("Campo obligatorio"),
          })}
          onSubmit={(values) => {
            const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
            const foundUser = storedUsers.find(
              (u) => u.email === values.email && u.password === values.password
            );

            if (foundUser) {
              dispatch(loginUser(foundUser));
              localStorage.setItem("loggedUser", JSON.stringify(foundUser));
              navigate("/");
            } else {
              alert("Usuario o contraseña incorrectos");
            }
          }}
        >
          <Form className={styles.form}>
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

            <button type="submit">Iniciar sesión</button>

            <p className={styles.switchText}>
              ¿No tenés cuenta? <Link to="/register">Registrate</Link>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
