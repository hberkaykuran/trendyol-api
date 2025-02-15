// src/api/orders/cancelOrderPackageItem.ts
import { ClientDependencies } from "../../types/core.types";
import {
  ICancelOrderPackageItemRequest,
  ICancelOrderPackageItemResponse,
} from "../../types/orders.types";

/**
 * Cancels one or more items in an order package.
 * Endpoint: PUT /order/sellers/{sellerId}/shipment-packages/{packageId}/items/unsupplied
 */
export async function cancelOrderPackageItem(
  deps: ClientDependencies,
  packageId: number,
  body: ICancelOrderPackageItemRequest
): Promise<ICancelOrderPackageItemResponse> {
  const { sellerId, request } = deps;
  return request<ICancelOrderPackageItemResponse>(
    "PUT",
    `/order/sellers/${sellerId}/shipment-packages/${packageId}/items/unsupplied`,
    body
  );
}
