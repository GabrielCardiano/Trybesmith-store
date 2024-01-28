export type Order = {
  id: number;
  userId: number;
  productIds?: number[] | { id: number }[];
};

export type OrderWithoutId = Omit<Order, 'id'>;

export type NewOrder = { userId: number, productIds?: number[] };