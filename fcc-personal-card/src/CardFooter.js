import { FaLinkedin, FaGithub } from "react-icons/fa";
function CardFooter() {
  return (
    <footer className="cardFooter">
      <a
        href="https://www.linkedin.com/in/micha%C5%82-bysiewicz-b02a78231/"
        target="_blank"
        className="cardFooter__link"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/mb-dir"
        target="_blank"
        className="cardFooter__link"
      >
        <FaGithub />
      </a>
    </footer>
  );
}
export default CardFooter;
