// src/core/TrendyolClient.ts
import axios, { AxiosInstance } from "axios";

export interface TrendyolClientConfig {
  sellerId: number;
  apiKey: string;
  apiSecret: string;
  baseUrl?: string;
  customFetcher?: AxiosInstance; // Allow custom HTTP clients (e.g., Fetch, SuperAgent)
}

export class TrendyolClient {
  private sellerId: number;
  private apiKey: string;
  private apiSecret: string;
  private baseUrl: string;
  private client: AxiosInstance;

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
  }

  // ✅ Getter for sellerId
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
