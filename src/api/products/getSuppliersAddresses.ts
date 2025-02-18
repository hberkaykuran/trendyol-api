import { ClientDependencies } from "../../types/core.types";
import { GetSuppliersAddressesResponse } from "../../types/products.types";

/**
 * Retrieves the list of supplier addresses registered under the seller's account.
 */
export async function getSuppliersAddresses(
  deps: ClientDependencies
): Promise<GetSuppliersAddressesResponse> {
  const { sellerId, request } = deps;
  return request("GET", `/sellers/${sellerId}/addresses`);
}
