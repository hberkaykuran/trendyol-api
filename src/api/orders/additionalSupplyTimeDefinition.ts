// src/api/orders/additionalSupplyTimeDefinition.ts
import { ClientDependencies } from "../../types/core.types";
import {
  IAdditionalSupplyTimeRequest,
  IAdditionalSupplyTimeResponse,
} from "../../types/orders.types";

/**
 * Defines additional supply time for a shipment package.
 * Endpoint: PUT /order/sellers/{sellerId}/shipment-packages/{packageId}/extended-agreed-delivery-date
 */
export async function additionalSupplyTimeDefinition(
  deps: ClientDependencies,
  packageId: number,
  body: IAdditionalSupplyTimeRequest
): Promise<IAdditionalSupplyTimeResponse> {
  const { sellerId, request } = deps;
  return request<IAdditionalSupplyTimeResponse>(
    "PUT",
    `/order/sellers/${sellerId}/shipment-packages/${packageId}/extended-agreed-delivery-date`,
    body
  );
}
