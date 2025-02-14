// src/api/orders/notifyPackages.ts
import { TrendyolClient } from "../../core/TrendyolClient";
import {
  IUpdatePackageRequest,
  IUpdatePackageResponse,
} from "../../types/orders.types";

/**
 * Notifies Trendyol about a package update (e.g. status change to Picking or Invoiced).
 * Endpoint: PUT /order/sellers/{sellerId}/shipment-packages/{packageId}
 */
export async function notifyPackages(
  this: TrendyolClient,
  packageId: number,
  body: IUpdatePackageRequest
): Promise<IUpdatePackageResponse> {
  const sellerId = this.getSellerId();
  return this.request<IUpdatePackageResponse>(
    "PUT",
    `/order/sellers/${sellerId}/shipment-packages/${packageId}`,
    body
  );
}
