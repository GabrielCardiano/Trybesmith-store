import { Product, ProductWithoutOrderID } from "../../src/types/Product";
import { ServiceResponse } from "../../src/types/ServiceResponse";

const returnDB: Product = {
  id: 6,
  name: 'Grond, hammer of the underworld',
  price: '30 peças de ouro',
  orderId: 4
};

const modelReturn: ProductWithoutOrderID = {
  id: 6,
  name: 'Grond, hammer of the underworld',
  price: '30 peças de ouro',
}

const bodyRequest = {
  "name": "Grond, hammer of the underworld",
  "price": "30 peças de ouro",
  "orderId": 4,
}

const serviceReturn: ServiceResponse<ProductWithoutOrderID> = {
    status: 'CREATED',
    data: modelReturn,
}

export default {
  returnDB,
  serviceReturn,
  bodyRequest,
  modelReturn,
}
