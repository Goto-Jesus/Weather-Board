import { client } from '../utils/fetchClient';

const KEY = '413051a7e53bae5c44f27e6b8fcce7a2';

export const getByName = (search: string) => client.get(`forecast?q=${search}&units=metric&&appid=${KEY}`);
export const getByLoacation = (lat: number, lon: number) => client.get(`forecast?lat=${lat}&lon=${lon}&units=metric&&appid=${KEY}`);
