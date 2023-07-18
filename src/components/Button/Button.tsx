import React from 'react';
import { useTranslation } from 'react-i18next';
import './Button.scss';

interface Props {
  onPressed: () => void;
  onClose: () => void;
}

export const Button: React.FC<Props> = ({ onPressed, onClose }) => {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      className="button"
      onClick={() => {
        onPressed();
        onClose();
      }}
    >
      {t('Add')}
    </button>
  );
};
