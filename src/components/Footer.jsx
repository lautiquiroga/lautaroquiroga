import React from "react";

export default function Footer() {
  const vertical = window.innerHeight > window.innerWidth;

  return (
    <div
      id="footer"
      className={vertical ? "footerContainerMobile" : "footerContainerPC"}
    >
      <p className="p1">
        <b>Lautaro Quiroga</b>
      </p>
      <p className="p2">
        Ciudad de Córdoba. Córdoba - Argentina
        <br />
      </p>
      <p className="p3">Copyright © | Todos los derechos reservados.</p>
    </div>
  );
}
