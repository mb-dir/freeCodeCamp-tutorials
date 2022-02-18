import data from "../data.js";
import Card from "./Card.js";

const CardsList = data.map(cardInfo => {
  return <Card cardInfo={cardInfo} />;
});

function Main() {
  return <main className="main">{CardsList}</main>;
}
export default Main;
