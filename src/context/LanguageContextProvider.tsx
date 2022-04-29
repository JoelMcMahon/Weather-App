import React, { createContext, useContext, useState } from "react";
import English from "../languages/English.json";
import French from "../languages/French.json";
import { IntlProvider } from "react-intl";

const languageContext = createContext({
  locale: "",
  handleChangeLanguage: (e: React.ChangeEvent<HTMLSelectElement>) => {},
});

export const useLanguageContext = () => useContext(languageContext);

const browserLocale = navigator.language;

let language: any;
if (browserLocale === "en" || "en-us") {
  language = English;
} else {
  language = French;
}

const LanguageContextProvider: React.FC = (props) => {
  const [locale, setLocale] = useState<string>(browserLocale);
  const [messages, setMessages] = useState<any>(language);

  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    setLocale(newLocale);
    if (newLocale === "fr") {
      setMessages(French);
    } else {
      setMessages(English);
    }
  };

  return (
    <languageContext.Provider value={{ locale, handleChangeLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </languageContext.Provider>
  );
};

export default LanguageContextProvider;
