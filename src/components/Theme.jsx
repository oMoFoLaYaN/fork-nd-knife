import React, { useState, useEffect } from "react";

const Theme = ({ className }) => {
  const [theme, setTheme] = useState("null");
  const [icon, setIcon] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setIcon(!icon)
  };
  return (
    <button className="" onClick={handleThemeSwitch}>
      <i
        className={`${icon ? "bi bi-brightness-high" : "bi bi-moon"} text-lg ${className
          }`}
        id="theme-button"
      />
    </button>
  );
};

export default Theme;
