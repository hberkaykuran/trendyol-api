import { ClientDependencies } from "../../types/core.types";
import { GetCategoryTreeResponse } from "../../types/products.types";

/**
 * Retrieves the hierarchical structure of all product categories in Trendyol.
 */
export async function getCategoryTree(
  deps: ClientDependencies
): Promise<GetCategoryTreeResponse> {
  const { request } = deps;
  return request("GET", `/integration/product/product-categories`);
}
