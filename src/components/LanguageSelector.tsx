import React from "react";
import { useLanguageContext } from "../context/LanguageContextProvider";

import { FormattedMessage } from "react-intl";

const LanguageSelector: React.FC = () => {
  const { locale, handleChangeLanguage } = useLanguageContext();

  return (
    <>
      <label htmlFor="languageSelector" id="language">
        <FormattedMessage
          id="app.languageSelector.language"
          defaultMessage="Language"
        />
      </label>
      <select id="menu" value={locale} onChange={handleChangeLanguage}>
        <option className="options" value="en">
          En
        </option>
        <option className="options" value="fr">
          Fr
        </option>
      </select>
    </>
  );
};

export default LanguageSelector;
