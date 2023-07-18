import { v4 as uuidv4 } from 'uuid';
import { CardStatistics } from '../types/CardStatistics';
import { DateTimeFormatOptions } from '../types/DateTimeFormatOptions';
import { createListForChart } from './createListForChart';
import { celsiusToFahrenheit } from './celsiusToFahrenheit';
import { normalizeNumber } from './normalizeNumber';

export function createCardOfWeather(data: any): CardStatistics {
  const {
    main: {
      feels_like: feels_like_C,
      temp: temp_C,
      humidity,
      pressure,
    },
    wind: {
      speed: wind_speed,
    },
    dt_txt,
    weather: [item],
  } = data.list[0];
  const {
    icon,
    main: type_weather,
  } = item;
  const { name, country } = data.city;

  const event = new Date(dt_txt);

  const options: DateTimeFormatOptions = {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    hour: 'numeric',
    minute: 'numeric',
  };

  const date = event.toLocaleDateString(undefined, options);
  const list = createListForChart(data);

  return {
    id: uuidv4(),
    name,
    country,
    date,
    temp_C: normalizeNumber(temp_C),
    temp_F: celsiusToFahrenheit(temp_C),
    feels_like_C: normalizeNumber(feels_like_C),
    feels_like_F: celsiusToFahrenheit(feels_like_C),
    icon,
    type_weather,
    wind_speed,
    humidity,
    pressure,
    list,
  };
}
