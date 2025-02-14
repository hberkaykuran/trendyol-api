// src/index.ts
export { TrendyolClient } from "./core/TrendyolClient";
export { TrendyolProductAPI } from "./api/products";
export { TrendyolOrderAPI } from "./api/orders";
export { TrendyolFinanceAPI } from "./api/finance";

// Export types for better TypeScript support
export * from "./types/products.types";
export * from "./types/finance.types";
export * from "./types/orders.types";
