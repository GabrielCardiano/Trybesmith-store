import { RequestHandler } from 'express';
import * as jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

const authMiddleware: RequestHandler = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token inexistente' });
  }

  const token = authorization.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'invalid Token ' });
  }

  try {
    jwt.verify(token, secret);
    return next();
  } catch (err) {
    res.status(401).json({ message: 'Token não verificado' });
  }
};

export default authMiddleware;