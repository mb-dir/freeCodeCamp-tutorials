import photoSrc from "./assets/katie-zaferes.png";

import Header from "./Header";
import Hero from "./Hero";
import Card from "./Card";
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Card
        img={photoSrc}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}
export default App;
