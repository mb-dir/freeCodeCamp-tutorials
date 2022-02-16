import Header from "./Header";
import Hero from "./Hero";
import Card from "./Card";

import data from "./data";

function App() {
  const cardsComponents = data.map(data => {
    return (
      <Card
        img={data.coverImg}
        rating={data.stats.rating}
        reviewCount={data.stats.reviewCount}
        country={data.location}
        title={data.title}
        price={data.price}
        key={data.id}
      />
    );
  });

  return (
    <div>
      <Header />
      <Hero />
      <div className="cardContainer">{cardsComponents}</div>
    </div>
  );
}
export default App;
