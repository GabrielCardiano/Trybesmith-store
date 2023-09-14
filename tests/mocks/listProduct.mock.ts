import { ProductSequelizeModel } from "../../src/database/models/product.model"
import { Product } from "../../src/types/Product"
import { ServiceResponse } from "../../src/types/ServiceResponse"

const allProducts: Product[] = [
  {
    "id": 1,
    "name": "Excalibur",
    "price": "10 peças de ouro",
    "orderId": 1
  },
  {
    "id": 2,
    "name": "Espada Justiceira",
    "price": "20 peças de ouro",
    "orderId": 1
  },
  {
    "id": 3,
    "name": "Lira de Orfeu",
    "price": "1 peça de ouro",
    "orderId": 2
  },
]

const serviceReturn: ServiceResponse<Product[]> = {
  status: 'SUCCESSFUL',
  data: allProducts,
}

export default {
  allProducts,
  serviceReturn,
}