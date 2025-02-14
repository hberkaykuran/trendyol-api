// src/api/orders.ts
import { TrendyolClient } from "../core/TrendyolClient";
import { OrderResponse } from "../core/types";

export class TrendyolOrderAPI {
  private client: TrendyolClient;

  constructor(client: TrendyolClient) {
    this.client = client;
  }

  async getOrders(status: string = "Created"): Promise<OrderResponse> {
    return this.client.request(
      "GET",
      `/order/sellers/${this.client.getSellerId()}/orders?status=${status}`
    );
  }
}
