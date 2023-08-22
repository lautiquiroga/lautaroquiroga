import React /* , { useEffect } */ from "react";
// import logo from "../multimedia/logo2.PNG";

export default function Navbar() {
  return (
    <>
      <div className="navContainer header">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid containNav">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <nav className="nav_menu not-active navbar-nav">
                <a href="#home" className="nav-link active">
                  Inicio
                </a>
                <a
                  href="#sobreMi"
                  className="nav-link"
                  data-section="menu"
                  data-value="item2"
                >
                  Sobre mí
                </a>
                <a
                  href="#tecnologias"
                  className="nav-link"
                  data-section="menu"
                  data-value="item3"
                >
                  Tecnologías
                </a>
                <a
                  href="#proyectos"
                  className="nav-link"
                  data-section="menu"
                  data-value="item5"
                >
                  Proyectos
                </a>
                <a
                  href="#contacto"
                  className="nav-link"
                  data-section="menu"
                  data-value="item6"
                >
                  Contacto
                </a>
              </nav>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
