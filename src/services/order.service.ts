import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Order } from '../types/Order';
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

export default { listOrders };