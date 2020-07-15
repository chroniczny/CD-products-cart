export interface Product {
  id: number;
  title: string;
  cover: string;
  availability: boolean;
  price: number;
  currency: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
