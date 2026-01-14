import { useEffect, useState } from "react";
import Header from "./components/Header/Header.tsx";
import Main from "./components/Main/Main.tsx";
import Counters from "./components/Counters/Counters.tsx";
import LetterDensity from "./components/LetterDensity/LetterDensity.tsx";

function App() {
  const [theme, setTheme] = useState<boolean>(true);
  const [text, setText] = useState<string>("");
  const [isExcludeSpaces, setIsExcludeSpaces] = useState<boolean>(false);
  const [lettersMap, setLettersMap] = useState<object>({});
  const [wordsCount, setWordsCount] = useState<number>(0);

  useEffect(() => {
    const newMap = {};
    const lettersArr = text
      .toUpperCase()
      .split("")
      .filter((el) => /^[a-zA-Zа-яА-ЯёЁ]$/.test(el));

    lettersArr.forEach((char) => {
      Object.keys(newMap).includes(char)
        ? (newMap[char] += 1)
        : (newMap[char] = 1);
    });

    const sortedNewMap = Object.fromEntries(
      Object.entries(newMap).sort((a, b) => b[1] - a[1])
    );

    setLettersMap(sortedNewMap);
    setWordsCount(text.split(" ").filter((el) => el !== "").length);
  }, [text]);

  return (
    <main className="w-full max-w-screen-lg p-4 mx-auto">
      <Header theme={theme} setTheme={setTheme} />
      <h2 className="mt-10 text-4xl font-bold text-center">
        Analyze your text in real-time.
      </h2>
      <Main
        text={text}
        setText={setText}
        setIsExcludeSpaces={setIsExcludeSpaces}
        wordsCount={wordsCount}
      />
      <Counters
        text={text}
        isExcludeSpaces={isExcludeSpaces}
        wordsCount={wordsCount}
      />
      <LetterDensity
        text={text}
        isExcludeSpaces={isExcludeSpaces}
        lettersMap={lettersMap}
      />
    </main>
  );
}

export default App;
