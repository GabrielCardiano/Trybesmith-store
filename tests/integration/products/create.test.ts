import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import createProduct from '../../mocks/createProduct.mock'
import app from '../../../src/app'

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Retorna status 201 e dados do produto cadastrado', async function() {
    const response = await chai.request(app).post('/products').send(createProduct.bodyRequest);

    expect(response.status).to.be.equal(201);
    // expect(response.body).to.deep.equal(createProduct.serviceReturn.data); 
  })
});
