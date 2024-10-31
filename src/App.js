import { useState, useEffect, useRef } from "react";

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@@#$%^&*()}{][;:,.></?";
let inString = "";

function App() {
  let [password, setPassword] = useState("");
  let [length, setLength] = useState(0);
  const [lowerCaseAdded, setLowerCaseAdded] = useState(false);
  const [upperCaseAdded, setUpperCasAdded] = useState(false);
  const [numAdded, setnumAdded] = useState(false);
  const [symbolsAdded, setSymbolsAdded] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [copy, setCopy] = useState(false);

  const generateSmallCase = (string, condition) => {
    if (condition) inString += string;
  };

  generateSmallCase(lowerCase, lowerCaseAdded);
  generateSmallCase(upperCas, upperCaseAdded);
  generateSmallCase(numbers, numAdded);
  generateSmallCase(symbols, symbolsAdded);
  const generatePassword = () => {
    if (isFinished) {
      if (length >= 6) {
        for (let i = 0; i < length; i++) {
          password += inString[Math.floor(Math.random() * inString.length)];
        }
      }
    }
  };
  generatePassword();

  const resetPassword = () => {
    setPassword("");
    setLowerCaseAdded(false);
    setUpperCasAdded(false);
    setnumAdded(false);
    setSymbolsAdded(false);
    setIsFinished(false);
    setLength("");
  };
  const useCopyPassword = (input) => {
    useEffect(
      function () {
        const inputEl = input.current;
        if (copy) inputEl.select();
        document.execCommand("copy");
      },
      [input]
    );
  };
  const input = useRef(null);
  useCopyPassword(input);

  return (
    <div>
      <h1 className="header">Random password generator</h1>

      <div>
        <h5
          className={
            (isFinished && !length) || (isFinished && length < 6)
              ? "wrong"
              : "collect"
          }
        >
          {!isFinished
            ? "Character length."
            : !length
            ? "Please select length!"
            : length < 6
            ? "Length must atleast have 6 digits!"
            : " Character length."}
        </h5>

        <div>
          <input
            type="range"
            min="0"
            max="15"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <span>{length}</span>
        </div>
      </div>
      <div>
        <input
          type="text"
          ref={input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => setCopy(true)}>copy</button>
      </div>
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
        <p>strength</p>
        <p>
          {length <= 6
            ? "too weak"
            : length <= 9
            ? "weak"
            : length <= 12
            ? "medium"
            : length > 12
            ? "strong"
            : ""}
        </p>
        <p className="barMain">
          <span
            className={
              password.length > 5 && length <= 6
                ? "tooWeak"
                : length <= 9
                ? "weak"
                : length <= 12
                ? "medium"
                : length > 12
                ? "strong"
                : ""
            }
          ></span>
          <span
            className={
              password.length > 5 && length <= 9
                ? "weak"
                : length <= 12
                ? "medium"
                : length > 12
                ? "strong"
                : ""
            }
          ></span>
          <span
            className={
              password.length > 5 && length <= 12
                ? "medium"
                : length > 12
                ? "strong"
                : ""
            }
          ></span>
          <span
            className={password.length > 5 && length > 12 ? "strong" : ""}
          ></span>
        </p>
      </div>
      <div>
        <button onClick={() => setIsFinished((p) => !p)}>generate</button>
        <button onClick={resetPassword}>reset</button>
      </div>
    </div>
  );
}

export default App;
