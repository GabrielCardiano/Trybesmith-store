import { Router } from 'express';
import orderController from '../controller/order.controller';
import authMiddleware from '../middlewares/auth.middleware';

const orderRoute = Router();

orderRoute.get('/', orderController.listOrders);

orderRoute.use(authMiddleware);
orderRoute.post('/', orderController.createOrder);

export default orderRoute;