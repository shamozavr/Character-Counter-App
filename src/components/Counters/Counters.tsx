import CharactersCounter from "./Characters/CharactersCounter";
import WordsCounter from "./Words/WordsCounter";
import SentenceCounter from "./Setence/SentenceCounter";

function Counters({ text, isExcludeSpaces, wordsCount }) {
  return (
    <div className="grid gap-4 mt-10 text-neutral-900 md:grid-cols-3">
      <CharactersCounter text={text} isExcludeSpaces={isExcludeSpaces} />
      <WordsCounter wordsCount={wordsCount} />
      <SentenceCounter text={text} />
    </div>
  );
}

export default Counters;
