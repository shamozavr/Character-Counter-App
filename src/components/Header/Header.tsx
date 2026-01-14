import { LogoImage } from "../SVGs/LogoImage";
import { SunImage } from "../SVGs/SunImage";
import { MoonImage } from "../SVGs/MoonImage";

interface HeaderProps {
  theme: boolean; // `theme` — булево значение (true/false)
  setTheme: React.Dispatch<React.SetStateAction<boolean>>; // Тип для `setState` из React
}

function Header({ theme, setTheme }: HeaderProps) {
  function clickHandler() {
    setTheme((prev: boolean) => !prev);
    document.querySelector("html").style.colorScheme = theme ? "light" : "dark";
  }
  return (
    <div className="flex items-center justify-between">
      <LogoImage />
      <button
        onClick={() => clickHandler()}
        className="rounded-lg p-2 bg-neutral-700"
      >
        {theme ? <SunImage /> : <MoonImage />}
      </button>
    </div>
  );
}

export default Header;
