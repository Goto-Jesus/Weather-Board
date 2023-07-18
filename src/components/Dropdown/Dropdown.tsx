/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import './Dropdown.scss';
import classNames from 'classnames';

interface Props {
  isOpened: boolean;
  onSetSearch: (str: string) => void;
  searchList: string[];
}

export const Dropdown: React.FC<Props> = ({ isOpened, onSetSearch, searchList }) => {
  const [isChose, setIsChose] = useState('');

  return (
    <ul
      className={classNames('list', {
        'list--open': isOpened,
        'list--close': !isOpened,
      })}
    >
      {searchList.map((item) => {
        return (
          <li
            className={classNames('list__item', {
              'list__item--active': isChose === item,
            })}
            onClick={() => {
              setIsChose(item);
              onSetSearch(item);
            }}
            key={item}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};
