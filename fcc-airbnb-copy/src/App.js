import Header from "./Header";
import Hero from "./Hero";
import Card from "./Card";

import data from "./data";

function App() {
  const cardsComponents = data.map(data => {
    return (
      <Card
        img={data.coverImg}
        rating={data.rating}
        reviewCount={data.reviewCount}
        country={data.location}
        title={data.title}
        price={data.price}
      />
    );
  });

  return (
    <div>
      <Header />
      <Hero />
      {cardsComponents}
    </div>
  );
}
export default App;
