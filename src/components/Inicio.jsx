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
import elementor from "../multimedia/Elementor.png";

export default function Inicio({ sectionActualId }) {
  const vertical = window.innerHeight > window.innerWidth;

  return (
    <div className={vertical ? "inicioMobile" : "inicioPC"}>
      <section id="home" className="inicio">
        <div className="textoInicio">
          <p className="hola">Hola! Soy</p>
          <h1 className="titulo-inicio">Lautaro Quiroga</h1>
          <div className="descr-inicio">
            <p>
              Soy desarrollador web especializado en FrontEnd, con conocimientos
              de BackEnd. Poseo experiencia profesional en el uso de WordPress y
              en desarrollo de software.
            </p>{" "}
            {/* {!vertical && (
              <p>
                Mi enfoque se centra en tecnologías como HTML5, CSS3, SCSS,
                JavaScript y React. Estoy dispuesto a aprender las tecnologías
                necesarias. Siempre me interesó el diseño y la lógica. Soy
                detallista y me gusta dedicarle el tiempo que sea necesario a
                resolver cualquier problema que se presente en el código.
              </p>
            )} */}
          </div>
          <div className="btnsInicio">
            <a className="button-inicio" href="#proyectos">
              PROYECTOS
            </a>
            <a
              className="button-inicio cv"
              href="https://drive.google.com/file/d/1AnYT23aBC5NFxyFN2S0HtFEYwvPgyvNS/view?usp=drive_link"
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
              <Spline scene="https://prod.spline.design/hNxISoMVUaCqASeW/scene.splinecode" />
            </div>
          </div>
        )}
        <div className="textSobremi">
          <h1 className="titulo-sobremi">Sobre mí</h1>
          <div className="descr-sobremi">
            Tengo 22 años y vivo en Córdoba, Argentina. Actualmente, trabajo en
            una agencia de desarrollo web utilizando Elementor y WordPress para
            la creación de sitios web institucionales, Landing Pages y
            E-Commerces. Además, tengo experiencia trabajando con HTML5, CSS3,
            SCSS, JavaScript, React y Bootstrap para el FrontEnd con código.
            <br />
            <br />
            Siempre me interesó el diseño y la lógica, soy detallista y me gusta
            dedicarle el tiempo que sea necesario a resolver cualquier problema
            que se presente en el desarrollo de sitios web.
            <br />
            {/* También cuento con conocimientos en el lado del Backend, utilizando
            PostgreSQL con Sequelize como base de datos y Express para Node.js. */}
            Invierto compromiso y esfuerzo en cada proyecto que abordo. He
            desarrollado más de 20 sitios web con Elementor, actualmente
            publicados y en funcionamiento real. Tengo experiencia en el
            desarollo de aplicaciones web con código, siendo el "
            <span className="menuVirtual">Menú Virtual</span>" la aplicación web
            más extensa que construí y de la cual he aprendido mucho. Dicho
            proyecto se caracteriza por un análisis detallado de las diversas
            funcionalidades, cuidando cada aspecto. También he dedicado tiempo a
            realizar pruebas minuciosas para garantizar una experiencia libre de
            errores.
            {(sectionActualId === "sobreMi" ||
              sectionActualId === "home" ||
              sectionActualId === "tecnologias") &&
              vertical && (
                <div className="contenedorSpline">
                  <div className="splineContainer">
                    <Spline scene="https://prod.spline.design/b0SyaHAcBRlWKnio/scene.splinecode" />
                  </div>
                </div>
              )}
            {!vertical && (
              <>
                <br />
                <br />
              </>
            )}
            <div>
              Algunas de las habilidades en las que me destaco, incluyen la
              capacidad para trabajar en equipo, resolver problemas de manera
              eficiente, mantener un enfoque en el aprendizaje constante, ser
              proactivo al proponer soluciones innovadoras y ser perfeccionista
              en la creación de sitios web a partir de los diseños UX/UI.
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

          <div className="cardTecno">
            <img className="logoTecno" src={elementor} alt="Logo - Elementor" />
            <div className="">
              <p>Elementor</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
