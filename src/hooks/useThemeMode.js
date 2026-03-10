import { useState } from "react";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme === "dark";
  }
  // Default to light mode (false = light, true = dark)
  return false;
};

const useThemeMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const initial = getInitialTheme();
    document.documentElement.classList.toggle("dark", initial);
    return initial;
  });

  const toggleTheme = () => {
    setIsDarkMode((previous) => {
      const next = !previous;
      localStorage.setItem("theme", next ? "dark" : "light");
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };

  return { isDarkMode, toggleTheme };
};

export default useThemeMode;
