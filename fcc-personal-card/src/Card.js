import CardHeader from "./CardHeader";
import CardMain from "./CardMain";
import CardFooter from "./CardFooter";
function Card() {
  return (
    <div className="card">
      <CardHeader />
      <CardMain />
      <CardFooter />
    </div>
  );
}

export default Card;
