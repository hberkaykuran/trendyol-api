import { ClientDependencies } from "../../types/core.types";
import { Product } from "../../types/products.types";

/**
 * Creates new products in the Trendyol system.
 *
 * This function performs validation checks before sending the request.
 * It ensures that barcode, title, productMainId, and stockCode adhere to
 * Trendyol's length restrictions. The request is sent as a batch operation.
 *
 * @throws {Error} If any product fails validation (e.g., barcode exceeds 40 characters).
 */
export async function createProduct(
  deps: ClientDependencies,
  productData: { items: Product[] }
): Promise<{ batchRequestId: string }> {
  for (const product of productData.items) {
    if (product.barcode.length > 40)
      throw new Error("Barcode cannot exceed 40 characters.");
    if (product.title.length > 100)
      throw new Error("Title cannot exceed 100 characters.");
    if (product.productMainId.length > 40)
      throw new Error("ProductMainId cannot exceed 40 characters.");
    if (product.stockCode.length > 100)
      throw new Error("StockCode cannot exceed 100 characters.");
    if (product.description.length > 30000)
      throw new Error("Description cannot exceed 30,000 characters.");
    if (product.images.length > 8) throw new Error("Maximum 8 images allowed.");
  }
  const { sellerId, request } = deps;
  return request("POST", `/product/sellers/${sellerId}/products`, productData);
}
