// src/api/orders/changeCargoProvider.ts
import { TrendyolClient } from "../../core/TrendyolClient";
import {
  IChangeCargoProviderRequest,
  IChangeCargoProviderResponse,
} from "../../types/orders.types";

/**
 * Changes the cargo provider for a shipment package.
 * Endpoint: PUT /order/sellers/{sellerId}/shipment-packages/{packageId}/cargo-providers
 */
export async function changeCargoProvider(
  this: TrendyolClient,
  packageId: number,
  body: IChangeCargoProviderRequest
): Promise<IChangeCargoProviderResponse> {
  const sellerId = this.getSellerId();
  return this.request<IChangeCargoProviderResponse>(
    "PUT",
    `/order/sellers/${sellerId}/shipment-packages/${packageId}/cargo-providers`,
    body
  );
}
