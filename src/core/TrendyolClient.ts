import axios, { AxiosInstance } from "axios";
import { TrendyolProductAPI } from "../api/products";
import { TrendyolOrderAPI } from "../api/orders";
import { TrendyolFinanceAPI } from "../api/finance";

/**
 * Configuration options for initializing the Trendyol API client.
 */
export interface TrendyolClientConfig {
  /** The unique seller ID provided by Trendyol. */
  sellerId: number;

  /** The API key used for authentication. */
  apiKey: string;

  /** The API secret used for authentication. */
  apiSecret: string;

  /** Optional: Base URL for Trendyol API requests (defaults to the production URL). */
  baseUrl?: string;

  /** Optional: A custom Axios instance for making requests. */
  customFetcher?: AxiosInstance;
}

export class TrendyolClient {
  private sellerId: number;
  private apiKey: string;
  private apiSecret: string;
  private baseUrl: string;
  private client: AxiosInstance;

  public products: TrendyolProductAPI;
  public orders: TrendyolOrderAPI;
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
            `${this.sellerId}:${this.apiKey}:${this.apiSecret}`
          ).toString("base64")}`,
          "Content-Type": "application/json",
          "User-Agent": `${this.sellerId} - SelfIntegration`,
        },
      });

    // Attach API modules to the main client
    this.products = new TrendyolProductAPI(this);
    this.orders = new TrendyolOrderAPI(this);
    this.finance = new TrendyolFinanceAPI(this);
  }

  public getSellerId(): number {
    return this.sellerId;
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
