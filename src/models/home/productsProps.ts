interface Product {
  favorite: any;
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  favorite: boolean;
}

interface ProductsTypes {
  products: Product[];
  newArrival: Product[];
  bestSeller: Product[];
  pending: boolean;
  error: object;
}

export type {ProductsTypes, Product};
