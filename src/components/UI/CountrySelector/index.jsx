import React, { useState, useRef, useEffect, useMemo } from "react";
import { Check, Search, X } from "lucide-react";
import countryList from "react-select-country-list";
import PropTypes from "prop-types";

const getFlagUrl = (code) => {
  if (!code) return "";
  return `https://flagcdn.com/w20/${code.toLowerCase()}.png`; // 20px width
};

const CountrySelector = ({
  value = "",
  onChange,
  placeholder = "",
  className = "",
  disabled = false,
  bgColor = "bg-translaundry", // ✅ translaundry
  textColor = "text-black",
  borderColor = "border-none",
  width = "w-full",
  height = "h-auto",
  fontSize = "text-sm",
  placeholderColor = "text-slate-400",
  placeholderFontSize = "",
  ringColor = "ring-primary/50 ",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef(null);

  // ✅ memo so it doesn't rebuild list every render
  const allCountries = useMemo(() => countryList().getData(), []);

  const filteredCountries = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return allCountries;
    return allCountries.filter(
      (c) =>
        c.label.toLowerCase().includes(q) || c.value.toLowerCase().includes(q)
    );
  }, [allCountries, searchQuery]);

  const selectedCountry = useMemo(
    () => allCountries.find((c) => c.value === value),
    [allCountries, value]
  );

  const selectedCountryName = selectedCountry ? selectedCountry.label : "";
  const selectedFlag = selectedCountry ? getFlagUrl(selectedCountry.value) : "";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (code) => {
    onChange?.(code); // ✅ only code store in Formik (US/PK)
    setIsOpen(false);
    setSearchQuery("");
  };

  return (
    <div
      className={`relative ${width} ${height} ${className}`}
      ref={dropdownRef}
    >
      {/* Trigger */}
      <button
        type="button"
        onClick={() => !disabled && setIsOpen((p) => !p)}
        disabled={disabled}
        className={`countrySelector w-full h-full flex items-center justify-between gap-3 px-4 py-3 
          ${bgColor} border ${borderColor} rounded-lg
          ${textColor} ${fontSize} font-medium
          transition-all duration-200 focus:outline-none
          ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
          ${isOpen ? `ring-2 ${ringColor}` : ""}
        `}
      >
        <div className="flex items-center gap-3 min-w-0">
          {/* ✅ Flag */}
          {selectedFlag ? (
            <img
              src={selectedFlag}
              alt=""
              className="w-5 h-4 rounded-sm object-cover shrink-0"
              loading="lazy"
            />
          ) : (
            <span className="w-5 h-4 rounded-sm bg-white/10 shrink-0" />
          )}

          <span
            className={`truncate ${
              !selectedCountryName
                ? `${placeholderColor} ${placeholderFontSize || fontSize}`
                : ""
            }`}
          >
            {value ? value.toUpperCase() : placeholder}
          </span>
        </div>

        <svg
          className={`w-4 h-4 text-black transition-transform duration-200 shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className={`absolute z-50 w-full mt-2 bg-tertiary border ${borderColor} rounded-lg shadow-2xl overflow-hidden`}
          style={{
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        >
          {/* Search */}
          <div className="p-3 border-b border-white/10">
            <div className="relative">
              <Search
                size={16}
                className="absolute left-1 top-1/2 -translate-y-1/2 text-black "
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-7 pr-8 py-2 bg-translaundry border border-border rounded-md text-sm ${textColor} placeholder:text-black outline-none`}
                autoFocus
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded"
                >
                  <X size={14} className="text-black" />
                </button>
              )}
            </div>
          </div>

          {/* List */}
          <div className="max-h-64 overflow-y-auto hide-scrollbar">
            <div className="p-2">
              {filteredCountries.length > 0 ? (
                filteredCountries.map((country) => {
                  const flag = getFlagUrl(country.value);
                  const active = value === country.value;

                  return (
                    <button
                      key={country.value}
                      type="button"
                      onClick={() => handleSelect(country.value)}
                      className={`countrySelector w-full flex items-center justify-between px-1 py-2.5 rounded-md
                        text-sm text-left transition-colors
                        ${active ? "bg-[#7FAB83]" : "hover:bg-[#7FAB83"}
                      `}
                    >
                      <span className="flex items-center gap-3 min-w-0">
                        {/* ✅ Flag in list */}
                        <img
                          src={flag}
                          alt=""
                          className="w-5 h-4 rounded-sm object-cover shrink-0"
                          loading="lazy"
                        />
                        {/* <span className={`font-medium truncate ${textColor}`}>
                          {country.label}
                        </span> */}
                        <span className="text-xs text-black shrink-0">
                          ({country.value})
                        </span>
                      </span>
                    </button>
                  );
                })
              ) : (
                <p className="px-3 py-4 text-sm text-black text-center">
                  No countries found
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

CountrySelector.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  borderColor: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  fontSize: PropTypes.string,
  placeholderColor: PropTypes.string,
  placeholderFontSize: PropTypes.string,
  ringColor: PropTypes.string,
};

export default CountrySelector;
