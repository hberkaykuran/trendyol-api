[![npm version](https://img.shields.io/npm/v/@definitelynotl/trendyol-api.svg)](https://www.npmjs.com/package/@definitelynotl/trendyol-api)

# Trendyol API Client (TypeScript)

A **framework-agnostic**, **fully typed**, and **customizable** TypeScript API client for **Trendyol Integration API**.

> **⚠️ Disclaimer:** This package is under **active development** and is **nowhere near production-ready**. Use at your own risk, and thoroughly test before relying on it in a production environment.

## 🚀 Features
- 📌 **Supports Products, Orders, and Finance**
- 🔄 **Customizable HTTP client (Axios, Fetch, etc.)**
- ✅ **Strict TypeScript types for safe API interactions**
- 🔧 **Works in Node.js, Next.js, Express, NestJS, Deno, etc.**

## 📦 Installation
```sh
npm install trendyol-api
```

## 🛠️ Usage

Simply initialize a `TrendyolClient` and use its API modules via the exposed properties. For example:

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
async function fetchProducts() {
  const products = await client.products.getProducts();
  console.log(products);
}

fetchProducts();
```

### 3️⃣ Fetch Orders
```typescript
async function fetchOrders() {
  const orders = await client.orders.getShipmentPackages({
    startDate: "2024-01-01",
    endDate: "2024-01-14",
    status: "Created"
  });
  console.log(orders);
}

fetchOrders();
```

### 4️⃣ Use Finance API
```typescript
async function fetchSettlements() {
  const settlements = await client.finance.getSettlements("2024-01-01", "2024-01-15");
  console.log(settlements);
}

fetchSettlements();
```

## ✅ Testing
Run tests with:

```sh
npm test
```

## 📜 License
MIT

## Repository & Contributions

This project is open source. You can find the repository at:  
https://github.com/hberkaykuran/trendyol-api

Contributions are welcome! Please fork the repository, create a new branch for your changes, and submit a pull request. For major changes, open an issue first to discuss your proposed improvements.
