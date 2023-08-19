import React from "react";
import Spline from "@splinetool/react-spline";
import camisa from "../multimedia/foto-camisa.jpeg";
import html from "../multimedia/logo-html.png";
import css from "../multimedia/icon-css.png";
// import scss from "../multimedia/sass-sq.svg";
import js from "../multimedia/icon-js.png";
import react from "../multimedia/icon-React.png";
import git from "../multimedia/icon-git.png";

export default function Nosotros() {
  return (
    <div className="nosotrosContainer">
      {/* Inicio */}
      <section id="home" className="inicio">
        <div className="textoInicio">
          <p className="hola">Hola! Soy</p>
          <h1 className="titulo-inicio">Lautaro Quiroga</h1>
          <p className="descr-inicio">
            Soy programador web especializado en FrontEnd con conocimientos de
            BackEnd y más de un año de experiencia en el desarrollo de páginas
            web. Mi enfoque se centra en tecnologías como HTML5, CSS3, SCSS,
            JavaScript y React para el FrontEnd. Estoy dispuesto a aprender las
            tecnologías necesarias. Siempre me gustó el diseño y la lógica. Soy
            detallista y me gusta dedicarle el tiempo que sea necesario a
            resolver cualquier problema que se presente en el código.
          </p>
          <a className="button-inicio" href="#proyectos">
            PROYECTOS
          </a>
        </div>
        <div className="fotoContainer">
          <div>
            <img className="camisa" src={camisa} alt="camisa" />
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <section id="sobreMi" className="sobremi">
        <div className="splineContainer">
          <Spline scene="https://prod.spline.design/Wapp5vLV15kWJDfr/scene.splinecode" />
        </div>
        <div className="textSobremi">
          <h1 className="titulo-sobremi">Un poco más sobre mí</h1>
          <p className="descr-sobremi">
            Cuento con más de un año de experiencia en el desarrollo de páginas
            web. Mis habilidades en FrontEnd abarcan HTML5, CSS3, SCSS,
            JavaScript y React para el desarrollo de interfaces interactivas.
            También cuento con conocimientos en el lado del Backend, utilizando
            PostgreSQL con Sequelize como base de datos y Express para Node.js.{" "}
            <br />
            <br />
            Participé activamente en proyectos de desarrollo de páginas web
            utilizando React y SCSS, lo que me permitió adquirir experiencia
            práctica y mejorar mis habilidades técnicas. Estoy comprometido con
            seguir creciendo en el mundo de la programación web y ansío
            enfrentar nuevos desafíos para seguir perfeccionándome.
          </p>
        </div>
      </section>

      {/* Tecnologías */}
      <section id="tecnologias" className="tecnologias">
        <h1 className="titulo-tecno">Tecnologías dominadas</h1>

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
            <img
              className="logoTecno scss"
              /* src={scss} */ alt="Logo - SCSS"
            />
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
        </div>
      </section>
    </div>
  );
}
