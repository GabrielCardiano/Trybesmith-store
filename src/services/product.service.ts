import ProductModel, { ProductInputtableTypes } from '../database/models/product.model';
import { ProductWithoutOrderID } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

async function createProduct(product: ProductInputtableTypes)
  : Promise<ServiceResponse<ProductWithoutOrderID>> {
  const newProduct = await ProductModel.create(product);
  console.log(newProduct);
  
  const { orderId, ...finalProduct } = newProduct.dataValues;

  return { status: 'CREATED', data: finalProduct };
}

export default { createProduct };