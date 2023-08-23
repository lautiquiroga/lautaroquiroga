import React /* , { useState, useEffect } */ from "react";
import Spline from "@splinetool/react-spline";
// import camisa from "../multimedia/foto-camisa.jpeg";
import camisa from "../multimedia/camisa.png";
import html from "../multimedia/logo-html.png";
import css from "../multimedia/icon-css.png";
import sass from "../multimedia/sass.png";
import js from "../multimedia/icon-js.png";
import react from "../multimedia/icon-React.png";
import git from "../multimedia/icon-git.png";
import wordpress from "../multimedia/wordpress.png";
import iconoWpp from "../multimedia/icon-wpp.png";
import iconoLd from "../multimedia/icon-linkedin.png";

export default function Inicio({
  sectionActualId,
  // splineLoading,
  // setSplineLoading,
}) {
  const vertical = window.innerHeight > window.innerWidth;
  // console.log(sectionActualId);

  /*  useEffect(() => {
    // Simulación de carga de Spline (esto es solo un ejemplo)
    setTimeout(() => {
      setSplineLoading(false);
    }, 5000);
  }, [splineLoading]); */

  return (
    <div className={vertical ? "inicioMobile" : "inicioPC"}>
      {/* Inicio */}
      <section id="home" className="inicio">
        <div className="textoInicio">
          <p className="hola">Hola! Soy</p>
          <h1 className="titulo-inicio">Lautaro Quiroga</h1>
          <div className="descr-inicio">
            <p>
              Soy programador web especializado en FrontEnd, con conocimientos
              de BackEnd y más de un año de experiencia en el desarrollo de
              páginas web.
            </p>{" "}
            {!vertical && (
              <p>
                Mi enfoque se centra en tecnologías como HTML5, CSS3, SCSS,
                JavaScript y React. Estoy dispuesto a aprender las tecnologías
                necesarias. Siempre me interesó el diseño y la lógica. Soy
                detallista y me gusta dedicarle el tiempo que sea necesario a
                resolver cualquier problema que se presente en el código.
              </p>
            )}
          </div>
          <div className="btnsInicio">
            <a className="button-inicio" href="#proyectos">
              PROYECTOS
            </a>
            <a
              className="button-inicio cv"
              href="https://drive.google.com/file/d/1s4_WQpagqBGyLTk0qofJtnNSA-kGeHog/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              CURRÍCULUM
            </a>
            {!vertical && (
              <>
                <a
                  className="circle"
                  href="https://wa.me/+543512780528"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={iconoWpp} alt="imgWpp" className="icono wsp" />
                </a>
                <a
                  className="circle"
                  href="https://www.linkedin.com/in/lautaro-quiroga/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={iconoLd} alt="linkedin" className="icono" />
                </a>
              </>
            )}
          </div>
        </div>

        <div className="fotoContainer">
          <div>
            <img className="camisa" src={camisa} alt="camisa" />
          </div>
        </div>
      </section>
      {/* Sobre mí */}
      <section id="sobreMi" className="sobremi">
        {!vertical && (
          <div className="contenedorSpline">
            <div className="splineContainer">
              <Spline scene="https://prod.spline.design/IBwNdGw6wK5iS0Il/scene.splinecode" />
            </div>
          </div>
        )}
        <div className="textSobremi">
          <h1 className="titulo-sobremi">Sobre mí</h1>
          <div className="descr-sobremi">
            Cuento con más de un año de experiencia en el desarrollo de páginas
            web. Mis habilidades en FrontEnd abarcan HTML5, CSS3, SCSS,
            JavaScript y React para el desarrollo de interfaces interactivas.
            También tengo conocimientos de maquetación web con WordPress.
            {/* También cuento con conocimientos en el lado del Backend, utilizando
            PostgreSQL con Sequelize como base de datos y Express para Node.js. */}
            <br />
            <br />
            Invierto compromiso y esfuerzo en cada proyecto que abordo, siendo
            el "Menú Virtual" la aplicación web más extensa que he construido y
            de la cual he aprendido mucho. Dicho proyecto se caracteriza por un
            análisis detallado de las diversas funcionalidades, cuidando cada
            aspecto. También he dedicado tiempo a realizar pruebas minuciosas
            para garantizar una experiencia de usuario libre de errores.
            {(sectionActualId === "sobreMi" ||
              sectionActualId === "home" ||
              sectionActualId === "tecnologias") &&
              vertical && (
                <div className="contenedorSpline">
                  <div className="splineContainer">
                    <Spline scene="https://prod.spline.design/IBwNdGw6wK5iS0Il/scene.splinecode" />
                  </div>
                </div>
              )}
            <div className="subDescr">
              Poseo la habilidad de plasmar el diseño creado por diseñadores
              UX/UI en código funcional y estético. Adquirí esta habilidad
              trabajando en un emprendemiento de desarrollo de páginas web,
              colaborando con otro programador (utilizamos Git para trabajo
              colaborativo y control de versiones), y dos diseñadores. Esta
              experiencia me ha proporcionado habilidades sólidas de trabajo en
              equipo, comunicación y liderazgo.
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologías */}
      <section id="tecnologias" className="tecnologias">
        <h1 className="titulo-tecno">Tecnologías aprendidas</h1>

        <div className="cardsTecno">
          <div className="cardTecno">
            <img className="logoTecno html" src={html} alt="Logo - HTML" />
            <div className="">
              <p>HTML5</p>
            </div>
          </div>

          <div className="cardTecno">
            <img className="logoTecno css" src={css} alt="Logo - CSS3" />
            <div className="">
              <p>CSS3</p>
            </div>
          </div>

          <div className="cardTecno">
            <img className="logoTecno scss" src={sass} alt="Logo - SCSS" />
            <div className="">
              <p>SCSS</p>
            </div>
          </div>

          <div className="cardTecno">
            <img className="logoTecno js" src={js} alt="Logo - JavaScript" />
            <div className="">
              <p>JavaScript</p>
            </div>
          </div>

          <div className="cardTecno">
            <img className="logoTecno react" src={react} alt="Logo - React" />
            <div className="">
              <p>React</p>
            </div>
          </div>

          <div className="cardTecno">
            <img className="logoTecno git" src={git} alt="Logo - Git" />
            <div className="">
              <p>Git</p>
            </div>
          </div>

          <div className="cardTecno">
            <img
              className="logoTecno wordpress"
              src={wordpress}
              alt="Logo - WordPress"
            />
            <div className="">
              <p>WordPress</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
