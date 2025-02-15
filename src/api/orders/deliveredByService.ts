// src/api/orders/deliveredByService.ts
import { ClientDependencies } from "../../types/core.types";
import { IDeliveredByServiceResponse } from "../../types/orders.types";

/**
 * Marks an order package as delivered by service.
 * Endpoint: PUT /order/sellers/{sellerId}/manual-deliver/{cargoTrackingNumber}
 */
export async function deliveredByService(
  deps: ClientDependencies,
  cargoTrackingNumber: string
): Promise<IDeliveredByServiceResponse> {
  const { sellerId, request } = deps;
  return request<IDeliveredByServiceResponse>(
    "PUT",
    `/order/sellers/${sellerId}/manual-deliver/${cargoTrackingNumber}`
  );
}
