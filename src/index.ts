// src/index.ts
export { TrendyolClient } from "./core/TrendyolClient";
export { TrendyolProductAPI } from "./api/products";
export { TrendyolOrderAPI } from "./api/orders";
export { TrendyolFinanceAPI } from "./api/finance";
export { TrendyolWebhookAPI } from "./api/webhooks";

// Export types for better TypeScript support
export * from "./core/types";
