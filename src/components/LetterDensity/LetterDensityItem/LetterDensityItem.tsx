function LetterDensityItem({ char, count, percent }) {
  return (
    <li>
      <span>{char}</span>
      <div>range</div>
      <span>
        {count}({percent})
      </span>
    </li>
  );
}

export default LetterDensityItem;
