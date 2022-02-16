import { AiFillStar } from "react-icons/ai";
function Card(props) {
  return (
    <div className="card">
      {props.openSpots === 0 && <div className="card__soldInfo">sold out</div>}
      <img
        src={`../assets/${props.img}`}
        className="card__photo"
        alt="kate zaferes photo"
      />
      <div>
        <p className="card__info">
          <AiFillStar />
          {props.rating} {props.reviewCount} {props.country}
        </p>
        <p className="card__info">{props.title}</p>
        <p className="card__info">Form {props.price}$/person</p>
      </div>
    </div>
  );
}
export default Card;
