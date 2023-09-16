import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';
import { LoginResponse } from '../types/ServiceResponse';
import createToken from '../utils/authFunctions';

async function login(username: string, password: string): Promise<LoginResponse> {
  const user = await UserModel.findOne({ where: { username } });

  if (!user) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const isValidPassword = await bcrypt.compare(password, user.dataValues.password);
  if (!isValidPassword) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const { id, username: userName } = user.dataValues; 
  const payload = { id: id.toString(), username: userName };
  const token = createToken(payload);
  
  return { status: 'SUCCESSFUL', data: { token } };
}

export default { login };