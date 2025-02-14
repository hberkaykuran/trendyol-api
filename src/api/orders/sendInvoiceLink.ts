// src/api/orders/sendInvoiceLink.ts
import { TrendyolClient } from "../../core/TrendyolClient";
import {
  ISendInvoiceLinkRequest,
  ISendInvoiceLinkResponse,
} from "../../types/orders.types";

/**
 * Sends an invoice link for a shipment package.
 * Endpoint: POST /sellers/{sellerId}/seller-invoice-links
 */
export async function sendInvoiceLink(
  this: TrendyolClient,
  body: ISendInvoiceLinkRequest
): Promise<ISendInvoiceLinkResponse> {
  const sellerId = this.getSellerId();
  return this.request<ISendInvoiceLinkResponse>(
    "POST",
    `/sellers/${sellerId}/seller-invoice-links`,
    body
  );
}
