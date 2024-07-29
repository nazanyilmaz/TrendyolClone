import {Product} from '../home/productsProps';

interface ProductItemProps {
  price: number;
  description: string;
  title: string;
  image: string;
  item: Product;
  favorite: boolean;
}

export default ProductItemProps;
