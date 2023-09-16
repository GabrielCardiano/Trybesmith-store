import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app'
import UserModel from '../../../src/database/models/user.model';
import loginMock from '../../mocks/login.mock';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Retorna status 400 se o login não enviar o username', async function () {
    // Arrange --> preara ferramentas para o teste (variaveis, objetos, stubs)
    const loginBody = { username: '' , password: 'gandalf123' }

    // Act --> executa a função que deve ser testada
    const response = await chai.request(app).post('/login').send(loginBody);

    // Assert --> verifica retornos esperados
    expect(response.status).to.be.equal(400);
    expect(response.body).to.have.key('message');
    expect(response.body).to.deep.equal({ message: '"username" and "password" are required' });
  })

  it('Retorna status 400 se o login não enviar o password', async function () {
    // Arrange --> preara ferramentas para o teste (variaveis, objetos, stubs)
    const loginBody = { username: 'gandalf' , password: '' }

    // Act --> executa a função que deve ser testada
    const response = await chai.request(app).post('/login').send(loginBody);

    // Assert --> verifica retornos esperados
    expect(response.status).to.be.equal(400);
    expect(response.body).to.have.key('message');
    expect(response.body).to.deep.equal({ message: '"username" and "password" are required' });
  })

  it('Retorna status 200 se o login enviar username e password corretamente', async function () {
    // Arrange --> preara ferramentas para o teste (variaveis, objetos, stubs)
    const user = UserModel.build(loginMock.userMock)
    const loginBody = { username: 'Helga' , password: 'valquíria' }
    sinon.stub(UserModel, 'findOne').resolves(user);

    // Act --> executa a função que deve ser testada
    const response = await chai.request(app).post('/login').send(loginBody);

    // Assert --> verifica retornos esperados
    expect(response.status).to.be.equal(200);
    expect(response.body).to.have.key('token');
    expect(response.body.token).to.be.a('string');
  })
});
