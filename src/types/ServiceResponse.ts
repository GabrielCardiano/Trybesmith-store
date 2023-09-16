type ErrorResponses = 'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND' | 'BAD_REQUEST';

type SuccessResponses = 'SUCCESSFUL' | 'CREATED';

export type ServiceResponseError = {
  status: ErrorResponses,
  data: { message: string }
};

export type ServiceResponseSuccess<T> = {
  status: SuccessResponses,
  data: T,
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;

export type LoginResponse = ServiceResponse<{ token: string }>;