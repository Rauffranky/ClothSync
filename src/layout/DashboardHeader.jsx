import React from "react";
import { Menu, Moon, Sun } from "lucide-react";
import Logo from "../components/Logo";
import LanguageSelector from "../components/UI/language-selector";
import useThemeMode from "../hooks/useThemeMode";

const DashboardHeader = ({ onHamburger }) => {
  const { isDarkMode, toggleTheme } = useThemeMode();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-4 md:px-8 justify-between shadow-xl transition-colors duration-200 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="flex items-center gap-4">
        <button
          onClick={onHamburger}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
          }`}
        >
          <Menu size={24} />
        </button>
        <Logo height={32} />
      </div>

      <div className="flex items-center gap-8 ">
        <div className="hidden sm:flex items-center gap-5 cursor-pointer">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            className={`p-2 rounded-lg border transition-colors ${
              isDarkMode
                ? "border-gray-700 text-yellow-400 hover:bg-gray-800"
                : "border-gray-200 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
