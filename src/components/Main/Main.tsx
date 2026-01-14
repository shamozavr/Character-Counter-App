import { useState } from "react";
import infoIcon from "../../assets/info.svg";

function Main({ text, setText, setIsExcludeSpaces, wordsCount }) {
  const [isLimited, setIsimited] = useState(false);
  const [charLimit, setCharLimit] = useState(Infinity);

  function textAreaChangeHandler(evt) {
    setText(evt.target.value);
  }

  function charLimitChangeHndler(evt) {
    setCharLimit(evt.target.value);
  }

  return (
    <div>
      <div>
        <textarea
          autoFocus
          maxLength={isLimited ? charLimit : Infinity}
          value={text}
          onChange={(evt) => textAreaChangeHandler(evt)}
          placeholder="Type in your text"
          className="w-full p-4 mt-10 border rounded-lg shadow-md bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 focus:outline-none focus:bg-neutral-200 dark:focus:bg-neutral-700 focus:ring-1
          border-neutral-200 dark:border-neutral-700 focus:border-purple-500 focus:outline-purple-500 focus:shadow-purple-500/50"
          rows={6}
        ></textarea>
        {isLimited && text.length >= charLimit && (
          <div>
            <img src={infoIcon} alt="info" />
            <span>
              Limit reached! Your text exceeds {charLimit} characters.
            </span>
          </div>
        )}
      </div>
      <div className="grid gap-2 mt-3 md:flex md:items-center md:gap-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            onChange={() => setIsExcludeSpaces((prev) => !prev)}
          />
          <span>Exclude spaces</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" onClick={() => setIsimited((prev) => !prev)} />
          <span>Set character limit</span>
        </label>
        {isLimited && (
          <input type="number" onChange={(evt) => charLimitChangeHndler(evt)} />
        )}
        <span>
          Approx. reading time(Avg. 50WPM): {(wordsCount / 50).toFixed(1)}{" "}
          minutes
        </span>
      </div>
    </div>
  );
}

export default Main;
