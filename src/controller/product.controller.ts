import { Request, Response } from 'express';
import productService from '../services/product.service';
import mapStatusHTTP from '../utils/StatusHTTP';

async function createProduct(req: Request, res: Response): Promise<Response> {
  const { status, data } = await productService.createProduct(req.body);
  return res.status(mapStatusHTTP(status)).json(data);
}

async function listProducts(req: Request, res: Response): Promise<Response> {
  const { status, data } = await productService.listProducts();  
  return res.status(mapStatusHTTP(status)).json(data);
}

export default {
  createProduct,
  listProducts,
};