import { ClientDependencies } from "../../types/core.types";
import { GetCategoryAttributesResponse } from "../../types/products.types";

/**
 * Retrieves all attributes associated with a given category.
 *
 * @throws {Error} If `categoryId` is not provided.
 */
export async function getCategoryAttributes(
  deps: ClientDependencies,
  categoryId: number
): Promise<GetCategoryAttributesResponse> {
  if (!categoryId) throw new Error("Category ID must be provided.");
  const { request } = deps;
  return request(
    "GET",
    `/integration/product/product-categories/${categoryId}/attributes`
  );
}
