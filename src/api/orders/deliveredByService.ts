// src/api/orders/deliveredByService.ts
import { TrendyolClient } from "../../core/TrendyolClient";
import { IDeliveredByServiceResponse } from "../../types/orders.types";

/**
 * Marks an order package as delivered by service.
 * Endpoint: PUT /order/sellers/{sellerId}/manual-deliver/{cargoTrackingNumber}
 */
export async function deliveredByService(
  this: TrendyolClient,
  cargoTrackingNumber: string
): Promise<IDeliveredByServiceResponse> {
  const sellerId = this.getSellerId();
  return this.request<IDeliveredByServiceResponse>(
    "PUT",
    `/order/sellers/${sellerId}/manual-deliver/${cargoTrackingNumber}`
  );
}
