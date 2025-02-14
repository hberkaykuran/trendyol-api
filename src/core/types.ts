// src/core/types.ts
export interface Product {
  id: number;
  barcode: string;
  title: string;
  description: string;
  brandId: number;
  categoryId: number;
  quantity: number;
  stockCode: string;
  listPrice: number;
  salePrice: number;
  vatRate: number;
  images: { url: string }[];
}

export interface ProductResponse {
  totalElements: number;
  totalPages: number;
  page: number;
  size: number;
  content: Product[];
}

export interface Order {
  id: number;
  customerFirstName: string;
  customerLastName: string;
  orderNumber: string;
  totalPrice: number;
  status: string;
}

export interface OrderResponse {
  totalElements: number;
  totalPages: number;
  page: number;
  size: number;
  content: Order[];
}

export interface Settlement {
  id: number;
  date: string;
  totalRevenue: number;
  totalCost: number;
  netProfit: number;
}

export interface SettlementResponse {
  totalElements: number;
  totalPages: number;
  page: number;
  size: number;
  content: Settlement[];
}
