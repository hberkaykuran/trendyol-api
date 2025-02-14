// src/api/orders/additionalSupplyTimeDefinition.ts
import { TrendyolClient } from "../../core/TrendyolClient";
import {
  IAdditionalSupplyTimeRequest,
  IAdditionalSupplyTimeResponse,
} from "../../types/orders.types";

/**
 * Defines additional supply time for a shipment package.
 * Endpoint: PUT /order/sellers/{sellerId}/shipment-packages/{packageId}/extended-agreed-delivery-date
 */
export async function additionalSupplyTimeDefinition(
  this: TrendyolClient,
  packageId: number,
  body: IAdditionalSupplyTimeRequest
): Promise<IAdditionalSupplyTimeResponse> {
  const sellerId = this.getSellerId();
  return this.request<IAdditionalSupplyTimeResponse>(
    "PUT",
    `/order/sellers/${sellerId}/shipment-packages/${packageId}/extended-agreed-delivery-date`,
    body
  );
}
