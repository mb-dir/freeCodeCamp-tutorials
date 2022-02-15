import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import photoSrc from "./assets/me.jpg";
function CardHeader() {
  return (
    <header className="cardHeader">
      <img src={photoSrc} className="cardHeader__photo" alt="photo of myself" />
      <h1 className="cardHeader__name">Michał Bysiewicz</h1>
      <p className="cardHeader__info">(Future) Front-end developer</p>
      <a
        className="cardHeader__link mailto"
        href="mailto: michal.bysiewicz.kontakt@gmail.com"
      >
        <SiGmail />
        Email
      </a>
      <a
        className="cardHeader__link linkedin"
        href="https://www.linkedin.com/in/micha%C5%82-bysiewicz-b02a78231/"
        target="_blank"
      >
        <FaLinkedin />
        Linkedin
      </a>
    </header>
  );
}
export default CardHeader;
