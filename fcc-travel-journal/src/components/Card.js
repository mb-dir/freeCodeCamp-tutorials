import { GoLocation } from "react-icons/go";
function Card(props) {
  return (
    <div className="card">
      <div className="card__imgContainer">
        <img
          src={props.cardInfo.imageUrl}
          className="card__img"
          alt={`Photo of ${props.cardInfo.title}`}
        />
      </div>
      <div className="card__description">
        <header className="card__header">
          <p className="card__countryInfo">
            <GoLocation className="card__icon" /> {props.cardInfo.location}
            <a
              href={props.cardInfo.googleMapsUrl}
              className="card__link"
              target="_blank"
            >
              View in google maps
            </a>
          </p>
          <h2 className="card__visitedPlace">{props.cardInfo.title}</h2>
          <p className="card__visitDate">
            {props.cardInfo.startDate} - {props.cardInfo.endDate}
          </p>
        </header>
        <p className="card__info">{props.cardInfo.description}</p>
      </div>
    </div>
  );
}
export default Card;
