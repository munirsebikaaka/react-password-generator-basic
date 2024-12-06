import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";

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
        <p>{allSelected ? password : "Password"}</p>
        <FaRegCopy onClick={copyPassword} className="icon" />
      </div>

      <div className="mainBody">
        <div>
          <div className="length">
            <h5
              className={
                (allSelected && !length) || (allSelected && length < 6)
                  ? "wrong"
                  : "collect"
              }
            >
              {!allSelected
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

        <div className="strength">
          <p className="str">STRENGTH</p>
          <div>
            <p className="weight">
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
          <button onClick={() => setAllSelected(true)} className="gen">
            generate <IoArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
