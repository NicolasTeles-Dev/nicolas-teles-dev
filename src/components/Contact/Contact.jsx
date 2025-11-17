import "./Contact.css";
import {
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaMailchimp,
  FaVoicemail,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contato</h2>
      <p>Quer conversar sobre um projeto? Me chame!</p>

      <div className="contact-buttons">
        <a href="mailto:nicolas.gpteles@gmail.com">
          <button className="btn">
            <FaGoogle />
            <span>Enviar e-mail</span>
          </button>
        </a>

        <a
          href="https://github.com/NicolasTeles-Dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn icon-btn github">
            <FaGithub /> <span>GitHub</span>
          </button>
        </a>

        <a
          href="https://www.linkedin.com/in/nicolas-teles/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn icon-btn linkedin">
            <FaLinkedin /> <span>LinkedIn</span>
          </button>
        </a>

        <a
          href="https://www.instagram.com/nicolas_gpteles/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn icon-btn instagram">
            <FaInstagram /> <span>Instagram</span>
          </button>
        </a>
      </div>
    </section>
  );
}
