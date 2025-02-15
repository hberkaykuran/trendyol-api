// src/api/orders/splitShipmentPackage.ts
import { ClientDependencies } from "../../types/core.types";
import {
  ISplitShipmentPackageRequest,
  ISplitShipmentPackageResponse,
} from "../../types/orders.types";

/**
 * Splits an order package.
 * Endpoint: POST /order/sellers/{sellerId}/shipment-packages/{packageId}/split-packages
 */
export async function splitShipmentPackage(
  deps: ClientDependencies,
  packageId: number,
  body: ISplitShipmentPackageRequest
): Promise<ISplitShipmentPackageResponse> {
  const { sellerId, request } = deps;
  return request<ISplitShipmentPackageResponse>(
    "POST",
    `/order/sellers/${sellerId}/shipment-packages/${packageId}/split-packages`,
    body
  );
}
