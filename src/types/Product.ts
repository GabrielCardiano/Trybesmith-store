export type Product = {
  id: number;
  name: string;
  price: string;
  orderId: number;
};

export type ProductWithoutOrderID = Omit<Product, 'orderId'>; 