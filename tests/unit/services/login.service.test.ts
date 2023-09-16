import { expect } from 'chai';
import sinon from 'sinon';
import UserModel from '../../../src/database/models/user.model';
import loginService from '../../../src/services/login.service';
import { password } from '../../../src/database/config/database';
import loginMock from '../../mocks/login.mock';
import bcrypt from 'bcryptjs';

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });
  
  it('LoginService - Retorna UNAUTHORIZED quando não existe um usuário equivalente no banco de dados', async function () {
    const invalidUsername = 'gandalf';
    const invalidPassword = 'gandalf123';
  
    sinon.stub(UserModel, 'findOne').resolves();

    const { status, data } = await loginService.login(invalidUsername, invalidPassword);
    expect(status).to.equal(loginMock.serviceReturnUnauthorized.status);
    expect(data).to.deep.equal(loginMock.serviceReturnUnauthorized.data);
  })

  it('LoginService - Retorna UNAUTHORIZED quando a senha não corresponde à senha registrada no banco de dados', async function () {
    const invalidUsername = 'gandalf';
    const invalidPassword = 'gandalf123';
  
    const dataFromDB = UserModel.build(loginMock.userMock);
    sinon.stub(UserModel, 'findOne').resolves(dataFromDB);
    sinon.stub(bcrypt, 'compare').resolves(false);

    const { status, data } = await loginService.login(invalidUsername, invalidPassword);
    expect(status).to.equal(loginMock.serviceReturnUnauthorized.status);
    expect(data).to.deep.equal(loginMock.serviceReturnUnauthorized.data);
  })
});
