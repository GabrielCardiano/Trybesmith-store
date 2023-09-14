import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import OrderModel from '../../../src/database/models/order.model';
import listOrderMock from '../../mocks/listOrder.mock';
import ProductModel from '../../../src/database/models/product.model';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /orders', function () {
  beforeEach(function () { sinon.restore(); });

  it('Retorna status 200 e lista de orders', async function () {
    const dataFromDB = listOrderMock.allOrdersDB.map((order) => OrderModel.build(order, {
      include: { model: ProductModel, as: 'productIds', attributes: ['id'] },
    }))
    sinon.stub(OrderModel, 'findAll').resolves(dataFromDB);
    const response = await chai.request(app).get('/orders').send();
    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(listOrderMock.serviceReturn.data);
  });
});
