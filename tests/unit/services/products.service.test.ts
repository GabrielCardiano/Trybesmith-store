import { expect } from 'chai';
import sinon from 'sinon';

import ProductModel from '../../../src/database/models/product.model';
import productService from '../../../src/services/product.service';
import createProduct from '../../mocks/createProduct.mock';
import listProductMock from '../../mocks/listProduct.mock';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });


  it('ProductService - Testa se é possível cadastrar produto com sucesso', async function () {
    const dataFromDB = ProductModel.build(createProduct.returnDB);
    sinon.stub(ProductModel, 'create').resolves(dataFromDB);
    const { status, data } = await productService.createProduct(createProduct.bodyRequest);

    expect(status).to.equal(createProduct.serviceReturn.status);
    expect(data).to.deep.equal(createProduct.serviceReturn.data);
  })

  it('ProductService - Lista todos os produtos com sucesso', async function () {
    const dataFromDB = listProductMock.allProducts.map((product) => ProductModel.build(product));
    sinon.stub(ProductModel, 'findAll').resolves(dataFromDB);
    const { status, data } = await productService.listProducts();

    expect(status).to.equal(listProductMock.serviceReturn.status);
    expect(data).to.deep.equal(listProductMock.serviceReturn.data);
  })
});
