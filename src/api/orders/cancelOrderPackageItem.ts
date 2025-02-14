// src/api/orders/cancelOrderPackageItem.ts

import { TrendyolClient } from "../../core/TrendyolClient";
import {
  ICancelOrderPackageItemRequest,
  ICancelOrderPackageItemResponse,
} from "../../types/orders.types";

/**
 * Cancels one or more items in an order package.
 * Endpoint: PUT /order/sellers/{sellerId}/shipment-packages/{packageId}/items/unsupplied
 */
export async function cancelOrderPackageItem(
  this: TrendyolClient,
  packageId: number,
  body: ICancelOrderPackageItemRequest
): Promise<ICancelOrderPackageItemResponse> {
  const sellerId = this.getSellerId();
  return this.request<ICancelOrderPackageItemResponse>(
    "PUT",
    `/order/sellers/${sellerId}/shipment-packages/${packageId}/items/unsupplied`,
    body
  );
}
