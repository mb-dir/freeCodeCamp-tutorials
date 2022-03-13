import Die from "./Die";

function App() {
  return (
    <main className="mainContainer">
      <div className="dieContainer">
        <Die number={1} />
        <Die number={5} />
        <Die number={1} />
        <Die number={3} />
        <Die number={2} />
        <Die number={1} />
        <Die number={4} />
        <Die number={3} />
        <Die number={6} />
        <Die number={1} />
      </div>
    </main>
  );
}

export default App;
