import { expect } from 'chai';
import sinon from 'sinon';
import OrderModel from '../../../src/database/models/order.model';
import listOrderMock from '../../mocks/listOrder.mock'
import ProductModel from '../../../src/database/models/product.model';
import orderService from '../../../src/services/order.service'

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });

  it('OrdersService - Lista todos as orders com sucesso', async function () {
    const dataFromDB = listOrderMock.allOrdersDB.map((order) => OrderModel.build(order, {
      include: { model: ProductModel, as: 'productIds', attributes: ['id'] },
    }))

    // const dataFromDB = OrderModel.bulkBuild(listOrderMock.all);

    sinon.stub(OrderModel, 'findAll').resolves(dataFromDB);
    const { status, data } = await orderService.listOrders();
    expect(status).to.equal(listOrderMock.serviceReturn.status);
    expect(data).to.deep.equal(listOrderMock.serviceReturn.data);
  })
});
