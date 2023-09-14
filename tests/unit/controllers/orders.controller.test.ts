import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import orderService from '../../../src/services/order.service';
import listOrderMock from '../../mocks/listOrder.mock';
import orderController from '../../../src/controller/order.controller';

chai.use(sinonChai);

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('OrdersController - Lista todos as orders com sucesso', async function () {
    sinon.stub(orderService, 'listOrders').resolves(listOrderMock.serviceReturn);
    await orderController.listOrders(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(listOrderMock.serviceReturn.data);
  })

});
