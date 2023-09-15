import { RequestHandler } from 'express';
import productSchema from './schemas/product.schema';

const validateProduct: RequestHandler = (req, res, next) => {
  const { error } = productSchema.validate(req.body);
  if (error?.message.includes('is required')) {
    return res.status(400).json({ message: error.message });
  }
  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(Number(code)).json({ message });
  }
  return next();
};

export default validateProduct;