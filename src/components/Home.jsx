import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Inicio from "./Inicio";
import Proyectos from "./Proyectos";
import Contacto from "./Contacto";

export default function Home() {
  useEffect(() => {
    // Obtener el último atributo de la URL
    var url = window.location.href;
    var urlSplit = url.split("/");
    var hash = urlSplit[urlSplit.length - 1];

    // Verificar si hay un hash y si existe un elemento con ese ID
    if (hash && document.querySelector(hash)) {
      var targetElement = document.querySelector(hash);

      // Realizar el scroll suave hacia el elemento objetivo
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }

    /*===== class active por secciones =====*/
    const sectionAll = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", () => {
      const header = document.querySelector(".header");
      header && header.classList.toggle("abajo", window.scrollY > 0);
      const scrollY = window.scrollY;
      sectionAll.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute("id");

        if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
          const button = document.querySelector(
            "nav a[href*=" + sectionId + "]"
          );
          button && button.classList.add("active");
        } else {
          const button = document.querySelector(
            "nav a[href*=" + sectionId + "]"
          );
          button && button.classList.remove("active");
        }
      });
    });
  }, []);

  const pagina = useLocation().pathname;

  return (
    <div className="homeContainer">
      <Navbar />
      <div className="home-subContainer">
        <Inicio />
        <Proyectos />
        {/* <Planes /> */}
        <Contacto />
      </div>
      <Footer />
    </div>
  );
}
