import React from "react";
import check from "../multimedia/check.png";
import sopTec from "../multimedia/sopTec2.png";

export default function Planes() {
  return (
    <section id="planes" className="planesContainer">
      <div className="planesYPrecios">
        <div className="text">
          <p className="titulo">Planes y Precios</p>
          <p>
            ¡Estaremos encantados de darte la página perfecta para vos y tu
            empresa!
            <br />
            Te presentamos nuestros tres planes estándar para ofrecer, aunque
            también por supuesto se puede crear un <b>
              plan personalizado
            </b>{" "}
            según tus necesidades. Si este es tu caso, simplemente dirigite a la
            sección de "Contacto" y contanos lo que tenés en mente para que
            podamos enviarte un presupuesto.
          </p>
        </div>
      </div>

      <span className="bordeResp"></span>
      <div className="planes">
        <div className="plan">
          <p className="nombrePlan">BRONCE</p>
          <p className="text">
            Ideal para su primera página, una opción económica pero
            perfectamente funcional en la que mostrar toda su informacion,
            productos y formas de contacto.
          </p>
          <div className="detalles detallesBronce">
            <div className="lista">
              <p>
                <img src={check} alt="check" className="check" />
                Diseño tipo landing page o multipágina.
                <br />
                <br />
                <img src={check} alt="check" className="check" />
                Hasta 4 secciones.
                <br />
                <br />
                <img src={check} alt="check" className="check" />
                Vista responsive (adaptable a celulares, tablets, computadora).
                <br />
                <br />
                <img src={check} alt="check" className="check" />
                Formulario de contacto.
                <br />
                <br />
              </p>
            </div>
            <div className="precio">
              <div className="prec">
                <p className="moneda"> AR$</p>
                <p className="precioNum">50.000 </p>
              </div>
              <p className="aclaracion">(Precio final)</p>
            </div>
          </div>
          <a href="#contacto">
            <button>LO QUIERO</button>
          </a>
        </div>

        <span className="bordeResp"></span>
        <div className="plan planOro">
          <p className="nombrePlan ">ORO</p>
          <p className="text">
            Especializado para comercios en constante movimiento de clientes,
            precios, información... Mejorará ampliamente el control de venta y
            vos mismo vas a poder gestionar cada dato.
          </p>
          <div className="detalles detallesOro">
            <div className="lista">
              <p>
                <img src={check} alt="check" className="check" />
                Diseño tipo landing page o multipágina.
                <br />
                <br />
                <img src={check} alt="check" className="check" />
                Hasta 8 secciones.
                <br />
                <br />
                <img src={check} alt="check" className="check" />
                Vista responsive (adaptable a celulares, tablets, computadora).
                <br />
                <br />
                <img src={check} alt="check" className="check" />
                Formularios ilimitados (contacto, cotización, etc).
                <br />
                <br />
                <img src={check} alt="check" className="check" />
                Tema claro y oscuro.
                <br />
                <br />
                <img src={check} alt="check" className="check" />
                Carga de información mas abundante (estilo Ecommerce por
                ejemplo).
                <br />
                <br />
                <img src={check} alt="check" className="check" />
                Autogestionable y sistema de registro e inicio de sesión.
                <br />
                <br />
              </p>
            </div>
            <div className="precio">
              <div className="prec">
                <p className="moneda"> AR$</p>
                <p className="precioNum">120.000 </p>
              </div>
              <p className="aclaracion">(Precio final)</p>
            </div>
          </div>
          <a href="#contacto">
            <button className="ORObtn">LO QUIERO</button>
          </a>
        </div>

        <span className="bordeResp"></span>
        <div className="plan">
          <p className="nombrePlan">PLATA</p>
          <p className="text">
            Enfocado en pequeñas empresas que necesitan hacer un listado de
            productos o servicios especificos, ideal para llegar de mejor manera
            al cliente y agilizar procesos de ventas.
          </p>
          <div className="detalles detallesPlata">
            <div className="lista">
              <p>
                <img src={check} alt="check" className="check" />
                Diseño tipo landing page o multipágina.
                <br />
                <br />
                <img src={check} alt="check" className="check" />
                Hasta 6 secciones.
                <br />
                <br />
                <img src={check} alt="check" className="check" />
                Vista responsive (adaptable a celulares, tablets, computadora).
                <br />
                <br />
                <img src={check} alt="check" className="check" />
                Hasta 3 formularios (contacto, cotizacion, etc).
                <br />
                <br />
                <img src={check} alt="check" className="check" />
                Tema claro y oscuro.
                <br />
                <br />
                <img src={check} alt="check" className="check" />
                Carga de información mas abundante (estilo Ecommerce por
                ejemplo).
              </p>
            </div>
            <div className="precio">
              <div className="prec">
                <p className="moneda"> AR$</p>
                <p className="precioNum">70.000 </p>
              </div>
              <p className="aclaracion">(Precio final)</p>
            </div>
          </div>
          <a href="#contacto">
            <button>LO QUIERO</button>
          </a>
        </div>
        <span className="bordeResp"></span>
      </div>
      <div className="soporteTec">
        <img src={sopTec} alt="sopTec" className="sopTecImg" />
        <div className="detalles">
          <p className="titulo">Soporte Técnico</p>
          <div className="text">
            Brindamos un soporte técnico <b>opcional</b> con el que garantizamos
            rápida atención, flexibilidad en horarios, resolución de cualquier
            problema/fallo y actualizaciones de información en tu página web.
          </div>
        </div>
        <div className="precio">
          <div className="prec">
            <p className="moneda"> AR$</p>
            <p className="precioNum">30.000 </p>
          </div>
          <p className="aclaracion">(Pago mensual)</p>
        </div>
      </div>
    </section>
  );
}
