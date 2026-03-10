import React, { useState } from "react";
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
  const initialLanguage = i18n.resolvedLanguage || i18n.language || "en";
  const [selectedLanguage, setSelectedLanguage] = useState(
    LANGUAGE_TO_FLAG[initialLanguage] || "US",
  );

  const handleLanguageChange = (selectedFlag) => {
    setSelectedLanguage(selectedFlag);
    const language = FLAG_TO_LANGUAGE[selectedFlag] || "en";
    i18n.changeLanguage(language);
  };

  return (
    <div className="inline-block text-left border-none">
      <ReactFlagsSelect
        className="language-select-root"
        selected={selectedLanguage}
        onSelect={handleLanguageChange}
        countries={LANGUAGE_OPTIONS}
        customLabels={LANGUAGE_LABELS}
        searchable={false}
        showSecondarySelectedLabel={false}
        selectedSize={14}
        selectButtonClassName={`language-select-btn ${
          selectedLanguage === "SA" ? "language-select-btn-ar" : ""
        }`}
      />
    </div>
  );
};

export default LanguageSelector;
