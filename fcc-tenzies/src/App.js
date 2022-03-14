import React from "react";
import Die from "./Die";

function App() {
  function allNewDice() {
    const newDice = [];
    //Return an array(10 elements) with random numbers from 1 to 6
    for (let i = 0; i < 10; i++) {
      newDice[i] = {
        number: Math.floor(Math.random() * (6 - 1)) + 1,
        isHeld: false,
      };
    }
    return newDice;
  }

  //Generate 10 Die components based on generated arrays of random numbers
  const [ diceNumbers, setDiceNumbers ] = React.useState(allNewDice());
  const diceList = diceNumbers.map(el => {
    return <Die number={el.number} isHeld={el.isHeld} />;
  });

  function roll() {
    setDiceNumbers(allNewDice());
  }

  return (
    <main className="mainContainer">
      <div className="dieContainer">{diceList}</div>
      <button className="rollBtn" onClick={roll}>
        Roll
      </button>
    </main>
  );
}

export default App;
