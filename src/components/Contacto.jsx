import React, { useState } from "react";

export default function Contacto() {
  return (
    <section class="contacto" id="contacto">
      <h1 data-section="contacto" data-value="title">
        Contacto
      </h1>

      <div
        class="container_box--contacto"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div
          class="container_box--contacto"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <div class="container--contacto">
            <form
              id="form"
              class="form-contact"
              action="https://formsubmit.co/lautiquiroga10@gmail.com"
              method="POST"
              name="contacto-portafolio"
              netlify
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
                placeholder="Ingrese su nombre..."
                title="Este campo solo acepta letras y espacios en blanco."
                pattern="^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$"
                required
              />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Ingrese su email..."
                pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
                required
              />
              <textarea
                id="mensaje"
                cols="20"
                rows="4"
                name="message"
                placeholder="Déjame un mensaje!"
                required
              ></textarea>

              <div class="btn_form--contacto">
                <button
                  id="btn-enviar"
                  type="submit"
                  data-section="contacto"
                  data-value="btn-enviar"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
