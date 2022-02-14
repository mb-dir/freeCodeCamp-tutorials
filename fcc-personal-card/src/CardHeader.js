import photoSrc from "./assets/me.jpg";
function CardHeader() {
  return (
    <header className="cardHeader">
      <img src={photoSrc} className="cardHeader__photo" alt="photo of myself" />
      <h1 className="cardHeader__name">Michał Bysiewicz</h1>
      <p className="cardHeader__info">(Future) Front-end developer</p>
      <p className="cardHeader__info cardHeader__info--smaller">
        michal.bysiewicz.kontakt@gmail.com
      </p>
      <a className="mailto" href="mailto: bysiewiczmichal@onet.pl">
        Email
      </a>
      <a
        className="linkedin"
        href="https://www.linkedin.com/in/micha%C5%82-bysiewicz-b02a78231/"
        target="_blank"
      >
        Linkedin
      </a>
    </header>
  );
}
export default CardHeader;
