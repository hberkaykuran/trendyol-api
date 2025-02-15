// src/api/orders/deleteInvoiceLink.ts
import { ClientDependencies } from "../../types/core.types";
import {
  IDeleteInvoiceLinkRequest,
  IDeleteInvoiceLinkResponse,
} from "../../types/orders.types";

/**
 * Deletes an invoice link.
 * Endpoint: POST /sellers/{sellerId}/seller-invoice-links/delete
 */
export async function deleteInvoiceLink(
  deps: ClientDependencies,
  body: IDeleteInvoiceLinkRequest
): Promise<IDeleteInvoiceLinkResponse> {
  const { sellerId, request } = deps;
  return request<IDeleteInvoiceLinkResponse>(
    "POST",
    `/sellers/${sellerId}/seller-invoice-links/delete`,
    body
  );
}
