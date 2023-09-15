export default function mapStatusHTTP(status: string): number {
  const statusHTTP: Record<string, number> = {
    INVALID_DATA: 400,
    INVALID_DATA_TYPE: 422,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    BAD_REQUEST: 400,
    CREATED: 201,
    SUCCESSFUL: 200,
  };
  return statusHTTP[status] ?? 500;
}