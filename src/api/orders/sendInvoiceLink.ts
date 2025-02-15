// src/api/orders/sendInvoiceLink.ts
import { ClientDependencies } from "../../types/core.types";
import {
  ISendInvoiceLinkRequest,
  ISendInvoiceLinkResponse,
} from "../../types/orders.types";

/**
 * Sends an invoice link for a shipment package.
 * Endpoint: POST /sellers/{sellerId}/seller-invoice-links
 */
export async function sendInvoiceLink(
  deps: ClientDependencies,
  body: ISendInvoiceLinkRequest
): Promise<ISendInvoiceLinkResponse> {
  const { sellerId, request } = deps;
  return request<ISendInvoiceLinkResponse>(
    "POST",
    `/sellers/${sellerId}/seller-invoice-links`,
    body
  );
}
