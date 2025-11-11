# 🧥 SmartWear — Proyecto Final de React

**SmartWear** es un proyecto desarrollado como parte del curso de **React**, con el objetivo de aplicar los principales conceptos del ecosistema moderno de desarrollo frontend.  
El proyecto simula una **tienda online de indumentaria**, implementando gestión de usuarios, carrito de compras, validaciones, navegación dinámica y diseño responsive.

---

## 🎯 Objetivo del Proyecto

El propósito de **SmartWear** es integrar en una sola aplicación los conocimientos adquiridos a lo largo del curso, incluyendo:

- Manejo del estado global con **Redux Toolkit**.
- Ruteo y navegación con **React Router DOM**.
- Validación de formularios con **Formik y Yup**.
- Comunicación entre componentes y manejo de props.
- Estilos modulares y diseño adaptable a distintos dispositivos.
- Persistencia de datos en el navegador mediante **LocalStorage**.

---

## 🧩 Estructura del Proyecto

El proyecto se compone de **múltiples páginas** vinculadas entre sí mediante React Router:

### 🏠 Landing Page

Incluye un header con navegación, hero principal, sección introductoria, productos destacados y footer.

### 👥 Sobre Nosotros

Página informativa con el objetivo y la visión de la marca ficticia.

### 🛍️ Catálogo de Productos

Renderizado dinámico de productos con filtros, opción de agregar al carrito, modificar cantidades y eliminar productos.  
Todas las acciones cuentan con modales de confirmación mediante **SweetAlert2**.

### 🛒 Carrito de Compras

Persistente entre sesiones, gestionado con Redux y almacenado en localStorage.

### 💳 Checkout _(opcional implementado)_

Página que resume la compra antes de finalizarla.

### ✉️ Contacto

Formulario validado con **Formik + Yup** (campos: nombre, apellido, email y asunto).  
Muestra mensaje de envío exitoso cuando las validaciones se cumplen.

---

## ⚙️ Lógica Implementada

- **Estado global:** gestionado mediante Redux Toolkit con slices (`cartSlice`, `userSlice`, `orderSlice`).
- **Persistencia:** el estado del carrito se guarda automáticamente en `localStorage`.
- **Validaciones:** Formik y Yup garantizan que el formulario de contacto cumpla con los requisitos.
- **Ruteo:** React Router permite la navegación entre páginas sin recarga.
- **Confirmaciones y alertas:** SweetAlert2 se usa para confirmar compras, eliminar productos y vaciar el carrito.
- **Responsive Design:** todas las páginas se adaptan a diferentes resoluciones con CSS Modules y media queries.

---

## 🧰 Tecnologías Utilizadas

| Categoría               | Herramientas     |
| ----------------------- | ---------------- |
| **Framework principal** | React            |
| **Estado global**       | Redux Toolkit    |
| **Ruteo**               | React Router DOM |
| **Validaciones**        | Formik + Yup     |
| **Alertas**             | SweetAlert2      |
| **Estilos**             | CSS Modules      |
| **Persistencia local**  | LocalStorage     |
| **Deploy**              | Vercel           |

---

## 🧠 Aprendizajes Aplicados

- Organización del proyecto en componentes reutilizables.
- Aplicación de hooks (`useState`, `useEffect`, `useSelector`, `useDispatch`, `useNavigate`).
- Manejo de formularios controlados y validaciones.
- Trabajo con estado global e integración entre Redux y la UI.
- Adaptación responsive con buenas prácticas de CSS modularizado.
- Buenas prácticas de estructura de carpetas y nombrado de archivos.
