import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logs, Moon, Sun } from "lucide-react";
import Logo from "../components/Logo";
import Button from "../components/UI/button";
import CardOutline from "../components/UI/card/CardOutline";
import CountrySelector from "../components/UI/CountrySelector";
import SlideOver from "../components/UI/slideOver";
import { NAV_MENU } from "./ConfigNav";
import useThemeMode from "../hooks/useThemeMode";

const Header = () => {
  const [country, setCountry] = useState("US");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useThemeMode();

  return (
    <div className="w-full">
      {/* FIXED WRAPPER */}
      <div className="fixed top-0 left-0 right-0 z-50">
        {/* TOP GREEN BAR */}
        <CardOutline
          border="border-none"
          className="rounded-none bg-tertiary! shadow-sm"
        >
          <div className="h-7.5 px-4 md:px-8 flex items-center justify-between">
            <div className="flex items-center gap-3 justify-between w-full ">
              <Logo height={56} />
              <button
                type="button"
                aria-label="Open sidebar"
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg border border-[#0F1724]/20 text-[#0F1724] hover:bg-black/5"
              >
                <Logs size={20} />
              </button>
            </div>

            <div className="hidden lg:flex items-center gap-3 ">
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

              {/* Language */}
              <div className=" hidden lg:block ">
                <CountrySelector
                  value={country}
                  onChange={(code) => setCountry(code)}
                  width="w-full"
                  height="h-[33px]"
                  bgColor="bg-transparent"
                  textColor="text-[#0F1724] "
                  fontSize="text-[14px]"
                />
              </div>

              <div className="flex items-center gap-2">
                <Button
                  label="Sign In"
                  variant="white"
                  className="px-4! py-1.5! text-[14px]! rounded-lg  whitespace-nowrap "
                  onClick={() => { }}
                />
                <Button
                  label="Register"
                  variant="primary"
                  className="px-6! py-2! text-[14px]! rounded-lg"
                  onClick={() => { }}
                />
              </div>
            </div>
          </div>
        </CardOutline>

        {/* BOTTOM WHITE BAR */}
        <CardOutline
          border="border-none"
          className="rounded-none hidden lg:block "
          style={{
            background: "rgba(255, 255, 255, 0.70)",
            boxShadow:
              "0 2px 1px 0 rgba(0, 0, 0, 0.05), inset 0 -3px 8px 0 rgba(0, 0, 0, 0.15)",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
          }}
        >
          <div className="h-7.5 px-4 md:px-8 flex items-center justify-center">
            <ul className="hidden lg:flex items-center gap-25 text-[13px] font-semibold text-secondary ">
              {NAV_MENU.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `transition-colors hover:text-primary ${isActive ? "text-primary shadow-[0_2px_0_0_currentColor]" : ""}`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </CardOutline>
      </div>

      <SlideOver
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        title="Menu"
        size="sm"
        showCloseIcon
      >
        <div className="space-y-4">
          <ul className="flex flex-col gap-3">
            {NAV_MENU.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 px-2 rounded ${isActive ? "text-primary" : "text-secondary hover:text-primary"}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="pt-4 border-t border-gray-100">
            <div className="mb-3">
              <CountrySelector
                value={country}
                onChange={(code) => setCountry(code)}
                width="w-full"
                height="h-[36px]"
                bgColor="bg-transparent"
                textColor="text-[#0F1724]"
                fontSize="text-[14px]"
              />
            </div>

            <div className="mt-2 flex flex-col gap-2">
              <Button
                label="Sign In"
                variant="white"
                onClick={() => setIsMenuOpen(false)}
              />
              <Button
                label="Register"
                variant="primary"
                onClick={() => setIsMenuOpen(false)}
              />
            </div>
          </div>
        </div>
      </SlideOver>

      {/* Spacer so content doesn't go under fixed header */}
      <div className="h-25.5" />
    </div>
  );
};

export default Header;
