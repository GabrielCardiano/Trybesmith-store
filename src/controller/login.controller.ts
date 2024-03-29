import { Request, Response } from 'express';
import loginService from '../services/login.service';
import mapStatusHTTP from '../utils/StatusHTTP';

async function login(req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: '"username" and "password" are required' });
  }
  const { status, data } = await loginService.login(username, password);
  return res.status(mapStatusHTTP(status)).json(data);
}

export default { login };