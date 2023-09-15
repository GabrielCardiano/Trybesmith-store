import * as Joi from 'joi';

const productSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.empty': '422|"name" is required',
    'string.base': '422|"name" must be a string',
    'string.min': '422|"name" length must be at least 3 characters long',
  }),
  price: Joi.string().min(3).required().messages({
    'string.empty': '422|"price" is required',
    'string.base': '422|"price" must be a string',
    'string.min': '422|"price" length must be at least 3 characters long',
  }),
  orderId: Joi.number().required(),
});

export default productSchema;