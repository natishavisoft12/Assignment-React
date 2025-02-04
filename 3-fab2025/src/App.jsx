import React, { useState } from "react";
import "./App.css";

const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
function App() {
  // State to hold the number of dice and the results of the dice roll
  const [numDice, setNumDice] = useState(1);
  const [diceRolls, setDiceRolls] = useState([]);

  // Function to handle the dice roll
  const handleRoll = () => {
    if (numDice >= 1 && numDice <= 12) {
      const rolls = [];
      for (let i = 0; i < numDice; i++) {
        rolls.push(Math.floor(Math.random() * 6) + 1);
      }
      console.log(rolls);
      
      setDiceRolls(rolls);
    }
  };

  // Function to update the number of dice
  const handleChange = (e) => {
    const value = Math.min(Math.max(e.target.value, 1), 12); // Ensure it's between 1 and 12
    setNumDice(value);
  };

  return (
    <div className="App">
      <h1>Dice Roller</h1>
      <div>
        <label htmlFor="num_dice">Number of Dice (1-12): </label>
        <input
          type="number"
          id="num_dice"
          value={numDice}
          onChange={handleChange}
          min="1"
          max="12"
        />
        <button onClick={handleRoll}>Roll</button>
      </div>
      
      {diceRolls.length > 0 && (
        <div className="dice-results">
          {diceRolls.map((roll, index) => (
            <div key={index} className="dice">
              {diceFaces[roll-1]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
