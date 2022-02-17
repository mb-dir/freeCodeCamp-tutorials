import { GoLocation } from "react-icons/go";
function Card() {
  return (
    <div className="card">
      <div className="card__imgContainer">
        <img
          src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="card__img"
          alt=""
        />
      </div>
      <div className="card__description">
        <header className="card__header">
          <p className="card__countryInfo">
            <GoLocation className="card__icon" /> Japan
            <a
              href="https://goo.gl/maps/1DGM5WrWnATgkSNB8"
              className="card__link"
              target="_blank"
            >
              View in google maps
            </a>
          </p>
          <h2 className="card__visitedPlace">Mount Fuji</h2>
          <p className="card__visitDate">12 Jan, 2021 - 24 Jan, 2021</p>
        </header>
        <p className="card__info">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
}
export default Card;
