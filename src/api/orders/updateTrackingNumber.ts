// src/api/orders/updateTrackingNumber.ts
import { TrendyolClient } from "../../core/TrendyolClient";
import {
  IUpdateTrackingNumberRequest,
  IUpdateTrackingNumberResponse,
} from "../../types/orders.types";

/**
 * Updates the shipping tracking number for a package.
 * Endpoint: PUT /order/sellers/{sellerId}/shipment-packages/{packageId}/update-tracking-number
 */
export async function updateTrackingNumber(
  this: TrendyolClient,
  packageId: number,
  body: IUpdateTrackingNumberRequest
): Promise<IUpdateTrackingNumberResponse> {
  const sellerId = this.getSellerId();
  return this.request<IUpdateTrackingNumberResponse>(
    "PUT",
    `/order/sellers/${sellerId}/shipment-packages/${packageId}/update-tracking-number`,
    body
  );
}
