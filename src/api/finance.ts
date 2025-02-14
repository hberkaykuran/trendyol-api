// src/api/finance.ts
import { TrendyolClient } from "../core/TrendyolClient";
import { SettlementResponse } from "../core/types";

export class TrendyolFinanceAPI {
  private client: TrendyolClient;

  constructor(client: TrendyolClient) {
    this.client = client;
  }

  async getSettlements(
    startDate: string,
    endDate: string
  ): Promise<SettlementResponse> {
    return this.client.request(
      "GET",
      `/settlement/sellers/${this.client.getSellerId()}?startDate=${startDate}&endDate=${endDate}`
    );
  }
}
