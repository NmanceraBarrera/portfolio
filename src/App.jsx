import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import "../src/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookBookmark,
  faChalkboard,
  faEnvelope,
  faGraduationCap,
  faInfo,
  faInfoCircle,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import ReactModal from "react-modal";
import emailjs from "@emailjs/browser";

import logo from "../public/assets/NMB.png";
import menuIcono from "../public/assets/4139555.png";
import curriculum from "../public/assets/CV Nicolas Mancera 2024.pdf";
import img3d from "../public/assets/3d-business-young-man-at-work-desk-and-dog.png";
import foto from "../public/assets/foto Nicolas.jpg";
import p1 from "../public/assets/p3.png";
import p2 from "../public/assets/charlie.png";
import p3 from "../public/assets/dog.jpeg";

ReactModal.setAppElement("#root");

function App() {
  const form = useRef();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSEFUEModalOpen, setIsSEFUEModalOpen] = useState(false);
  const [isCharlieModalOpen, setIsCharlieModalOpen] = useState(false);
  const [isDogsPIModalOpen, setIsDogsPIModalOpen] = useState(false);

  const openSEFUEModal = () => {
    console.log("estoy llamando la funct");
    setIsSEFUEModalOpen(true);
  };
  const closeSEFUEModal = () => {
    console.log("estoy cerrando el modal");
    setIsSEFUEModalOpen(false);
  };

  const openCharlieModal = () => setIsCharlieModalOpen(true);
  const closeCharlieModal = () => setIsCharlieModalOpen(false);

  const openDogsPIModal = () => setIsDogsPIModalOpen(true);
  const closeDogsPIModal = () => setIsDogsPIModalOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    // Configura el template params
    const templateParams = {
      name: name,
      phone: phone,
      email: email,
      message: message,
    };

    emailjs
      .sendForm("service_zg018h7", "template_17q6njq", form.current, {
        publicKey: "rMNSljgYTX6IG9FT1",
      })
      .then(
        (response) => {
          console.log("Correo enviado", response.status, response.text);
          // Muestra un mensaje de éxito
          Swal.fire({
            icon: "success",
            title: "¡Éxito!",
            text: "El mensaje ha sido enviado correctamente.",
          });
          // Limpia los campos del formulario
          setName("");
          setPhone("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("Error:", error);
          // Muestra un mensaje de error
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Hubo un problema al enviar el mensaje.",
          });
        }
      );
  };
  return (
    <div className="App">
      <header className="header" id="header">
        <div className="menu container">
          <img src={logo} className="logo" alt="LOGO" />
          <input type="checkbox" id="menu" />
          <label htmlFor="menu">
            <img src={menuIcono} className="menu-icono" alt="menu" />
          </label>
          <nav className="navbar">
            <ul>
              <li>
                <a href="#header">Sobre Mi</a>
              </li>
              <li>
                <a href="#proyectos">Proyectos</a>
              </li>
              <li>
                <a href="#educacion">Educación</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header-content container">
          <div className="header-txt">
            <h2> Hola, soy </h2>
            <h1> Nicolas Mancera</h1>
            <h3>Desarrollador FullStack e Ingeniero Industrial</h3>
            <div className="data-content">
              <a
                href="https://github.com/NmanceraBarrera"
                className="redes"
                target="_blank"
              >
                <i className="redes fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/nicolas-mancera-barrera-706764295/"
                className="redes"
                target="_blank"
              >
                <i className="redes fa-brands fa-linkedin"></i>
              </a>
              <a
                style={{ marginLeft: "60px" }}
                href={curriculum}
                className="btn-1"
                download="CV Nicolas Mancera"
              >
                Descargar CV
              </a>
            </div>
          </div>
          <div
            className="header-img"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={img3d} alt="Imagen inicio" />
          </div>
        </div>
      </header>

      <div className="btn-arriba">
        <a href="#header">
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </div>

      <section className="about container">
        <div className="about-img">
          <img className="about-foto" src={foto} alt="" />
        </div>
        <div className="about-txt">
          <h2>Sobre Mi</h2>
          <hr className="linea-division-corta" />
          <p>
            "Soy un hombre de Fe, colombiano apasionado por el aprendizaje
            constante, especialmente en tecnología y programación. Me destaco en
            impulsar el crecimiento empresarial mediante la implementación de
            ideas innovadoras. Disfruto explorando nuevas tecnologías y
            aplicándolas en proyectos creativos. Además, encuentro equilibrio en
            mi vida a través de actividades como la lectura, el deporte y el
            tiempo con mi familia."
          </p>
        </div>
      </section>

      <div className="btn-arriba">
        <a href="#header">
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </div>

      <main className="educacion" id="educacion">
        <h2>Educación</h2>
        <div className="educacion-content container">
          <div className="educacion-1">
            <FontAwesomeIcon icon={faChalkboard} color="#928554" />

            <h3>Desarrollo FullStack Henry</h3>
            <p> +800 horas</p>
          </div>
          <div className="educacion-1">
            <FontAwesomeIcon icon={faGraduationCap} color="#928554" />

            <h3>Ingenieria Industrial</h3>
            <p>Carrera Profesional</p>
          </div>
          <div className="educacion-1">
            <FontAwesomeIcon icon={faBookBookmark} color="#928554" />

            <h3>Otros Cursos</h3>
            <p>TypeScript, MySQL, VB6, PHP</p>
          </div>
        </div>
      </main>

      <section className="proyectos" id="proyectos">
        <div className="btn-arriba">
          <a href="#header">
            <i className="fa-solid fa-arrow-up"></i>
          </a>
        </div>
        <h2>Proyectos</h2>

        <div className="proyectos-content container">
          {/* Proyecto SEFUE */}
          <div className="proyectos-1">
            <h3>SEFUE</h3>

            <img
              className="img-container"
              src={p1}
              alt="sefue"
              onClick={openSEFUEModal}
              style={{ cursor: "pointer" }}
            />
            <div className="overlay-indicator">
              <FontAwesomeIcon icon={faInfoCircle} color="#928554" />
            </div>

            {/* Modal SEFUE */}
            <ReactModal
              isOpen={isSEFUEModalOpen}
              onRequestClose={closeSEFUEModal}
              contentLabel="Información sobre SEFUE"
              className="custom-modal-class"
              overlayClassName="custom-overlay-class"
            >
              <div className="modal-content">
                <h2>Información sobre SEFUE</h2>
                <p>
                  Desarrollé una aplicación integral de envíos nacionales que
                  facilitaba la interacción entre conductores y emisores de
                  paquetes. La plataforma integraba tecnologías avanzadas de
                  georreferenciación utilizando la API de Google para la
                  localización precisa, cálculo de rutas optimizadas y selección
                  de direcciones. Además, implementé funcionalidades de rating
                  para evaluar la calidad del servicio, un chat interactivo para
                  una comunicación directa y eficiente, y sistemas de
                  autenticación y envío de mensajes seguros mediante códigos de
                  confirmación.
                </p>
                <p>
                  <strong>Tecnologías utilizadas:</strong>
                  <br />
                  Frontend: Dart - Flutter <br />
                  Backend: Dart - Flutter <br />
                  Base de datos: Firebase. <br />
                  (Al ser un proyecto de una empresa real, no tengo permitido
                  compartir el repositorio privado)
                </p>
                <div className="modal-buttons">
                  <button onClick={closeSEFUEModal} className="btn-1">
                    Cerrar
                  </button>
                  {/* <button className="btn-1" >
                    <a href="">{`>>> Ver más <<<`}</a>
                  </button> */}
                </div>
              </div>
            </ReactModal>
          </div>
          {/* Proyecto Charlie */}
          <div className="proyectos-1">
            <h3>Charlie</h3>
            <img
              src={p2}
              alt="charlie"
              onClick={openCharlieModal}
              style={{ cursor: "pointer" }}
            />

            {/* Modal Charlie */}
            <ReactModal
              isOpen={isCharlieModalOpen}
              onRequestClose={closeCharlieModal}
              contentLabel="Información sobre Charlie"
              className="custom-modal-class"
              overlayClassName="custom-overlay-class"
            >
              <div className="modal-content">
                <h2>Información sobre Charlie</h2>
                <p>
                  Participe en un equipo de trabajo, encargado del desarrollo de
                  un Marketplace de comercios que permite a cada comercio tener
                  franquicias con productos independientes, y recibir pagos a
                  través de Mercado Pago. Los consumidores pueden iniciar sesión
                  con Google/Facebook o Email, y pueden ver los productos de
                  cada franquicia mediante un QR que redirige a la interfaz
                  correspondiente. Se permite realizar reembolsos de compras, y
                  la conexión de Mercado Pago de la franquicia es segura a
                  través de una conexión privada.
                </p>
                <p>
                  Cada franquicia puede acceder a su historial de ventas, y cada
                  cliente puede acceder a su historial de compras.
                  <br />
                  Después de realizar una compra, se genera un QR de único uso
                  para retirar el pedido. Además, fortalecí mi habilidad de
                  trabajo en equipo para planificar y ejecutar las tareas de
                  desarrollo de manera eficiente y efectiva.
                  <br />
                  <strong>Funcionalidades Destacadas:</strong>
                  <br />- Autenticación de terceros.
                  <br />- Cada Ecommerce optimizado para Mobile
                  <br />- Proceso de pago seguro utilizando Mercado Pago.
                  <br />- Funcionalidad de reembolsos de compras.
                  <br />- Generación de QR para administración de pedidos.
                  <br />
                  <strong>TECNOLOGÍAS:</strong>
                  <br /> <strong>Frontend:</strong> React, Redux, JavaScript,
                  HTML, CSS.
                  <br /> <strong>Backend:</strong> Sequelize, PostgreSQL,
                  Express, Node.js.
                  <br /> <strong>Herramientas:</strong> Render, Auth0, Mercado
                  Pago, Multer, GitHub/GitFlow.
                </p>
                <div className="modal-buttons">
                  <button
                    onClick={closeCharlieModal}
                    className="btn-1"
                    style={{ marginTop: "10px" }}
                  >
                    Cerrar
                  </button>
                  <button
                    className="btn-1"
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/watch?v=GCPEP9U2Oe4",
                        "_blank"
                      )
                    }
                  >
                    {`>>> Ver más <<<`}
                  </button>
                </div>
              </div>
            </ReactModal>
          </div>

          {/* Proyecto Dogs PI */}
          <div className="proyectos-1">
            <h3>Dogs PI</h3>
            <img
              src={p3}
              alt="dogspi"
              onClick={openDogsPIModal}
              style={{ cursor: "pointer" }}
            />

            {/* Modal Dogs PI */}
            <ReactModal
              isOpen={isDogsPIModalOpen}
              onRequestClose={closeDogsPIModal}
              contentLabel="Información sobre Dogs PI"
              className="custom-modal-class"
              overlayClassName="custom-overlay-class"
            >
              <div className="modal-content">
                <h2>Información sobre Dogs PI</h2>
                <p>
                  🌐 <strong>Proyecto Académico:</strong>
                  <br />
                  Participé en un proyecto SPA capaz de obtener datos de manera
                  fluida desde una API externa.
                  <br />
                  <strong>✨ Logros:</strong>
                  <br /> <strong>Adaptabilidad:</strong> Garanticé que la
                  aplicación se adaptara a diferentes dispositivos, brindando a
                  los usuarios una experiencia consistente y fluida.
                  <br />
                  <strong>Presentación de Datos:</strong> Logré implementar
                  funciones para obtener, mostrar y presentar datos de la API de
                  forma intuitiva, creando una interfaz amigable.
                  <br />
                  <strong> Funcionalidad de Búsqueda:</strong> Integré potentes
                  herramientas de búsqueda, permitiendo a los usuarios localizar
                  eficazmente información específica dentro de la aplicación.
                  <br />
                  <strong> Manipulación de Datos:</strong> Incorporé filtros y
                  opciones de clasificación, capacitando a los usuarios para
                  interactuar con los datos según sus preferencias.
                  <br />
                  <strong> Atractivo Visual:</strong> Enfoqué mis esfuerzos en
                  crear un diseño no solo funcional, sino también atractivo
                  visualmente.
                  <br />
                  <strong>TECNOLOGÍAS:</strong>
                  <br />
                  <strong>- Frontend:</strong> React, Redux, JavaScript, HTML,
                  CSS.
                  <br />
                  <strong>- Backend:</strong> Sequelize, PostgreSQL, Express,
                  Node.js.
                </p>
                <div className="modal-buttons">
                  <button
                    onClick={closeDogsPIModal}
                    className="btn-1"
                    style={{ marginTop: "10px" }}
                  >
                    Cerrar
                  </button>
                  <button
                    className="btn-1"
                    onClick={() =>
                      window.open("https://dogs-pi-1.onrender.com/", "_blank")
                    }
                  >
                    {`>>> Ver más <<<`}
                  </button>
                </div>
              </div>
            </ReactModal>
          </div>
        </div>
      </section>

      <section className="formulario container" id="contacto">
        <form
          ref={form}
          id="contact-form"
          method="post"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <h2>Contactame y trabajemos juntos.</h2>
          <div className="input-group">
            <div className="input-container">
              <input
                type="text"
                name="from_name"
                placeholder="Nombre y Apellido"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <FontAwesomeIcon icon={faUser} className="i" />
            </div>
            <div className="input-container">
              <input
                type="tel"
                name="from_phone"
                placeholder="Telefono Celular"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <FontAwesomeIcon icon={faPhone} className="i" />
            </div>
            <div className="input-container">
              <input
                type="email"
                name="from_email"
                placeholder="Correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <FontAwesomeIcon icon={faEnvelope} className="i" />
            </div>
            <div className="input-container">
              <textarea
                name="message"
                placeholder="Déjame un mensaje"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <input type="submit" name="send" className="btn" value="Send" />
          </div>
        </form>
      </section>

      <footer className="footer">
        <div className="footer-content container">
          <img src={logo} className="logofooter" alt="LOGO" />

          <div className="link">
            <ul>
              <li>
                <a href="#header">Sobre Mi</a>
              </li>
              <li>
                <a href="#proyectos">Proyectos</a>
              </li>
              <li>
                <a href="#educacion">Educación</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
              <li>
                <a href="#header">
                  <i className="fa-solid fa-arrow-up"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
