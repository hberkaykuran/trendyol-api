// src/api/orders/createTestOrder.ts
import { TrendyolClient } from "../../core/TrendyolClient";
import {
  ICreateTestOrderRequest,
  ICreateTestOrderResponse,
} from "../../types/orders.types";

/**
 * Creates a test order.
 * Endpoint: POST /test/order/orders/core
 */
export async function createTestOrder(
  this: TrendyolClient,
  body: ICreateTestOrderRequest
): Promise<ICreateTestOrderResponse> {
  if (
    !body.customer ||
    !body.customer.customerFirstName ||
    !body.customer.customerLastName
  ) {
    throw new Error("Customer first and last name are required.");
  }
  if (!body.invoiceAddress || !body.invoiceAddress.addressText) {
    throw new Error("Invoice address must be provided.");
  }
  if (!body.shippingAddress || !body.shippingAddress.addressText) {
    throw new Error("Shipping address must be provided.");
  }
  if (!body.lines || body.lines.length === 0) {
    throw new Error("At least one order line is required.");
  }
  return this.request<ICreateTestOrderResponse>(
    "POST",
    `/test/order/orders/core`,
    body
  );
}
