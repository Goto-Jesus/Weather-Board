import { DataList } from '../types/DataList';
import { celsiusToFahrenheit } from './celsiusToFahrenheit';
import { normalizeNumber } from './normalizeNumber';

export function createListForChart(data: any): DataList[] {
  const listSlice = data.list.slice(0, 8);

  const listResult = listSlice.map((item: any) => {
    const { main: { temp }, dt_txt } = item;

    const date = new Date(dt_txt)
      .toString()
      .split(' ')[4]
      .slice(0, 5);

    return {
      date,
      [`${'°C'}`]: normalizeNumber(temp),
      [`${'°F'}`]: celsiusToFahrenheit(temp),
    };
  });

  const emptyElement = { date: '', '°C': '', '°F': '' };

  listResult.push(emptyElement);
  listResult.unshift(emptyElement);

  return listResult;
}
