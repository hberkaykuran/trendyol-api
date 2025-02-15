import { ClientDependencies } from "../../types/core.types";
import {
  SettlementsResponse,
  SettlementsParams,
} from "../../types/finance.types";

/**
 * Retrieves settlement transactions (sales, returns, discounts, etc.) from Trendyol.
 *
 * The date range between `startDate` and `endDate` **cannot exceed 15 days**.
 * A `transactionType` **must be provided** (only one per request).
 *
 * @throws {Error} If required parameters are missing or invalid.
 */
export async function getSettlements(
  deps: ClientDependencies,
  params: SettlementsParams
): Promise<SettlementsResponse> {
  if (!params.startDate || !params.endDate)
    throw new Error("startDate and endDate must be provided.");
  if (
    new Date(params.endDate).getTime() - new Date(params.startDate).getTime() >
    15 * 24 * 60 * 60 * 1000
  )
    throw new Error("Date range cannot exceed 15 days.");
  if (!params.transactionType)
    throw new Error(
      "transactionType is required and only one type can be used per request."
    );

  const { sellerId, request } = deps;
  const queryParams = new URLSearchParams();

  if (params.startDate)
    queryParams.append("startDate", params.startDate.toString());
  if (params.endDate) queryParams.append("endDate", params.endDate.toString());
  if (params.transactionType)
    queryParams.append("transactionType", params.transactionType);
  if (params.page !== undefined)
    queryParams.append("page", params.page.toString());
  if (params.size !== undefined)
    queryParams.append("size", params.size.toString());

  return request(
    "GET",
    `/integration/finance/che/sellers/${sellerId}/settlements?${queryParams.toString()}`
  );
}
