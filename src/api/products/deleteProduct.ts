import { ClientDependencies } from "../../types/core.types";
import { DeleteProductRequest } from "../../types/products.types";

/**
 * Deletes products from the Trendyol system.
 *
 * This function validates that at least one barcode is provided
 * and ensures barcodes do not exceed 40 characters before sending
 * the delete request.
 *
 * @throws {Error} If no barcodes are provided or if any barcode exceeds 40 characters.
 */
export async function deleteProduct(
  deps: ClientDependencies,
  deleteProductData: DeleteProductRequest
): Promise<{ batchRequestId: string }> {
  if (deleteProductData.items.length === 0)
    throw new Error("At least one barcode must be provided.");
  for (const item of deleteProductData.items) {
    if (item.barcode.length > 40)
      throw new Error("Barcode cannot exceed 40 characters.");
  }
  const { sellerId, request } = deps;
  return request(
    "DELETE",
    `/product/sellers/${sellerId}/products`,
    deleteProductData
  );
}
