export interface Product {
  description: string;
  id: number;
  image: string;
  name: string;
  price: number;
  categoryId: Array<number>;
}