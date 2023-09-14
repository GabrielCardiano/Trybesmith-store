import { Router } from 'express';
import productController from '../controller/product.controller';

const productRoute = Router();

productRoute.post('/', productController.createProduct);
productRoute.get('/', productController.listProducts);

export default productRoute;