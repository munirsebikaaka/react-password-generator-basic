import { useState } from "react";

function App() {
  let [password, setPassword] = useState("");
  const [length, setLength] = useState(0);
  const [isLowerCaseAdded, setIsLowerCaseAdded] = useState(false);
  const [isUpperCaseAdded, setIsUpperCaseAdded] = useState(false);
  const [isNumbersAdded, setIsNumberAdded] = useState(false);
  const [isSymbolsAdded, setIsSymbolsAdded] = useState(false);
  const [allSelected, setAllSelected] = useState(false);
  // function generatePassword(
  //   length,
  //   isLowerCaseAdded,
  //   isUpperCaseAdded,
  //   isNumbersAdded,
  //   isSymbolsAdded
  // ) {
  //   const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  //   const upperCas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //   const numbers = "0123456789";
  //   const symbols = "!@@#$%^&*()}{][;:,.></?";
  //   let AllChars = "";
  //   let password = "";

  //   AllChars += isLowerCaseAdded ? lowerCase : "";
  //   AllChars += isUpperCaseAdded ? upperCas : "";
  //   AllChars += isNumbersAdded ? numbers : "";
  //   AllChars += isSymbolsAdded ? symbols : "";

  //   for (let i = 0; i < length; i++) {
  //     password += AllChars[Math.floor(Math.random() * AllChars.length)];
  //   }
  //   return password;
  // }
  // const password = generatePassword(
  //   length,
  //   isLowerCaseAdded,
  //   isUpperCaseAdded,
  //   isNumbersAdded,
  //   isSymbolsAdded
  // );

  function seeIfItWorks() {
    let str = "";
    let AllChars = "";
    if (isLowerCaseAdded) str += "abcdefghijklmnopqrstuvwxyz";
    if (isUpperCaseAdded) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isNumbersAdded) str += "0123456789";
    if (isSymbolsAdded) str += ",.><)(&^%%$#";

    for (let i = 0; i < length; i++) {
      if (allSelected && length > 6)
        AllChars += str[Math.floor(Math.random() * str.length)];
    }
    return AllChars;
  }

  password = seeIfItWorks();

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    setPassword("");
    setIsLowerCaseAdded(false);
    setIsUpperCaseAdded(false);
    setIsNumberAdded(false);
    setIsSymbolsAdded(false);
    setAllSelected(false);
    setLength(0);
  };

  return (
    <div className="app">
      <h1 className="header"> password generator</h1>

      <div className="passCell">
        <p>{password}</p>
        <button onClick={copyPassword}>copy</button>
      </div>

      <div className="mainBody">
        <div>
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
            value={isLowerCaseAdded}
            onChange={() =>
              setIsLowerCaseAdded((isLowerCaseAdded) => !isLowerCaseAdded)
            }
          />
          <span>Include lowercase letters</span>
        </p>
        <p className="results">
          <input
            type="checkbox"
            value={isUpperCaseAdded}
            onChange={() =>
              setIsUpperCaseAdded((isUpperCaseAdded) => !isUpperCaseAdded)
            }
          />
          <span>Include uppercase letters</span>
        </p>
        <p className="results">
          <input
            type="checkbox"
            value={isNumbersAdded}
            onChange={() =>
              setIsNumberAdded((isNumbersAdded) => !isNumbersAdded)
            }
          />
          <span>Include numbers</span>
        </p>
        <p className="results">
          <input
            type="checkbox"
            value={isSymbolsAdded}
            onChange={() =>
              setIsSymbolsAdded((isSymbolsAdded) => !isSymbolsAdded)
            }
          />
          <span>Include symbols</span>
        </p>

        <div>
          <button onClick={() => setAllSelected(true)} className="gen">
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
