import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/StatusHTTP';
import orderService from '../services/order.service';

async function listOrders(_req: Request, res: Response): Promise<Response> {
  const { status, data } = await orderService.listOrders();
  return res.status(mapStatusHTTP(status)).json(data);
}

async function createOrder(req: Request, res: Response): Promise<Response> {
  // const { status, data } = await orderService.createOrder(req.body);
  return res.status(200).json('Deu bom');
}

export default {
  listOrders,
  createOrder,
};