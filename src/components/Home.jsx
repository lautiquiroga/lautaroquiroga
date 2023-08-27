import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Inicio from "./Inicio";
import Proyectos from "./Proyectos";
import Contacto from "./Contacto";

export default function Home() {
  const vertical = window.innerHeight > window.innerWidth;
  const [sectionActualId, setSectionActualId] = useState("home");

  useEffect(() => {
    // Función que se ejecutará cuando cambie el tamaño del viewport
    // Función para manejar el cambio de orientación
    const handleOrientationChange = () => {
      // Recargar la página
      window.location.reload();
    };
    // Agregar un controlador de eventos al evento orientationchange
    window.addEventListener("orientationchange", handleOrientationChange);
    // Limpieza: Eliminar el controlador de eventos cuando el componente se desmonta
    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

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
          setSectionActualId(sectionId);
          /* if (
            sectionId === "sobreMi" ||
            sectionId === "home" ||
            sectionId === "tecnologias"
          ) {
            setSplineLoading(true);
          } */
        } else {
          const button = document.querySelector(
            "nav a[href*=" + sectionId + "]"
          );
          button && button.classList.remove("active");
        }
      });
    });
  }, []);

  // useEffect(() => {
  //   const handleLoad = () => {
  //     const contenedorLoader = document.querySelector(".container--loader");
  //     contenedorLoader.style.opacity = 0;
  //     contenedorLoader.style.visibility = "hidden";
  //   };

  //   // Agregar el evento 'load' durante el montaje
  //   window.addEventListener("load", handleLoad);

  //   // Retirar el evento durante la limpieza del efecto
  //   return () => {
  //     window.removeEventListener("load", handleLoad);
  //   };
  // }, []);

  return (
    <div className={vertical ? "homeContainerMobile" : "homeContainerPC"}>
      {/* <div class="container--loader">
        <div class="loader"></div>
      </div> */}
      <Navbar />
      <div className="home-subContainer">
        <Inicio
          sectionActualId={sectionActualId}
          // splineLoading={splineLoading}
          // setSplineLoading={setSplineLoading}
        />
        <Proyectos />
        {/* <Planes /> */}
        <Contacto />
      </div>
      <Footer />
    </div>
  );
}
