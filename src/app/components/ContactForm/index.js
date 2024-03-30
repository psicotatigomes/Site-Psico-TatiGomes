"use client";
import { useState } from "react";
import "./styles.scss";
import Image from "next/image";
import { poppins } from "@/app/fonts";

function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const userMessage = `Olá, meu nome é ${name}. ${message}`;
  return (
    <div className={`${poppins.className} form`}>
      <div className="form__infos">
        <div className="infos__header">
          <p className="infos__title">Informações de contato</p>
          <p className="infos__subtext">Entre em contato comigo!</p>
        </div>
        <div className="infos__links">
          <a>
            <span>
              <Image
                src="/phone-call.svg"
                width={24}
                height={24}
                alt="Telephone icon"
              />
            </span>
            +55 13 99618-8808
          </a>
          <a>
            <span>
              <Image src="/email.svg" width={24} height={24} alt="Email icon" />
            </span>
            consultorio.psi.tatigomes@gmail.com
          </a>
        </div>
        <div className="adornament circle-1"></div>
        <div className="adornament circle-2"></div>
      </div>
      <div className="form__fields">
        <p className="input-wrapper">
          <label htmlFor="name">
            Seu nome
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </p>
        <p className="input-wrapper">
          <label htmlFor="name">
            Sua mensagem
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Deixe sua mensagem"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </p>
        <p className="button-wraper">
          <a
            className="button"
            href={`https://api.whatsapp.com/send?phone=5513996188808&text=${userMessage}`}
          >
            Enviar mensagem
          </a>
        </p>
      </div>
    </div>
  );
}

export default ContactForm;
