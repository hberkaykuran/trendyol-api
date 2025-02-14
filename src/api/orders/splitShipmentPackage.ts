// src/api/orders/splitShipmentPackage.ts
import { TrendyolClient } from "../../core/TrendyolClient";
import {
  ISplitShipmentPackageRequest,
  ISplitShipmentPackageResponse,
} from "../../types/orders.types";

/**
 * Splits an order package.
 * Endpoint: POST /order/sellers/{sellerId}/shipment-packages/{packageId}/split-packages
 */
export async function splitShipmentPackage(
  this: TrendyolClient,
  packageId: number,
  body: ISplitShipmentPackageRequest
): Promise<ISplitShipmentPackageResponse> {
  const sellerId = this.getSellerId();
  return this.request<ISplitShipmentPackageResponse>(
    "POST",
    `/order/sellers/${sellerId}/shipment-packages/${packageId}/split-packages`,
    body
  );
}
