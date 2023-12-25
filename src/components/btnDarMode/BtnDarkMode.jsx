import { useEffect } from "react";

import "./styled.css";
import { useLocalStorage } from "../../utils/useLocalStorage";
import detectDarkMode from "../../utils/detectDarkMode";

import sun from "../../img/icons/sun.svg";
import moon from "../../img/icons/moon.svg";

function BtnDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("mode", detectDarkMode());

  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";

        setDarkMode(newColorScheme);
      });
  }, [setDarkMode]);

  const handleDarkMode = () => {
    setDarkMode((current) => {
      return current === "light" ? "dark" : "light";
    });
  };

  const normalBtn = "dark-mode-btn";
  const activeBtn = "dark-mode-btn dark-mode-btn--active";
  return (
    <>
      <button
        className={darkMode === "dark" ? activeBtn : normalBtn}
        onClick={handleDarkMode}
      >
        <img src={sun} alt="Lite mode" className="dark-mode-btn__icon" />
        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
      </button>
    </>
  );
}

export default BtnDarkMode;
