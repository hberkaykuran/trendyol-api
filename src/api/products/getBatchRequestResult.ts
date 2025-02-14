import { TrendyolClient } from "../../core/TrendyolClient";
import { BatchRequestResult } from "../../types/products.types";

/**
 * Retrieves the status and details of a batch request using its unique `batchRequestId`.
 *
 * @throws {Error} If `batchRequestId` is not provided.
 */

export async function getBatchRequestResult(
  this: TrendyolClient,
  batchRequestId: string
): Promise<BatchRequestResult> {
  if (!batchRequestId) throw new Error("Batch request ID must be provided.");
  const sellerId = this.getSellerId();
  return this.request(
    "GET",
    `/product/sellers/${sellerId}/products/batch-requests/${batchRequestId}`
  );
}
