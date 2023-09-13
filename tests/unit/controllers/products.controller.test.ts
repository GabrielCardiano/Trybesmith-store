import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productService from '../../../src/services/product.service';
import createProductMock from '../../mocks/createProduct.mock';
import productController from '../../../src/controller/product.controller'

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Product Controller - Testa se é possível cadastrar produto com sucesso', async function () {
   sinon.stub(productService, 'createProduct').resolves(createProductMock.serviceReturn);

   await productController.createProduct(req, res);
   expect(res.status).to.have.been.calledWith(201);
   expect(res.json).to.have.been.calledWith(createProductMock.serviceReturn.data)
});

});
