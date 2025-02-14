import { TrendyolClient } from "../../core/TrendyolClient";
import { GetCategoryAttributesResponse } from "../../types/products.types";

/**
 * Retrieves all attributes associated with a given category.
 *
 * @throws {Error} If `categoryId` is not provided.
 */
export async function getCategoryAttributes(
  this: TrendyolClient,
  categoryId: number
): Promise<GetCategoryAttributesResponse> {
  if (!categoryId) throw new Error("Category ID must be provided.");
  return this.request(
    "GET",
    `/integration/product/product-categories/${categoryId}/attributes`
  );
}
