interface Cart {
  productId: number;
  quantity: number;
}

interface CartTypes {
  cart: Cart[];
  totalPrice: number;

  pending: boolean;
  error: object;
}

export type {CartTypes, Cart};
