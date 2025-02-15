// src/api/orders/updateTrackingNumber.ts
import { ClientDependencies } from "../../types/core.types";
import {
  IUpdateTrackingNumberRequest,
  IUpdateTrackingNumberResponse,
} from "../../types/orders.types";

/**
 * Updates the shipping tracking number for a package.
 * Endpoint: PUT /order/sellers/{sellerId}/shipment-packages/{packageId}/update-tracking-number
 */
export async function updateTrackingNumber(
  deps: ClientDependencies,
  packageId: number,
  body: IUpdateTrackingNumberRequest
): Promise<IUpdateTrackingNumberResponse> {
  if (!body.trackingNumber || body.trackingNumber.trim() === "") {
    throw new Error("trackingNumber must be provided.");
  }
  const { sellerId, request } = deps;
  return request<IUpdateTrackingNumberResponse>(
    "PUT",
    `/order/sellers/${sellerId}/shipment-packages/${packageId}/update-tracking-number`,
    body
  );
}
