import React, { useState, useEffect } from "react";
import iconoWpp from "../multimedia/icon-wpp.png";
import iconoLd from "../multimedia/icon-linkedin.png";

export default function Contacto() {
  const vertical = window.innerHeight > window.innerWidth;
  const [alerta, setAlerta] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (alerta) {
      const timeout = setTimeout(() => {
        setAlerta(false);
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [alerta]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formDataToSend = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formDataToSend,
      });
      if (response.ok) {
        setAlerta(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error al enviar el formulario", error);
    }
  };

  return (
    <section
      className={vertical ? "contactoMobile" : "contactoPC"}
      id="contacto"
    >
      <h1 data-section="contacto" data-value="title">
        Contacto
      </h1>

      <div className="container--contacto">
        <div>
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
        </div>

        {alerta && (
          <div className="alertaContainer">
            <p>Mensaje enviado con éxito</p>
          </div>
        )}
        <form
          id="form"
          className="form-contact"
          action="https://formsubmit.co/lautiquiroga10@gmail.com"
          method="POST"
          name="contacto-portafolio"
          onSubmit={handleSubmit}
        >
          <input
            type="hidden"
            name="_subject"
            value="Nuevo correo del PORTAFOLIO"
          />
          <input type="hidden" name="_captcha" value="false" />

          <input
            id="nombre"
            type="text"
            name="name"
            placeholder="Escribe tu nombre"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Escribe tu email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <textarea
            id="mensaje"
            cols="20"
            rows="4"
            name="message"
            placeholder="Escribe un mensaje"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>

          <div className="btn_form--contacto">
            <button
              id="btn-enviar"
              type="submit"
              data-section="contacto"
              data-value="btn-enviar"
            >
              ENVIAR
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
