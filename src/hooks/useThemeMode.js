import { useContext } from "react";
import ThemeContext from "../context/theme-context";

const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeMode must be used within ThemeProvider");
  }
  const { isDarkMode, toggleTheme } = context;
  return { isDarkMode, toggleTheme };
};

export default useThemeMode;
