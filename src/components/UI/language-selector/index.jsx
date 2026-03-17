import React, { useState, useEffect } from "react";
import ReactFlagsSelect from "react-flags-select";
import { useTranslation } from "react-i18next";

const LANGUAGE_OPTIONS = ["US", "SA"];

const LANGUAGE_LABELS = {
  US: "English",
  SA: "عربي",
};

const FLAG_TO_LANGUAGE = {
  US: "en",
  SA: "ar",
};

const LANGUAGE_TO_FLAG = {
  en: "US",
  ar: "SA",
};

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("US");

  // Sync with i18n language on mount and when it changes externally
  useEffect(() => {
    const currentLanguage = i18n.resolvedLanguage || i18n.language || "en";
    setSelectedLanguage(LANGUAGE_TO_FLAG[currentLanguage] || "US");
  }, [i18n.language, i18n.resolvedLanguage]);

  const handleLanguageChange = (selectedFlag) => {
    setSelectedLanguage(selectedFlag);
    const language = FLAG_TO_LANGUAGE[selectedFlag] || "en";
    i18n.changeLanguage(language);
    
    // Force re-render of the component
    setTimeout(() => {
      setSelectedLanguage(selectedFlag);
    }, 100);
  };

  return (
    <div className="inline-block text-left">
      <ReactFlagsSelect
        key={selectedLanguage} // Force re-render when language changes
        className="language-select-root"
        selected={selectedLanguage}
        onSelect={handleLanguageChange}
        countries={LANGUAGE_OPTIONS}
        customLabels={LANGUAGE_LABELS}
        searchable={false}
        showSecondarySelectedLabel={false}
        showOptionLabel={true}
        selectedSize={14}
        optionsSize={14}
        placeholder="Select Language"
        selectButtonClassName={`language-select-btn !border-none !shadow-none !bg-transparent  !px-3 !rounded-lg !transition-all !duration-200 ${
          selectedLanguage === "SA" ? "language-select-btn-ar" : ""
        }`}
        style={`language-select ${selectedLanguage === "SA" ? "rtl" : "ltr"}`}
      />
    </div>
  );
};

export default LanguageSelector;