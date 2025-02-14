// src/api/orders/shippingAlternativeDelivery.ts

import { TrendyolClient } from "../../core/TrendyolClient";
import {
  IShippingAlternativeDeliveryRequest,
  IShippingAlternativeDeliveryResponse,
} from "../../types/orders.types";

/**
 * Submits alternative shipping delivery information.
 * Endpoint: PUT /order/sellers/{sellerId}/shipment-packages/{packageId}/alternative-delivery
 */
export async function shippingAlternativeDelivery(
  this: TrendyolClient,
  packageId: number,
  body: IShippingAlternativeDeliveryRequest
): Promise<IShippingAlternativeDeliveryResponse> {
  const sellerId = this.getSellerId();
  return this.request<IShippingAlternativeDeliveryResponse>(
    "PUT",
    `/order/sellers/${sellerId}/shipment-packages/${packageId}/alternative-delivery`,
    body
  );
}
