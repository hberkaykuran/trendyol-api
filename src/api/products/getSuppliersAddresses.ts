import { TrendyolClient } from "../../core/TrendyolClient";
import { GetSuppliersAddressesResponse } from "../../types/products.types";

/**
 * Retrieves the list of supplier addresses registered under the seller's account.
 */
export async function getSuppliersAddresses(
  this: TrendyolClient
): Promise<GetSuppliersAddressesResponse> {
  const sellerId = this.getSellerId();
  return this.request("GET", `/integration/sellers/${sellerId}/addresses`);
}
