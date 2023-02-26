import { Characteristic, Line, TableData } from '../../data/types';

export const requestLines = async (): Promise<Line[]> => {
  const url = 'https://api.npoint.io/06b0972611331defc733';
  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) throw new Error('Ошибка при получении списка линий метро');

  return data;
};

export const requestCharacteristics = async (): Promise<Characteristic[]> => {
  const url = 'https://api.npoint.io/a75cf82069215a60a8e2';
  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) throw new Error('Ошибка при получении характеристик');

  return data;
};

export const requestTable = async (): Promise<TableData[]> => {
  const url = 'https://api.npoint.io/1e37c5287711e07d1fe7';
  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) throw new Error('Ошибка при получении данных таблицы');

  return data;
};
