import { TrendyolClient } from "../../core/TrendyolClient";
import { UpdatePriceAndInventoryRequest } from "../../types/products.types";

/**
 * Updates the price and inventory levels of multiple products in the Trendyol system.
 *
 * Validates that barcodes do not exceed 40 characters, quantity is non-negative,
 * sale price is greater than zero, and list price is not lower than sale price.
 *
 * @throws {Error} If any validation fails.
 */
export async function updatePriceAndInventory(
  this: TrendyolClient,
  priceAndStockData: UpdatePriceAndInventoryRequest
): Promise<{ batchRequestId: string }> {
  if (priceAndStockData.items.length > 1000)
    throw new Error("Cannot update more than 1000 items per request.");

  for (const item of priceAndStockData.items) {
    if (item.barcode.length > 40)
      throw new Error("Barcode cannot exceed 40 characters.");
    if (item.quantity < 0) throw new Error("Quantity cannot be negative.");
    if (item.salePrice <= 0)
      throw new Error("Sale price must be greater than zero.");
    if (item.listPrice < item.salePrice)
      throw new Error(
        "List price must be greater than or equal to sale price."
      );
  }
  const sellerId = this.getSellerId();
  return this.request(
    "POST",
    `/inventory/sellers/${sellerId}/products/price-and-inventory`,
    priceAndStockData
  );
}
