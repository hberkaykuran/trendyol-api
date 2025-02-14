import { TrendyolClient } from "../../core/TrendyolClient";
import { GetBrandsResponse } from "../../types/products.types";

/**
 * Retrieves a list of brands available in the Trendyol system.
 */
export async function getBrands(
  this: TrendyolClient
): Promise<GetBrandsResponse> {
  return this.request("GET", `/integration/product/brands`);
}
