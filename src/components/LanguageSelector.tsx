import React from "react";
import { useLanguageContext } from "../context/LanguageContextProvider";

import { FormattedMessage } from "react-intl";

const LanguageSelector: React.FC = () => {
  const { locale, handleChangeLanguage } = useLanguageContext();

  return (
    <>
      <label htmlFor="languageSelector">
        <FormattedMessage
          id="app.languageSelector.language"
          defaultMessage="Langauge"
        />
      </label>
      <select value={locale} onChange={handleChangeLanguage}>
        <option value="en">En</option>
        <option value="fr">Fr</option>
      </select>
    </>
  );
};

export default LanguageSelector;
