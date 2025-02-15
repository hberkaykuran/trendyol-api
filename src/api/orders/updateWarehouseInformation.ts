// src/api/orders/updateWarehouseInformation.ts
import { ClientDependencies } from "../../types/core.types";
import {
  IUpdateWarehouseRequest,
  IUpdateWarehouseResponse,
} from "../../types/orders.types";

/**
 * Updates the warehouse information for a shipment package.
 * Endpoint: PUT /order/sellers/{sellerId}/shipment-packages/{packageId}/warehouse
 */
export async function updateWarehouseInformation(
  deps: ClientDependencies,
  packageId: number,
  body: IUpdateWarehouseRequest
): Promise<IUpdateWarehouseResponse> {
  const { sellerId, request } = deps;
  return request<IUpdateWarehouseResponse>(
    "PUT",
    `/order/sellers/${sellerId}/shipment-packages/${packageId}/warehouse`,
    body
  );
}
