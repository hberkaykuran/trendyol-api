// src/api/webhooks.ts
import { TrendyolClient } from "../core/TrendyolClient";

export class TrendyolWebhookAPI {
  private client: TrendyolClient;

  constructor(client: TrendyolClient) {
    this.client = client;
  }

  async registerWebhook(callbackUrl: string, subscribedEvents: string[]) {
    return this.client.request(
      "POST",
      `/webhook/sellers/${this.client.getSellerId()}/webhooks`,
      {
        url: callbackUrl,
        subscribedStatuses: subscribedEvents,
      }
    );
  }
}
