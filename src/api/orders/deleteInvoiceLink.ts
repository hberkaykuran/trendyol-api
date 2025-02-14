// src/api/orders/deleteInvoiceLink.ts
import { TrendyolClient } from "../../core/TrendyolClient";
import {
  IDeleteInvoiceLinkRequest,
  IDeleteInvoiceLinkResponse,
} from "../../types/orders.types";

/**
 * Deletes an invoice link.
 * Endpoint: POST /sellers/{sellerId}/seller-invoice-links/delete
 */
export async function deleteInvoiceLink(
  this: TrendyolClient,
  body: IDeleteInvoiceLinkRequest
): Promise<IDeleteInvoiceLinkResponse> {
  const sellerId = this.getSellerId();
  return this.request<IDeleteInvoiceLinkResponse>(
    "POST",
    `/sellers/${sellerId}/seller-invoice-links/delete`,
    body
  );
}
