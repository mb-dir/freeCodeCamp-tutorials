import photoSrc from "./assets/katie-zaferes.png";
import { AiFillStar } from "react-icons/ai";
function Card() {
  return (
    <div className="card">
      <img src={photoSrc} className="card__photo" alt="kate zaferes photo" />
      <div>
        <p className="card__info">
          <AiFillStar />
          5.0(6) USA
        </p>
        <p className="card__info">Life lessons with Katie Zaferes</p>
        <p className="card__info">Form 136$/person</p>
      </div>
    </div>
  );
}
export default Card;
