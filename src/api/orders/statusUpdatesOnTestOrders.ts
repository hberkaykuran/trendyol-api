// src/api/orders/statusUpdatesOnTestOrders.ts
import { TrendyolClient } from "../../core/TrendyolClient";
import {
  IUpdateTestOrderStatusRequest,
  IUpdateTestOrderStatusResponse,
} from "../../types/orders.types";

/**
 * Updates the status of a test order.
 * Endpoint: PUT /test/order/sellers/{sellerId}/shipment-packages/{packageId}/status
 */
export async function statusUpdatesOnTestOrders(
  this: TrendyolClient,
  packageId: number,
  body: IUpdateTestOrderStatusRequest
): Promise<IUpdateTestOrderStatusResponse> {
  const sellerId = this.getSellerId();
  return this.request<IUpdateTestOrderStatusResponse>(
    "PUT",
    `/test/order/sellers/${sellerId}/shipment-packages/${packageId}/status`,
    body
  );
}
