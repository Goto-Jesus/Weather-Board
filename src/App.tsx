// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState, useRef } from 'react';
import './App.scss';
import { useTranslation } from 'react-i18next';
import { Button } from './components/Button/Button';
import { CardStatistics } from './types/CardStatistics';
import { ListOfCards } from './components/ListOfCards';
import { getByLoacation, getByName } from './api/weather';
import { createCardOfWeather } from './utils/createCardOfWeather';
import { useLocalStorage } from './utils/useLocalStorage';
import { Dropdown } from './components/Dropdown/Dropdown';
import { SomeComponent } from './components/someComponent/someComponent';
import { Select } from './components/Select/Select';
import { Search } from './components/Search';

export const App: React.FC = () => {
  const { t } = useTranslation();

  const [isError, setIsError] = useState(false);
  const [cards, setCards] = useLocalStorage<CardStatistics[]>(
    'cardsStorage',
    [],
  );
  const [search, setSearch] = useState('');
  const [location, setLocation] = useLocalStorage<any>('location', {});
  const [searchList, setSearchList] = useLocalStorage<string[]>(
    'searchList',
    [],
  );
  const [isOpened, setIsOpened] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation(position.coords);
    });
  };

  const clearSearch = () => {
    setSearch('');
  };

  const handleSetSearch = (str: string) => {
    setSearch(str);
  };

  const handleAddToDropdown = (card: CardStatistics) => {
    const item = `${card.name}, ${card.country}`;

    if (!searchList.includes(item)) {
      setSearchList([...searchList, item]);
    }
  };

  const loadCard = async () => {
    try {
      if (search) {
        const data = await getByName(search);
        const card = createCardOfWeather(data);

        handleAddToDropdown(card);
        setCards([...cards, card]);
      } else {
        const { latitude, longitude } = location;
        const data = await getByLoacation(latitude, longitude);

        const card = createCardOfWeather(data);

        handleAddToDropdown(card);
        setCards([...cards, card]);
      }
    } catch (err) {
      setIsError(true);

      // eslint-disable-next-line no-console
      console.log(err, isError);
    }

    clearSearch();
  };

  const handleDeleteCard = (id: string) => {
    const filteredCards = cards.filter((card) => card.id !== id);

    setCards(filteredCards);
  };

  const handleOpen = () => {
    setIsOpened(true);
  };

  const handleClose = () => {
    setIsOpened(false);
  };

  const handleCloseOutside = (event: { target: any }) => {
    if (!menuRef.current.contains(event.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    getLocation();
    document.addEventListener('mousedown', handleCloseOutside);
  }, []);

  return (
    <>
      <header className="header">
        <div className="search" ref={menuRef}>
          <input
            type="text"
            className="search__box"
            placeholder={t('placeholder')}
            value={search}
            onClick={handleOpen}
            onChange={(event) => setSearch(event.target.value)}
          />

          <div className="search__list">
            <Dropdown
              isOpened={isOpened}
              searchList={searchList}
              onSetSearch={handleSetSearch}
            />
          </div>

          <div className="search__button">
            <Button onPressed={loadCard} onClose={handleClose} />
          </div>
        </div>
        <Search />

        <Select />
      </header>

      <main>
        <ListOfCards cards={cards} onDelete={handleDeleteCard} />
        <SomeComponent />
      </main>
    </>
  );
};
