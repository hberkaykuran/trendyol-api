# Trendyol API Client (TypeScript)

A **framework-agnostic**, **fully typed**, and **customizable** TypeScript API client for **Trendyol Integration API**.

## 🚀 Features
- 📌 **Supports Products, Orders, Finance, and Webhooks**
- 🔄 **Customizable HTTP client (Axios, Fetch, etc.)**
- ✅ **Strict TypeScript types for safe API interactions**
- 🔧 **Works in Node.js, Next.js, Express, NestJS, Deno, etc.**

## 📦 Installation
```sh
npm install trendyol-api
```

## 🛠️ Usage
### 1️⃣ Initialize the Client
```typescript
import { TrendyolClient } from "trendyol-api";

const client = new TrendyolClient({
  sellerId: 123456,
  apiKey: "your-api-key",
  apiSecret: "your-api-secret",
});
```
### 2️⃣ Fetch Products
```typescript
import { TrendyolProductAPI } from "trendyol-api";

const productAPI = new TrendyolProductAPI(client);

async function fetchProducts() {
  const products = await productAPI.getProducts();
  console.log(products);
}

fetchProducts();
```
### 3️⃣ Fetch Orders
```typescript
import { TrendyolOrderAPI } from "trendyol-api";

const orderAPI = new TrendyolOrderAPI(client);

async function fetchOrders() {
  const orders = await orderAPI.getOrders();
  console.log(orders);
}

fetchOrders();
```
### 4️⃣ Use Finance API
```typescript
import { TrendyolFinanceAPI } from "trendyol-api";

const financeAPI = new TrendyolFinanceAPI(client);

async function fetchSettlements() {
  const settlements = await financeAPI.getSettlements("2024-01-01", "2024-02-01");
  console.log(settlements);
}

fetchSettlements();
```
### 5️⃣ Register a Webhook
```typescript
import { TrendyolWebhookAPI } from "trendyol-api";

const webhookAPI = new TrendyolWebhookAPI(client);

async function registerWebhook() {
  await webhookAPI.registerWebhook("https://your-site.com/webhook", ["Created", "Shipped"]);
}

registerWebhook();
```
## ✅ Testing
Run tests with:

```sh
npm test
```
## 📜 License
MIT