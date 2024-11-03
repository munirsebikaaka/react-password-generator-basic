import { useState } from "react";

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@@#$%^&*()}{][;:,.></?";
let inString = "";

function App() {
  let [length, setLength] = useState(0);
  let [password, setPassword] = useState("");
  const [numAdded, setnumAdded] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [symbolsAdded, setSymbolsAdded] = useState(false);
  const [upperCaseAdded, setUpperCasAdded] = useState(false);
  const [lowerCaseAdded, setLowerCaseAdded] = useState(false);

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
    setLength(0);
  };

  return (
    <div className="app">
      <h1 className="header"> password generator</h1>

      <div className="passCell">
        <p>{isFinished ? password : "codesmann"}</p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#131218"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#a4ffaf"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
          />
        </svg>
      </div>

      <div className="mainBody">
        <div>
          <div className="length">
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

            <span>{length}</span>
          </div>
          <input
            className="range"
            type="range"
            min="0"
            max="15"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <p className="results">
          <input
            type="checkbox"
            value={lowerCaseAdded}
            onChange={() => setLowerCaseAdded(true)}
          />
          <span>Include lowercase letters</span>
        </p>
        <p className="results">
          <input
            type="checkbox"
            value={upperCaseAdded}
            onChange={() => setUpperCasAdded(true)}
          />
          <span>Include uppercase letters</span>
        </p>
        <p className="results">
          <input
            type="checkbox"
            value={numAdded}
            onChange={() => setnumAdded(true)}
          />
          <span>Include numbers</span>
        </p>
        <p className="results">
          <input
            type="checkbox"
            value={symbolsAdded}
            onChange={() => setSymbolsAdded(true)}
          />
          <span>Include symbols</span>
        </p>

        <div className="strength">
          <p>STRENGTH</p>
          <div>
            <p>
              {length <= 6
                ? "TOO WEAK"
                : length <= 8
                ? "WEAK"
                : length <= 12
                ? "MEDIUM"
                : length > 12
                ? "STRONG"
                : ""}
            </p>
            <p className="barMain">
              <span
                className={
                  length < 6
                    ? "empty"
                    : length <= 6
                    ? "tooWeak"
                    : length <= 8
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
                  length > 7
                    ? length <= 8
                      ? "weak"
                      : length <= 12
                      ? "medium"
                      : length > 12
                      ? "strong"
                      : ""
                    : "empty"
                }
              ></span>
              <span
                className={
                  length > 8
                    ? length <= 12
                      ? "medium"
                      : length > 12
                      ? "strong"
                      : ""
                    : "empty"
                }
              ></span>
              <span className={length > 12 ? "strong" : "empty"}></span>
            </p>
          </div>
        </div>
        <div>
          <button className="gen" onClick={() => setIsFinished((p) => !p)}>
            generate
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="arrow"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
          <p className="msg">
            {password.length >= 6 ? "Double click to regenerate." : ""}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
