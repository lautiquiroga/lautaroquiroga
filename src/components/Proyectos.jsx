import React from "react";
import gopage from "../multimedia/gopage.png";
import demo from "../multimedia/icon-demoProyecto.png";
import repo from "../multimedia/icon-githubProyecto.png";
import citas from "../multimedia/adm-citas.png";
import wordpress from "../multimedia/wordpress.mp4";
import quickbites from "../multimedia/quickbites2.mp4";

export default function Proyectos() {
  const vertical = window.innerHeight > window.innerWidth;

  return (
    <section
      className={vertical ? "proyectosMobile" : "proyectosPC"}
      id="proyectos"
    >
      <h1 data-section="proyectos" data-value="title">
        Mis proyectos destacados
      </h1>
      <div className="cards_container--proyectos">
        <div className="cards--proyectos card_portafolio">
          {/* <div className="container_imgCard--proyectos">
            <img src={menu} alt="Proyecto: gasto semanal" />
          </div> */}
          <video className="video" controls>
            <source src={quickbites} type="video/mp4" />
          </video>
          <div className="container_textCard--proyectos">
            <div className="cardTexto">
              <h2 data-section="proyectos" data-value="title-proyecto2">
                <b>QuickBites - Menú Virtual</b>
              </h2>
              <p data-section="proyectos" data-value="info-proyecto2">
                Es una aplicación web FullStack hecha con React y NodeJS que
                está destinada a restaurantes. Cuenta con un apartado para los
                clientes y otro para administradores. Le permite a los clientes
                presenciales del restaurante poder hacer pedidos desde la mesa
                usando la aplicación. Los administradores, pueden editar el Menú
                y administrar los pedidos hechos por los clientes, entre otras
                funcionalidades.
              </p>
            </div>
            <div className="container_btn--proyectos">
              <a
                href="https:menuvirtual.vercel.app"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn_demo">
                  <img src={demo} alt="Demostración" />
                  DEMO
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="cards--proyectos card_portafolio">
          <div className="container_imgCard--proyectos">
            <img src={gopage} alt="Proyecto: carrito" />
          </div>
          <div className="container_textCard--proyectos">
            <div className="cardTexto">
              <h2 data-section="proyectos" data-value="title-proyecto2">
                <b>Portafolio GoPage</b>
              </h2>
              <p data-section="proyectos" data-value="info-proyecto2">
                El proyecto es una LandingPage destinada a una empresa de
                desarrollo web. Está realizada con React y SCSS. El enfoque en
                la experiencia del usuario se combina con un código limpio y
                bien estructurado, lo que garantiza un diseño atractivo y un
                funcionamiento sin problemas. Resalto este proyecto para
                evidenciar mi habilidad de convertir el diseño UX/UI en código.
              </p>
            </div>
            <div className="container_btn--proyectos">
              <a
                href="https://gopage.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn_demo">
                  <img src={demo} alt="Demostración" />
                  DEMO
                </button>
              </a>
              <a
                href="https://github.com/dileo24/portafolioGP"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn_repo">
                  <img src={repo} alt="Repositorio de github" />
                  REPO
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="cards--proyectos card_JuegoAhorcado">
          <div className="container_imgCard--proyectos">
            <img src={citas} alt="Proyecto: Administrador" />
          </div>
          <div className="container_textCard--proyectos">
            <div className="cardTexto">
              <h2 data-section="proyectos" data-value="title-proyecto1">
                <b>Administrador de Pacientes</b>
              </h2>
              <p data-section="proyectos" data-value="info-proyecto1">
                El enfoque de este proyecto es facilitar la gestión de citas
                para el personal del ámbito de la salud. El sistema está
                diseñado para que los profesionales puedan administrar con
                comodidad sus citas con los pacientes. La plataforma permite a
                los usuarios tanto crear nuevas citas como actualizar los datos
                de los pacientes. Para su desarrollo, se utilizó JavaScript
                Vanilla.
              </p>
            </div>
            <div className="container_btn--proyectos">
              <a
                href="https://lautiquiroga.github.io/Administrador-de-Pacientes/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn_demo">
                  <img src={demo} alt="Demostración" />
                  DEMO
                </button>
              </a>
              <a
                href="https://github.com/lautiquiroga/Administrador-de-Pacientes/tree/gh-pages"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn_repo">
                  <img src={repo} alt="Repositorio de github" />
                  REPO
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="cards--proyectos card_JuegoAhorcado">
          {/* <div className="container_imgCard--proyectos">
            <img src={citas} alt="Proyecto: Administrador" />
          </div> */}
          <video className="video" controls>
            <source src={wordpress} type="video/mp4" />
          </video>

          <div className="container_textCard--proyectos">
            <div className="cardTexto">
              <h2 data-section="proyectos" data-value="title-proyecto1">
                <b>Urbano Clothes - WooCommerce</b>
              </h2>
              <p data-section="proyectos" data-value="info-proyecto1">
                Este proyecto se materializó utilizando WordPress como base,
                donde saqué partido de herramientas clave: el plugin Elementor y
                el tema Astra. El resultado es un sitio web informativo que
                incluye datos de contacto esenciales, y además incorpora una
                funcionalidad de tienda en línea.
              </p>
            </div>
            {/*  <div className="container_btn--proyectos">
            <a
              href="https://drive.google.com/file/d/1MDw3bRXxQ3FWe0P2sIkReMpSb3E8hmrY/view?usp=sharing"
              target="_blank" rel="noreferrer"
            >
              <button className="btn_demo">
                <img src={demo} alt="Demostración" />
                DEMO
              </button>
            </a>
          </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
