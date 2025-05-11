import React from "react";

function Hero() {
  return (
    <section className="hero" id="hero">
      <video autoPlay muted loop className="hero-video">
        <source src="hero-video.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
      <div className="text-container">
        <h1 className="main-text">
          <small className="eyebrown-text">psicóloga</small>
          <span>Tatiana</span> <span>Gomes</span>
        </h1>
        <p>
          <a
            className="button"
            href={`https://api.whatsapp.com/send?phone=5513996188808&text=Olá, gostaria de agendar um primeiro contato!`}
          >
            Entre em contato!
          </a>
        </p>
        <p className="subtitle">
          Encontre o caminho para uma vida leve e plena
        </p>
      </div>
    </section>
  );
}

export default Hero;
