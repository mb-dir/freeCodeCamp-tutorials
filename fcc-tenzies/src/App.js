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

  const [ tenzies, setTenzies ] = React.useState(false);
  const [ currentRollAmount, setCurrentRollAmount ] = React.useState(0);
  const [ rollAmountStats, setRollAmountStats ] = React.useState(
    JSON.parse(localStorage.getItem("rollStatsArray")) || []
  );
  const [ timeStats, setTimeStats ] = React.useState(
    JSON.parse(localStorage.getItem("timeStats")) || []
  );
  const [ currentTime, setCurrentTime ] = React.useState(0);
  const [ isTimeoutActive, setIsTimeoutActive ] = React.useState(false);

  React.useEffect(
    () => {
      //There is an index of first element which has isHeld value === false, if there is no such an element isHeldFalseIndex === -1, which means each of die is hold and user won the game
      const isHeldFalseIndex = diceNumbers.findIndex(die => {
        return !die.isHeld;
      });

      //Imperative way to check if all the die.number are the same
      let isAllDiceNumberTheSame = true;
      for (let i = 0; i < diceNumbers.length - 1; i++) {
        if (diceNumbers[i].number !== diceNumbers[i + 1].number) {
          isAllDiceNumberTheSame = false;
          break;
        }
      }

      if (isHeldFalseIndex === -1 && isAllDiceNumberTheSame) {
        setTenzies(true);
      }
    },
    [ diceNumbers ]
  );

  React.useEffect(
    () => {
      localStorage.setItem("rollStatsArray", JSON.stringify(rollAmountStats));
    },
    [ tenzies ]
  );

  React.useEffect(
    () => {
      let interval = null;
      if (isTimeoutActive && !tenzies) {
        interval = setInterval(() => {
          setCurrentTime(seconds => seconds + 1);
        }, 1000);
      } else if (!tenzies && !isTimeoutActive) {
        localStorage.setItem("timeStats", JSON.stringify(timeStats));
        clearInterval(interval);
        setCurrentTime(0);
      }
      return () => clearInterval(interval);
    },
    [ isTimeoutActive, currentTime ]
  );

  function roll() {
    if (tenzies) {
      setTenzies(false);
      setIsTimeoutActive(false);
      setDiceNumbers(allNewDice());
      setCurrentRollAmount(0);
      setRollAmountStats(prevRollStats => {
        return [ ...prevRollStats, currentRollAmount ];
      });
      setTimeStats(prevTimeStats => {
        return [ ...prevTimeStats, currentTime ];
      });
    } else {
      setCurrentRollAmount(prev => prev + 1);
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
  }

  function holdDice(id) {
    //Start timing after user clicks the die element
    setIsTimeoutActive(true);
    setDiceNumbers(prevDiceArray => {
      return prevDiceArray.map(die => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      });
    });
  }

  return (
    <React.Fragment>
      <main className="mainContainer">
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dieContainer">{diceList}</div>
        <button className="rollBtn" onClick={roll}>
          {tenzies ? "New game" : "Roll"}
        </button>
      </main>
      <div className="stats">
        <h2 className="stats__title">Time stats</h2>
        <div className="stats__container">
          <p className="stats__info">Current game time: {currentTime}s</p>
          <p className="stats__info">
            Max game time: {timeStats.length ? Math.max(...timeStats) : 0}s
          </p>
          <p className="stats__info">
            Min game time: {timeStats.length ? Math.min(...timeStats) : 0}s
          </p>
          <p className="stats__info">
            Sample game time:{" "}
            {timeStats.length ? (
              Math.round(
                timeStats.reduce((a, b) => a + b, 0) / timeStats.length * 100
              ) / 100
            ) : (
              0
            )}s
          </p>
        </div>
        <h2 className="stats__title">Moves stats</h2>
        <div className="stats__container">
          <p className="stats__info">
            Current roll amount: {currentRollAmount}
          </p>
          <p className="stats__info">
            Max roll amount:{" "}
            {rollAmountStats.length ? Math.max(...rollAmountStats) : 0}
          </p>
          <p className="stats__info">
            Min roll amount:{" "}
            {rollAmountStats.length ? Math.min(...rollAmountStats) : 0}
          </p>
          <p className="stats__info">
            Sample mean:
            {rollAmountStats.length ? (
              Math.round(
                rollAmountStats.reduce((a, b) => a + b, 0) /
                  rollAmountStats.length *
                  100
              ) / 100
            ) : (
              0
            )}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
