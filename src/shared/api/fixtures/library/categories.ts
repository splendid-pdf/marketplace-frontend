import type { Category } from "shared/api/types";

export const FURNITURE: Category = {
  id: 1,
  name: 'мебель',
};

export const TEST2: Category = {
  id: 2,
  name: 'тест2',
};

export const TEST3: Category = {
  id: 3,
  name: 'тест3',
};

export const getAll = () => [FURNITURE, TEST2, TEST3]