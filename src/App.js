import { useState } from "react";

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@@#$%^&*()}{][;:,.></?";
let passwordLenght = 6;
let inString = "";

function App() {
  let [password, setPassword] = useState("");
  const [lowerCaseAdded, setLowerCaseAdded] = useState(false);
  const [upperCaseAdded, setUpperCasAdded] = useState(false);
  const [numAdded, setnumAdded] = useState(false);
  const [symbolsAdded, setSymbolsAdded] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const generateSmallCase = (string, condition) => {
    if (condition) inString += string;
  };
  generateSmallCase(lowerCase, lowerCaseAdded);
  generateSmallCase(upperCas, upperCaseAdded);
  generateSmallCase(numbers, numAdded);
  generateSmallCase(symbols, symbolsAdded);
  const generatePassword = () => {
    if (isFinished) {
      for (let i = 0; i < passwordLenght; i++) {
        password += inString[Math.floor(Math.random() * inString.length)];
      }
    }
  };
  generatePassword();

  return (
    <div>
      <h1 className="header">this is the random password generator</h1>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <h1 className="results">
          <input
            type="checkbox"
            value={lowerCaseAdded}
            onChange={() => setLowerCaseAdded(true)}
          />
          abcd
        </h1>
        <h1 className="results">
          <input
            type="checkbox"
            value={upperCaseAdded}
            onChange={() => setUpperCasAdded(true)}
          />
          ABCI
        </h1>
        <h1 className="results">
          <input
            type="checkbox"
            value={numAdded}
            onChange={() => setnumAdded(true)}
          />
          0123
        </h1>
        <h1 className="results">
          <input
            type="checkbox"
            value={symbolsAdded}
            onChange={() => setSymbolsAdded(true)}
          />
          $#&!
        </h1>
      </div>
      <div>
        <button onClick={() => setIsFinished(true)}>generate</button>
        <button>reset</button>
      </div>
    </div>
  );
}

export default App;
