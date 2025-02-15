// src/api/orders/statusUpdatesOnTestOrders.ts
import { ClientDependencies } from "../../types/core.types";
import {
  IUpdateTestOrderStatusRequest,
  IUpdateTestOrderStatusResponse,
} from "../../types/orders.types";

/**
 * Updates the status of a test order.
 * Endpoint: PUT /test/order/sellers/{sellerId}/shipment-packages/{packageId}/status
 */
export async function statusUpdatesOnTestOrders(
  deps: ClientDependencies,
  packageId: number,
  body: IUpdateTestOrderStatusRequest
): Promise<IUpdateTestOrderStatusResponse> {
  const { sellerId, request } = deps;
  return request<IUpdateTestOrderStatusResponse>(
    "PUT",
    `/test/order/sellers/${sellerId}/shipment-packages/${packageId}/status`,
    body
  );
}
