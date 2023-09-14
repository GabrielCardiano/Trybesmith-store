import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/StatusHTTP';
import orderService from '../services/order.service';

async function listOrders(_req: Request, res: Response): Promise<Response> {
  const { status, data } = await orderService.listOrders();
  return res.status(mapStatusHTTP(status)).json(data);
}

export default {
  listOrders,
};