import { ClientDependencies } from "../../types/core.types";
import { ProductInput } from "../../types/products.types";

/**
 * Updates product details in the Trendyol system.
 *
 * Ensures that barcode, title, productMainId, and stockCode comply with
 * Trendyol's length restrictions. Also validates description length
 * and image count.
 *
 * @throws {Error} If any product fails validation (e.g., barcode exceeds 40 characters).
 */
export async function updateProduct(
  deps: ClientDependencies,
  productData: {
    items: ProductInput[];
  }
): Promise<{ batchRequestId: string }> {
  if (productData.items.length > 1000)
    throw new Error("Cannot update more than 1000 products per request.");

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
  return request("PUT", `/product/sellers/${sellerId}/products`, productData);
}
