import * as jwt from 'jsonwebtoken';
import { Token } from '../types/Token';

const jwtSecret = process.env.JWT_SECRET || 'secret';

const createToken = (payload: Token): string => jwt.sign(payload, jwtSecret);
// const decodeToken = (authToken) => jwt.verify(authToken, jwtSecret);

export default createToken;