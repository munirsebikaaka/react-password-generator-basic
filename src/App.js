import { useState } from "react";

function App() {
  const [passwords, setPassword] = useState("");
  function generatePassword(
    length,
    isLowerCaseAdded,
    isUpperCaseAdded,
    isNumbersAdded,
    isSymbolsAdded
  ) {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@@#$%^&*()}{][;:,.></?";
    let AllChars = "";
    let password = "";

    AllChars += isLowerCaseAdded ? lowerCase : "";
    AllChars += isUpperCaseAdded ? upperCas : "";
    AllChars += isNumbersAdded ? numbers : "";
    AllChars += isSymbolsAdded ? symbols : "";

    for (let i = 0; i < length; i++) {
      password += AllChars[Math.floor(Math.random() * AllChars.length)];
    }
    return password;
  }

  const length = 12;
  const isLowerCaseAdded = true;
  const isUpperCaseAdded = true;
  const isNumbersAdded = true;
  const isSymbolsAdded = true;

  const password = generatePassword(
    length,
    isLowerCaseAdded,
    isUpperCaseAdded,
    isNumbersAdded,
    isSymbolsAdded
  );
  function setP() {
    setPassword(password);
  }
  return (
    <div className="app">
      <h1 className="header"> password generator</h1>

      <div className="passCell">
        <p>{password}</p>
      </div>

      <div className="mainBody">
        <div>
          <input className="range" type="range" min="0" max="15" />
        </div>
        <p className="results">
          <input type="checkbox" />
          <span>Include lowercase letters</span>
        </p>
        <p className="results">
          <input type="checkbox" />
          <span>Include uppercase letters</span>
        </p>
        <p className="results">
          <input type="checkbox" />
          <span>Include numbers</span>
        </p>
        <p className="results">
          <input type="checkbox" />
          <span>Include symbols</span>
        </p>

        <div>
          <button className="gen">
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
        </div>
      </div>
    </div>
  );
}

export default App;
