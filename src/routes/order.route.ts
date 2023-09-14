import { Router } from 'express';
import orderController from '../controller/order.controller';

const orderRoute = Router();

orderRoute.get('/', orderController.listOrders);

export default orderRoute;