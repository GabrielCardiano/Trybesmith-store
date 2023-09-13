import { expect } from 'chai';
import sinon from 'sinon';

import ProductModel from '../../../src/database/models/product.model';
import productService from '../../../src/services/product.service';
import createProduct from '../../mocks/createProduct.mock';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });


  it('ProductService - Testa se é possível cadastrar produto com sucesso', async function () {
    const dataFromDB = ProductModel.build(createProduct.returnDB);
    sinon.stub(ProductModel, 'create').resolves(dataFromDB);
    const { status, data } = await productService.createProduct(createProduct.bodyRequest);

    expect(status).to.equal(createProduct.serviceReturn.status);
    expect(data).to.deep.equal(createProduct.serviceReturn.data);
  })
});
