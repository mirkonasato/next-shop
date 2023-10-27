export interface CartItem {
  id: number;
  product: {
    id: number;
    title: string;
    price: number;
  };
  quantity: number;
}
