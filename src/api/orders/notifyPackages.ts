// src/api/orders/notifyPackages.ts
import { ClientDependencies } from "../../types/core.types";
import {
  IUpdatePackageRequest,
  IUpdatePackageResponse,
} from "../../types/orders.types";

/**
 * Notifies Trendyol about a package update (e.g. status change to Picking or Invoiced).
 * Endpoint: PUT /order/sellers/{sellerId}/shipment-packages/{packageId}
 */
export async function notifyPackages(
  deps: ClientDependencies,
  packageId: number,
  body: IUpdatePackageRequest
): Promise<IUpdatePackageResponse> {
  const { sellerId, request } = deps;
  return request<IUpdatePackageResponse>(
    "PUT",
    `/order/sellers/${sellerId}/shipment-packages/${packageId}`,
    body
  );
}
