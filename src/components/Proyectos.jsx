import React from "react";
import gopage from "../multimedia/gopage.png";
import fenix from "../multimedia/fenix-trading.png";
import quiero from "../multimedia/quiero-ushuaia.png";
import cotizador from "../multimedia/cotizador.png";
import gloria from "../multimedia/por-la-gloria.png";
import tedx from "../multimedia/tedx.png";
import quickbites from "../multimedia/quickbites2.mp4";

export default function Proyectos() {
  const vertical = window.innerHeight > window.innerWidth;

  return (
    <section id="proyectos">
      <div
        className={vertical ? "proyectosMobile codigo" : "proyectosPC codigo"}
      >
        <h1>Mis trabajos destacados con código</h1>
        <div className="cards_container--proyectos">
          <div className="cards--proyectos card_portafolio">
            <video className="video" controls>
              <source src={quickbites} type="video/mp4" />
            </video>
            <div className="container_textCard--proyectos">
              <div className="cardTexto">
                <h2 data-value="title-proyecto2">
                  <b>QuickBites - Menú Virtual</b>
                </h2>
                <p data-value="info-proyecto2">
                  Es una {/* <span className="naranja"> */}aplicación web
                  {/* </span>  */}FullStack hecha con React y NodeJS que está
                  destinada a restaurantes. Cuenta con dos apartados, uno para
                  clientes y otro para administradores. Le permite a los
                  clientes presenciales del restaurante poder hacer pedidos
                  desde la mesa usando la aplicación. Los administradores,
                  pueden editar el Menú y administrar los pedidos hechos por los
                  clientes, entre otras funcionalidades.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="cards--proyectos card_portafolio">
            <a
              href="https://gopage.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="container_imgCard--proyectos">
                <img src={gopage} alt="Proyecto: GoPage" />
              </div>
            </a>
            <div className="container_textCard--proyectos">
              <div className="cardTexto">
                <h2  data-value="title-proyecto2">
                  <b>Portafolio GoPage</b>
                </h2>
                <p  data-value="info-proyecto2">
                  El proyecto es una 
                  LandingPage destinada a una empresa de desarrollo web. Está
                  realizada con React y SCSS. El enfoque en la interfaz del
                  usuario se combina con un código limpio y bien estructurado,
                  lo que garantiza un diseño atractivo y un funcionamiento sin
                  problemas. Resalto este proyecto para evidenciar mi habilidad
                  de convertir el diseño UX/UI en código.
                </p>
              </div>
            </div>
          </div> */}

          <a
            href="https://fenixtrading.net/#/es"
            target="_blank"
            className="cards--proyectos card_portafolio"
          >
            <div className="container_imgCard--proyectos">
              <img src={fenix} alt="Proyecto: Fenix Trading" />
            </div>

            <div className="container_textCard--proyectos">
              <div className="cardTexto">
                <h2 data-value="title-proyecto2">
                  <b>Fenix Trading</b>
                </h2>
                <p data-value="info-proyecto2">
                  En este trabajo freelance, optimicé el código preexistente del
                  Home para admitir dos idiomas y desarrollé las páginas
                  'Savings' y 'Tradings' usando tecnologías como React, Vite y
                  CSS. Esta experiencia no solo me permitió aplicar mis
                  habilidades técnicas, sino también fortalecer mi capacidad de
                  interactuar directamente con el cliente y enfrentar desafíos
                  del mundo real en el desarrollo de software.
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://camseals.com/cotizador/"
            target="_blank"
            className="cards--proyectos card_portafolio"
          >
            <div className="container_imgCard--proyectos">
              <img src={cotizador} alt="Proyecto: cotizador" />
            </div>

            <div className="container_textCard--proyectos">
              <div className="cardTexto">
                <h2 data-value="title-proyecto2">
                  <b>Cotizador para CamSeals</b>
                </h2>
                <p data-value="info-proyecto2">
                  En este encargo freelance, desarrollé un cotizador de perfiles
                  metalúrgicos para Camseals utilizando React y JavaScript. El
                  proyecto posee un selector de categorías y perfiles,
                  optimizado para facilitar la selección de datos por parte de
                  los usuarios, incluyendo imágenes. Trabajé directamente con el
                  cliente para comprender sus necesidades y asegurar que el
                  resultado final cumpliera con sus expectativas.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className={vertical ? "proyectosMobile wp" : "proyectosPC wp"}>
        <h1>Mis trabajos destacados en WordPress</h1>
        <div className="cards_container--proyectos">
          <a
            href="https://quieroushuaia.com.ar/"
            target="_blank"
            className="cards--proyectos card_portafolio"
          >
            <div className="container_imgCard--proyectos">
              <img src={quiero} alt="Proyecto: Quiero Ushuaia" />
            </div>

            <div className="container_textCard--proyectos">
              <div className="cardTexto">
                <h2 data-value="title-proyecto2">
                  <b>Quiero Ushuaia</b>
                </h2>
                <p data-value="info-proyecto2">
                  Este sitio web es un E-Commerce de venta de excursiones y
                  traslados para la empresa Quiero Ushuaia. Está creado en
                  WordPress con Elementor y WooCommerce. Obtiene categorías,
                  filtros, formulario de reservas e implementacion de BackEnd a
                  través de Make. Los datos de los productos están colocados
                  gracias a Custom Fields que permite y facilita al cliente
                  poder cargarlos sin problema.
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://porlagloria.com/"
            target="_blank"
            a
            className="cards--proyectos card_portafolio"
          >
            <div className="container_imgCard--proyectos">
              <img src={gloria} alt="Proyecto: Por La Gloria" />
            </div>
            <div className="container_textCard--proyectos">
              <div className="cardTexto">
                <h2 data-value="title-proyecto2">
                  <b>Por La Gloria</b>
                </h2>
                <p data-value="info-proyecto2">
                  Desarrollé esta página web para Por La Gloria, una empresa
                  dedicada a impulsar talentos deportivos a nivel mundial. Fue
                  maquetada con Elementor y creé plantillas para garantizar una
                  identidad coherente. Integré dos idiomas y diseñé el sitio con
                  meticuloso detalle siguiendo las especificaciones del cliente
                  y los principios de diseño UX/UI.
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://lacomu.co/"
            target="_blank"
            className="cards--proyectos card_portafolio"
          >
            <div className="container_imgCard--proyectos">
              <img src={tedx} alt="Proyecto: La Comunidad TEDX" />
            </div>
            <div className="container_textCard--proyectos">
              <div className="cardTexto">
                <h2 data-value="title-proyecto2">
                  <b>La Comunidad TEDX Córdoba</b>
                </h2>
                <p data-value="info-proyecto2">
                  Este sitio web fue desarrollado para TEDx, una reconocida
                  organización dedicada a difundir ideas innovadoras y estimular
                  el diálogo a través de conferencias a nivel mundial. En este
                  caso, el proyecto fue creado específicamente para La Comunidad
                  TEDx Córdoba. Se trata de una landing page que ofrece a los
                  usuarios una membresía con beneficios exclusivos.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
