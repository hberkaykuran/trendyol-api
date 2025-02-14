// src/api/orders/updateWarehouseInformation.ts
import { TrendyolClient } from "../../core/TrendyolClient";
import {
  IUpdateWarehouseRequest,
  IUpdateWarehouseResponse,
} from "../../types/orders.types";

/**
 * Updates the warehouse information for a shipment package.
 * Endpoint: PUT /order/sellers/{sellerId}/shipment-packages/{packageId}/warehouse
 */
export async function updateWarehouseInformation(
  this: TrendyolClient,
  packageId: number,
  body: IUpdateWarehouseRequest
): Promise<IUpdateWarehouseResponse> {
  const sellerId = this.getSellerId();
  return this.request<IUpdateWarehouseResponse>(
    "PUT",
    `/order/sellers/${sellerId}/shipment-packages/${packageId}/warehouse`,
    body
  );
}
