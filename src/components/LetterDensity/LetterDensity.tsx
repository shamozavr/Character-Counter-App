import { useState } from "react";
import LetterDensityItem from "./LetterDensityItem/LetterDensityItem";

function LetterDensity({ lettersMap, isExcludeSpaces, text }) {
  const [isListOpened, setIsListOpened] = useState(false);

  const total = isExcludeSpaces
    ? text
        .toUpperCase()
        .split("")
        .filter((el) => el !== " " && /^[a-zA-Zа-яА-ЯёЁ]+$/).length
    : text
        .toUpperCase()
        .split("")
        .filter((el) => /^[a-zA-Zа-яА-ЯёЁ]+$/).length;

  return (
    <div>
      <h3>Letter Density</h3>
      {text.length === 0 && (
        <span>No characters found. Start typing to see letter density.</span>
      )}
      <div>
        <ul>
          {isListOpened
            ? Object.keys(lettersMap).map((key, ind) => {
                return (
                  <LetterDensityItem
                    key={ind}
                    char={key}
                    count={lettersMap[key]}
                    percent={`${((lettersMap[key] / total) * 100).toFixed(2)}%`}
                  />
                );
              })
            : Object.keys(lettersMap)
                .splice(0, 5)
                .map((key, ind) => {
                  return (
                    <LetterDensityItem
                      key={ind}
                      char={key}
                      count={lettersMap[key]}
                      percent={`${((lettersMap[key] / total) * 100).toFixed(
                        2
                      )}%`}
                    />
                  );
                })}
        </ul>
      </div>
      {isListOpened ? (
        <button onClick={() => setIsListOpened((prev) => !prev)}>
          Show less ^
        </button>
      ) : (
        <button onClick={() => setIsListOpened((prev) => !prev)}>
          See more V
        </button>
      )}
    </div>
  );
}

export default LetterDensity;
