import { ClientDependencies } from "../../types/core.types";
import { BatchRequestResult } from "../../types/products.types";

/**
 * Retrieves the status and details of a batch request using its unique `batchRequestId`.
 *
 * @throws {Error} If `batchRequestId` is not provided.
 */
export async function getBatchRequestResult(
  deps: ClientDependencies,
  batchRequestId: string
): Promise<BatchRequestResult> {
  if (!batchRequestId) throw new Error("Batch request ID must be provided.");

  const { sellerId, request } = deps;
  return request<BatchRequestResult>(
    "GET",
    `/product/sellers/${sellerId}/products/batch-requests/${batchRequestId}`
  );
}
