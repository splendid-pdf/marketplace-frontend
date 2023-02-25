import { Type } from './../../types';

export const CHAIRS: Type = {
  id: 1,
  name: 'Стулья'
};

export const TABLES: Type = {
  id: 2, 
  name: 'Столы',
};

export const BEDS: Type = {
  id: 3, 
  name: 'Кровати'
};

export const getAll = () => [CHAIRS, TABLES, BEDS]