import { DataList } from './DataList';

export interface CardStatistics {
  id: string;
  name: string;
  country: string;
  date: string;
  temp_C: number;
  temp_F: number;
  feels_like_C: number;
  feels_like_F: number;
  icon: string;
  type_weather: string;
  wind_speed: number;
  humidity: number;
  pressure: number;
  list: DataList[];
}
