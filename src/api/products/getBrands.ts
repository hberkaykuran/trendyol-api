import { TrendyolClient } from "../../core/TrendyolClient";
import { ClientDependencies } from "../../types/core.types";
import { GetBrandsResponse } from "../../types/products.types";

/**
 * Retrieves a list of brands available in the Trendyol system.
 */
export async function getBrands(
  deps: ClientDependencies
): Promise<GetBrandsResponse> {
  const { request } = deps;
  return request("GET", `/integration/product/brands`);
}
