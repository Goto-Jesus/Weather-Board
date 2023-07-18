/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import './Card.scss';
import { Chart } from '../Chart';
import { CardStatistics } from '../../types/CardStatistics';

interface Props {
  card: CardStatistics;
  onDelete: (id: string) => void;
}

export const Card: React.FC<Props> = ({ card, onDelete }) => {
  const { t } = useTranslation();
  const {
    id,
    name,
    country,
    date,
    temp_C,
    temp_F,
    feels_like_C,
    feels_like_F,
    icon,
    type_weather,
    wind_speed,
    humidity,
    pressure,
    list,
  } = card;

  const [isFahrenheit, setIsFahrenheit] = useState(false);

  const isCold = temp_C <= 0;
  const temp = isFahrenheit ? temp_F : temp_C;
  const feels_like = isFahrenheit ? feels_like_F : feels_like_C;

  return (
    <div className={classNames('card', {
      'card--cold': isCold,
    })}
    >
      <div className="card__header">
        <div className="card__title">
          <div className="card__title__city">{`${name}, ${country}`}</div>
          <div className="card__title__date">{date}</div>
        </div>

        <div className="card__display">
          <img
            src={`https://openweathermap.org/img/wn/${icon}.png`}
            alt="weather icon"
            className="card__display__weather-icon"
          />

          <div className="card__display__typeOfWeather">{type_weather}</div>
        </div>
      </div>

      <div className="card__chart">
        <Chart list={list} isCold={isCold} isFahrenheit={isFahrenheit} />
        <div className="card__chart__wrapper" />
      </div>

      <div className="card__footer">
        <div className="wrapper">
          <div className="card__footer__temperature">
            <div className="card__footer__temperature__amount">{`${isCold ? '' : '+'}${temp}`}</div>

            <div className="card__footer__temperature__switch">
              <button
                type="button"
                className={classNames('card__footer__temperature__switch__option', {
                  'card__footer__temperature__switch__option--active': !isFahrenheit,
                })}
                onClick={() => {
                  setIsFahrenheit(false);
                }}
              >
                °C
              </button>

              <div className="line"></div>

              <button
                type="button"
                className={classNames('card__footer__temperature__switch__option', {
                  'card__footer__temperature__switch__option--active': isFahrenheit,
                })}
                onClick={() => {
                  setIsFahrenheit(true);
                }}
              >
                °F
              </button>
            </div>
          </div>

          <div className="card__footer__temperature-feelsLike">
            <span>{`${t('Feels like')}:`}</span>
            <b>{` ${isCold ? '' : '+'}${feels_like} ${isFahrenheit ? '°F' : '°C'}`}</b>
          </div>
        </div>

        <div className="card__statictics">
          <span>{`${t('Wind')}:`}</span>
          <b className="card__statictics__amount">{` ${wind_speed} m/s`}</b>
          <br />
          <span>{`${t('Humidity')}:`}</span>
          <b className="card__statictics__amount">{` ${humidity}%`}</b>
          <br />
          <span>{`${t('Pressure')}:`}</span>
          <b className="card__statictics__amount">{` ${pressure}Pa`}</b>
        </div>
      </div>

      <button
        type="button"
        className="card__close"
        onClick={() => onDelete(id)}
      >
        <div className="card__close__icon">
          ✕
        </div>
      </button>
    </div>
  );
};
