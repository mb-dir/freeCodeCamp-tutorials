import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

function App() {
  function allNewDice() {
    const newDice = [];
    //Return an array(10 elements) with random numbers from 1 to 6
    for (let i = 0; i < 10; i++) {
      newDice[i] = {
        number: Math.floor(Math.random() * (6 - 1)) + 1,
        isHeld: false,
        id: nanoid(),
      };
    }
    return newDice;
  }

  //Generate 10 Die components based on generated arrays of random numbers
  const [ diceNumbers, setDiceNumbers ] = React.useState(allNewDice());
  const diceList = diceNumbers.map(el => {
    return (
      <Die
        key={el.id}
        number={el.number}
        isHeld={el.isHeld}
        id={el.id}
        holdDice={holdDice}
      />
    );
  });

  function roll() {
    setDiceNumbers(prevDiceArr => {
      return prevDiceArr.map(die => {
        if (die.isHeld) {
          return die;
        } else {
          const newRandomNumber = Math.floor(Math.random() * (6 - 1)) + 1;
          return { ...die, number: newRandomNumber, id: nanoid() };
        }
      });
    });
  }

  function holdDice(id) {
    setDiceNumbers(prevDiceArray => {
      return prevDiceArray.map(die => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      });
    });
  }

  return (
    <main className="mainContainer">
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dieContainer">{diceList}</div>
      <button className="rollBtn" onClick={roll}>
        Roll
      </button>
    </main>
  );
}

export default App;
