function SentenceCounter({ text }) {
  function count() {
    return text
      .replace(/[\r\n]+/g, " ")
      .split(/[.!?]+(\s|$)/)
      .filter(Boolean)
      .filter((el) => el.split("").some((char) => char !== " ")).length;
  }
  return (
    <div>
      <span>{count()}</span>
      <span>Total Sentences</span>
    </div>
  );
}

export default SentenceCounter;
