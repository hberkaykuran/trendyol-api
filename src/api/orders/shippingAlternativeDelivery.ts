// src/api/orders/shippingAlternativeDelivery.ts
import { ClientDependencies } from "../../types/core.types";
import {
  IShippingAlternativeDeliveryRequest,
  IShippingAlternativeDeliveryResponse,
} from "../../types/orders.types";

/**
 * Submits alternative shipping delivery information.
 * Endpoint: PUT /order/sellers/{sellerId}/shipment-packages/{packageId}/alternative-delivery
 */
export async function shippingAlternativeDelivery(
  deps: ClientDependencies,
  packageId: number,
  body: IShippingAlternativeDeliveryRequest
): Promise<IShippingAlternativeDeliveryResponse> {
  const { sellerId, request } = deps;
  return request<IShippingAlternativeDeliveryResponse>(
    "PUT",
    `/order/sellers/${sellerId}/shipment-packages/${packageId}/alternative-delivery`,
    body
  );
}
