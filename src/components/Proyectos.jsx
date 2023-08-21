import React from "react";
import gopage from "../multimedia/gopage.png";
import demo from "../multimedia/icon-demoProyecto.png";
import repo from "../multimedia/icon-githubProyecto.png";
import citas from "../multimedia/adm-citas.png";
import menu from "../multimedia/quickbites.jpg";
import wordpress from "../multimedia/wordpress.mp4";
import quickbites from "../multimedia/quickbites.mp4";

export default function Proyectos() {
  return (
    <section className="proyectos" id="proyectos">
      <h1 data-section="proyectos" data-value="title">
        Proyectos
      </h1>
      <h6 data-section="proyectos" data-value="title"></h6>
      <div className="cards_container--proyectos">
        <div
          className="cards--proyectos card_portafolio"
          data-aos="zoom-in-up"
          data-aos-anchor-placement="center-bottom"
        >
          {/* <div className="container_imgCard--proyectos">
            <img src={menu} alt="Proyecto: gasto semanal" />
          </div> */}
          <video className="video" controls>
            <source src={quickbites} type="video/mp4" />
          </video>

          <div className="container_textCard--proyectos">
            <h2 data-section="proyectos" data-value="title-proyecto2">
              <b>QuickBites - Menú Virtual</b>
            </h2>
            <p data-section="proyectos" data-value="info-proyecto2">
              Es una aplicación web FullStack hecha con React y NodeJS que está
              destinada a restaurantes. Cuenta con un apartado para los clientes
              y otro para administradores. Le permite a los clientes
              presenciales del restaurante poder hacer pedidos desde la mesa
              usando la aplicación. Los administradores, pueden editar el Menú y
              administrar los pedidos hechos por los clientes, entre otras
              funcionalidades.
            </p>
          </div>

          <div className="container_btn--proyectos">
            <a href="https:menuvirtual.vercel.app" target="_blank">
              <button className="btn_demo">
                <img src={demo} alt="Demostración" />
                DEMO
              </button>
            </a>
          </div>
        </div>

        <div
          className="cards--proyectos card_portafolio"
          data-aos="zoom-in-up"
          data-aos-anchor-placement="center-bottom"
        >
          <div className="container_imgCard--proyectos">
            <img src={gopage} alt="Proyecto: carrito" />
          </div>

          <div className="container_textCard--proyectos">
            <h2 data-section="proyectos" data-value="title-proyecto2">
              <b>Portafolio GoPage</b>
            </h2>
            <p data-section="proyectos" data-value="info-proyecto2">
              El proyecto es una LandingPage destinada a una empresa de
              desarrollo web. Está realizada con React y SCSS. Cuenta con diseño
              responsivo y un código prolijo y bien estructurado.
            </p>
          </div>

          <div className="container_btn--proyectos">
            <a href="https://gopage.vercel.app/" target="_blank">
              <button className="btn_demo">
                <img src={demo} alt="Demostración" />
                DEMO
              </button>
            </a>

            <a href="https://github.com/dileo24/portafolioGP" target="_blank">
              <button className="btn_repo">
                <img src={repo} alt="Repositorio de github" />
                REPO
              </button>
            </a>
          </div>
        </div>

        <div
          class="cards--proyectos card_JuegoAhorcado"
          data-aos="zoom-in-up"
          data-aos-anchor-placement="center-bottom"
        >
          <div class="container_imgCard--proyectos">
            <img src={citas} alt="Proyecto: Administrador" />
          </div>

          <div class="container_textCard--proyectos">
            <h2 data-section="proyectos" data-value="title-proyecto1">
              <b>Administrador de Pacientes</b>
            </h2>
            <p data-section="proyectos" data-value="info-proyecto1">
              El proyecto está diseñado para que el personal del área de salud,
              pueda administrar fácilmente sus citas con los pacientes. Permite
              a los usuarios crear citas y actualizar la información de los
              pacientes.
            </p>
          </div>

          <div class="container_btn--proyectos">
            <a
              href="https://lautiquiroga.github.io/Administrador-de-Pacientes/"
              target="_blank"
            >
              <button class="btn_demo">
                <img src={demo} alt="Demostración" />
                DEMO
              </button>
            </a>

            <a
              href="https://github.com/lautiquiroga/Administrador-de-Pacientes/tree/gh-pages"
              target="_blank"
            >
              <button class="btn_repo">
                <img src={repo} alt="Repositorio de github" />
                REPO
              </button>
            </a>
          </div>
        </div>

        <div
          class="cards--proyectos card_JuegoAhorcado"
          data-aos="zoom-in-up"
          data-aos-anchor-placement="center-bottom"
        >
          {/* <div class="container_imgCard--proyectos">
            <img src={citas} alt="Proyecto: Administrador" />
          </div> */}
          <video className="video" controls>
            <source src={wordpress} type="video/mp4" />
          </video>

          <div class="container_textCard--proyectos">
            <h2 data-section="proyectos" data-value="title-proyecto1">
              <b>Urbano Clothes - WooCommerce</b>
            </h2>
            <p data-section="proyectos" data-value="info-proyecto1">
              La página web está creada con WordPress. Utilicé el pluggin
              Elementor y el tema Astra. Es un sitio web informativo, con datos
              de contacto y contiene la funcionalidad de tienda en línea.
            </p>
          </div>

          {/*  <div class="container_btn--proyectos">
            <a
              href="https://drive.google.com/file/d/1MDw3bRXxQ3FWe0P2sIkReMpSb3E8hmrY/view?usp=sharing"
              target="_blank"
            >
              <button class="btn_demo">
                <img src={demo} alt="Demostración" />
                DEMO
              </button>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
