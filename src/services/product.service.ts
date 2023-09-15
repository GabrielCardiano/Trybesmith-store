import ProductModel,
{ ProductInputtableTypes } from '../database/models/product.model';
import { Product, ProductWithoutOrderID } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

async function createProduct(product: ProductInputtableTypes)
  : Promise<ServiceResponse<ProductWithoutOrderID>> {
  // const error = validateProduct(product);

  const newProduct = await ProductModel.create(product);
  const { orderId, ...finalProduct } = newProduct.dataValues;
  return { status: 'CREATED', data: finalProduct };
}

async function listProducts(): Promise<ServiceResponse<Product[]>> {
  const allProducts = await ProductModel.findAll();
  const data = allProducts.map((product) => product.toJSON());
  return { status: 'SUCCESSFUL', data };
}

export default {
  createProduct,
  listProducts,
};