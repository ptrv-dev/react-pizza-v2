declare module '*.scss';

interface SortByItem {
  name: string;
  key: string;
  order: 'desc' | 'asc';
}

interface ProductItem {
  _id: number;
  image: string;
  title: string;
  description: string;
  category: number;
  size: string[];
  dough: string[];
  rating: number;
  price: number;
  date: number;
}
