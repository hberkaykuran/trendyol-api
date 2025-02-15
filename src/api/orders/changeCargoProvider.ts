// src/api/orders/changeCargoProvider.ts
import { ClientDependencies } from "../../types/core.types";
import {
  IChangeCargoProviderRequest,
  IChangeCargoProviderResponse,
} from "../../types/orders.types";

/**
 * Changes the cargo provider for a shipment package.
 * Endpoint: PUT /order/sellers/{sellerId}/shipment-packages/{packageId}/cargo-providers
 */
export async function changeCargoProvider(
  deps: ClientDependencies,
  packageId: number,
  body: IChangeCargoProviderRequest
): Promise<IChangeCargoProviderResponse> {
  const { sellerId, request } = deps;
  return request<IChangeCargoProviderResponse>(
    "PUT",
    `/order/sellers/${sellerId}/shipment-packages/${packageId}/cargo-providers`,
    body
  );
}
