// src/api/products.ts
import { TrendyolClient } from "../core/TrendyolClient";
import { ProductResponse } from "../core/types";

export class TrendyolProductAPI {
  private client: TrendyolClient;

  constructor(client: TrendyolClient) {
    this.client = client;
  }

  async getProducts(page = 0, size = 20): Promise<ProductResponse> {
    return this.client.request(
      "GET",
      `/product/sellers/${this.client.getSellerId()}/products?page=${page}&size=${size}`
    );
  }

  async updateProductStock(barcode: string, quantity: number) {
    return this.client.request(
      "POST",
      `/inventory/sellers/${this.client.getSellerId()}/products/price-and-inventory`,
      {
        items: [{ barcode, quantity }],
      }
    );
  }
}
