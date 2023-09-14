import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import listProductMock from '../../mocks/listProduct.mock';
import ProductModel from '../../../src/database/models/product.model';
import app from '../../../src/app'

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });

  //  ============ Verificar tipagem de datafromDB ===============
  it('Retorna status 200 e lista de produtos', async function() {
    const dataFromDB = listProductMock.allProducts.map((product) => ProductModel.build(product));
    sinon.stub(ProductModel, 'findAll').resolves(dataFromDB);
    const response = await chai.request(app).get('/products').send();

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(listProductMock.serviceReturn.data); 
  });
});
