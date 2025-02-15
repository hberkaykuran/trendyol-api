// src/core/TrendyolClient.ts
import axios, { AxiosInstance } from "axios";

import { RequestFn, ClientDependencies } from "../types/core.types";
import { TrendyolOrderAPI } from "../api/orders";
import { TrendyolProductAPI } from "../api/products";
import { TrendyolFinanceAPI } from "../api/finance";

export interface TrendyolClientConfig {
  sellerId: number;
  apiKey: string;
  apiSecret: string;
  baseUrl?: string;
  customFetcher?: AxiosInstance;
}

export class TrendyolClient {
  private sellerId: number;
  private apiKey: string;
  private apiSecret: string;
  private baseUrl: string;
  private client: AxiosInstance;

  public orders: TrendyolOrderAPI;
  public products: TrendyolProductAPI;
  public finance: TrendyolFinanceAPI;

  constructor(config: TrendyolClientConfig) {
    this.sellerId = config.sellerId;
    this.apiKey = config.apiKey;
    this.apiSecret = config.apiSecret;
    this.baseUrl = config.baseUrl || "https://apigw.trendyol.com/integration";

    this.client =
      config.customFetcher ||
      axios.create({
        baseURL: this.baseUrl,
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${this.apiKey}:${this.apiSecret}`
          ).toString("base64")}`,
          "Content-Type": "application/json",
          "User-Agent": `${this.sellerId} - SelfIntegration`,
        },
      });

    // Create a dependency object with only what's needed.
    const dependencies: ClientDependencies = {
      request: this.request.bind(this),
      sellerId: this.sellerId,
    };

    // Pass the dependencies object to your modules.
    this.orders = new TrendyolOrderAPI(dependencies);
    this.products = new TrendyolProductAPI(dependencies);
    this.finance = new TrendyolFinanceAPI(dependencies);
  }

  public async request<T>(
    method: "GET" | "POST" | "PUT" | "DELETE",
    endpoint: string,
    data?: object
  ): Promise<T> {
    try {
      const response = await this.client.request<T>({
        method,
        url: endpoint,
        data,
      });
      return response.data;
    } catch (error: any) {
      console.error(
        "Trendyol API Error:",
        error.response?.data || error.message
      );
      throw error;
    }
  }
}
