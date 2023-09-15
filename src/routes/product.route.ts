import { Router } from 'express';
import productController from '../controller/product.controller';
import validateProduct from '../middlewares/validateProduct';

const productRoute = Router();

productRoute.post('/', validateProduct, productController.createProduct);
productRoute.get('/', productController.listProducts);

export default productRoute;