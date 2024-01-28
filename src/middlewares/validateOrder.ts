import UserModel from '../database/models/user.model';
import { ValidateOrderParamsResponse } from '../types/ServiceResponse';

const validateUserId = async (userId: number): Promise<ValidateOrderParamsResponse> => {
  // const { productIds, userId } = req.body;
  // valdade userId
  if (!userId) {
    return { status: 'INVALID_DATA', data: { message: '"userId" is required' } };
  }
  if (typeof userId !== 'number') {
    return { status: 'UNPROCESSABLE_CONTENT', data: { message: '"userId" must be a number' } };
  }
  const user = await UserModel.findOne({ where: { id: userId } });
  if (!user) {
    return { status: 'BAD_REQUEST', data: { message: '"userId" not found' } };
  }
};

const validateProductIds = (productIds: number[]) => {
  if (!productIds) {
    return { status: 'INVALID_DATA', data: { message: '"productIds" is required' } };
  }

  if (!Array.isArray(productIds)) {
    return { status: 'UNPROCESSABLE_CONTENT', data: { message: '"productIds" must be an array' } };
  }
  if (productIds.length === 0) {
    return {
      status: 'UNPROCESSABLE_CONTENT',
      data: { message: '"productIds" must be only numbers' },
    };
  }
};

export default {
  validateUserId,
  validateProductIds,
};