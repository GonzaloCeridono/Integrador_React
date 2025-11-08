import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "../styles/Contacto.module.css";

const ContactoSchema = Yup.object().shape({
  nombre: Yup.string()
    .min(2, "Demasiado corto")
    .max(50, "Demasiado largo")
    .required("El nombre es obligatorio"),
  apellido: Yup.string()
    .min(2, "Demasiado corto")
    .max(50, "Demasiado largo")
    .required("El apellido es obligatorio"),
  email: Yup.string()
    .email("Email inválido")
    .required("El email es obligatorio"),
  asunto: Yup.string()
    .min(5, "El asunto es demasiado corto")
    .required("Por favor escribí tu mensaje"),
});

export default function Contacto() {
  return (
    <main className={styles.contacto}>
      <div className={styles.contenedor}>
        {/* Imagen lateral */}
        <div className={styles.imagenLateral}>
          <img src="assets/img/contacto1.jpg" alt="SmartWear Contacto" />
        </div>

        {/* Formulario */}
        <section className={styles.formularioContenedor}>
          <h1 className={styles.titulo}>Ponete en contacto</h1>
          <p className={styles.subtitulo}>
            Queremos escucharte. Completá el formulario y te responderemos
            pronto.
          </p>

          <Formik
            initialValues={{
              nombre: "",
              apellido: "",
              email: "",
              asunto: "",
            }}
            validationSchema={ContactoSchema}
            onSubmit={(values, { resetForm, setStatus }) => {
              console.log("Datos enviados:", values);
              setStatus(
                "Mensaje enviado con éxito. ¡Gracias por contactarnos!"
              );
              resetForm();
            }}
          >
            {({ isSubmitting, status }) => (
              <Form className={styles.formulario}>
                <div className={styles.campo}>
                  <label htmlFor="nombre">Nombre</label>
                  <Field
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="Tu nombre"
                  />
                  <ErrorMessage
                    name="nombre"
                    component="div"
                    className={styles.error}
                  />
                </div>

                <div className={styles.campo}>
                  <label htmlFor="apellido">Apellido</label>
                  <Field
                    type="text"
                    name="apellido"
                    id="apellido"
                    placeholder="Tu apellido"
                  />
                  <ErrorMessage
                    name="apellido"
                    component="div"
                    className={styles.error}
                  />
                </div>

                <div className={styles.campo}>
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="tuemail@mail.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={styles.error}
                  />
                </div>

                <div className={styles.campo}>
                  <label htmlFor="asunto">Asunto</label>
                  <Field
                    as="textarea"
                    name="asunto"
                    id="asunto"
                    rows="5"
                    placeholder="Escribinos tu mensaje..."
                  />
                  <ErrorMessage
                    name="asunto"
                    component="div"
                    className={styles.error}
                  />
                </div>

                <button
                  type="submit"
                  className={styles.botonEnviar}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </button>

                {status && <p className={styles.exito}>{status}</p>}
              </Form>
            )}
          </Formik>
        </section>
      </div>
    </main>
  );
}
