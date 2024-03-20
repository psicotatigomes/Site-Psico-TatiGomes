import React from "react";
import ContactForm from "../ContactForm";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Contato</h2>
      <p>
        Eu gostaria de ouvir de você. Envie uma mensagem e começaremos esta
        conversa em direção à sua <br /> jornada de autocuidado.
      </p>
      <ContactForm />
    </section>
  );
}

export default Contact;
