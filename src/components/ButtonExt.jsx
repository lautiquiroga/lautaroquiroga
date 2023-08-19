import React, { useEffect, useRef, useState } from "react";
import iconoImage from "../multimedia/iconoMenu.png";
import iconoImageCerrado from "../multimedia/iconoMenuCerrado.png";
import iconoWpp from "../multimedia/icon-wpp.png";
import iconoIg from "../multimedia/icon-instagram.png";
import iconoLd from "../multimedia/icon-linkedin.png";
import ayuda from "../multimedia/ayuda.png";
import home from "../multimedia/home.png";

export default function ButtonExt({ pagina }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const clickOutMenu = useRef(null);
  const handleButtonClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOut = (event) => {
    if (clickOutMenu.current && !clickOutMenu.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOut);
    return () => {
      document.removeEventListener("mousedown", handleClickOut);
    };
  }, []);
  return (
    <div className="buttonContainerr" ref={clickOutMenu}>
      <button
        className={`buttonExt ${menuOpen && "open"}`}
        onClick={handleButtonClick}
      >
        {menuOpen ? (
          <img className="icono" src={iconoImageCerrado} alt="Icono" />
        ) : (
          <img className="icono" src={iconoImage} alt="Icono" />
        )}
      </button>
      {menuOpen && (
        <div className="menu">
          <a
            className="circle"
            href="https://wa.me/+543516863857"
            target="_blank"
            rel="noreferrer"
          >
            <img src={iconoWpp} alt="imgWpp" className="icono" />
          </a>
          {/* <a
            className="circle"
            href="https://www.instagram.com/gopagearg/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={iconoIg} alt="insta" className="icono" />
          </a> */}
          <a
            className="circle"
            href="https://www.linkedin.com/company/gopage-disweb/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={iconoLd} alt="linkedin" className="icono" />
          </a>
          {/* {pagina !== "/help" ? (
            <a className="circle" href="./help">
              <img src={ayuda} alt="ayuda" className="icono" />
            </a>
          ) : (
            <a className="circle" href="../">
              <img src={home} alt="home" className="icono" />
            </a>
          )} */}
        </div>
      )}
    </div>
  );
}
