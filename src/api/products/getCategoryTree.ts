import { TrendyolClient } from "../../core/TrendyolClient";
import { GetCategoryTreeResponse } from "../../types/products.types";

/**
 * Retrieves the hierarchical structure of all product categories in Trendyol.
 */
export async function getCategoryTree(
  this: TrendyolClient
): Promise<GetCategoryTreeResponse> {
  return this.request("GET", `/integration/product/product-categories`);
}
