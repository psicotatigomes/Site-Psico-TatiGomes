import "./styles.scss";
import Image from "next/image";
import { poppins } from "@/app/fonts";

function ContactForm() {
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
            +1012 3456 789
          </a>
          <a>
            <span>
              <Image src="/email.svg" width={24} height={24} alt="Email icon" />
            </span>
            psi.tatigomes@gmail.com
          </a>
        </div>
        <div className="adornament circle-1"></div>
        <div className="adornament circle-2"></div>
      </div>
      <div className="form__fields">
        <p className="input-wrapper">
          <label htmlFor="name">
            Seu nome
            <input type="text" id="name" name="name" />
          </label>
        </p>
        <p className="input-wrapper">
          <label htmlFor="name">
            Seu nome
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Deixe sua mensagem"
            />
          </label>
        </p>
        <p className="button-wraper">
          <button className="button">Enviar mensagem</button>
        </p>
      </div>
    </div>
  );
}

export default ContactForm;
