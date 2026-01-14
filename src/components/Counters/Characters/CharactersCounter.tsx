function CharactersCounter({ text, isExcludeSpaces }) {
  function count() {
    return isExcludeSpaces
      ? text.split("").filter((el) => el !== " ").length
      : text.length;
  }
  return (
    <div
      className={`rounded-lg bg-purple-400 w-full bg-[url(${"./src/assets/pattern-character-count.svg"})] bg-no-repeat bg-right py-7 px-5`}
    >
      <h2 className="text-4xl font-bold">{count()}</h2>
      <p className="mt-2 text-lg font-medium">Total Characters</p>
    </div>
  );
}

export default CharactersCounter;
