import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Icon } from '../../images/icon_material-language.svg';
import './Select.scss';

export const Select: React.FC = () => {
  const { i18n } = useTranslation();

  type Language = 'en' | 'ua' | 'he';
  const [language, setLanguage] = useState<Language>('en');

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value as Language;

    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="locales">
      <Icon className="locales__icon" />

      <select value={language} onChange={changeLanguage}>
        <option value="en">EN</option>
        <option value="ua">UA</option>
        <option value="he">HE</option>
      </select>
    </div>
  );
};
