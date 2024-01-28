import OrderModel, { OrderInputtableTypes } from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import validateOrder from '../middlewares/validateOrder';
import {  NewOrder, rder } from '../types/Order';
import { ServiceResponse } from '../types/ServiceResponse';

async function listOrders(): Promise<ServiceResponse<Order[]>> {
  const allOrders = await OrderModel.findAll({
    include: { model: ProductModel, as: 'productIds', attributes: ['id'] },
  });
  const data = allOrders.map((order) => {
    const orderJSON = order.toJSON();
    orderJSON.productIds = orderJSON.productIds?.map((product) =>
      (typeof product === 'object' ? product.id : product));
    return orderJSON;
  });
  return { status: 'SUCCESSFUL', data };
}

async function createOrder(order: OrderInputtableTypes): Promise<ServiceResponse<NewOrder>> {
  const { productIds, userId } = order;
  const isProductIdsValid = await validateOrder.validateProductIds(productIds);
  if (isProductIdsValid) return isProductIdsValid;

  const isUserIdValid = validateOrder.validateUserId(userId);
  if (isUserIdValid) return isUserIdValid;

  const newOrder = await OrderModel.create();
  return { status: 'CREATED', data: newOrder };
}

export default { listOrders };