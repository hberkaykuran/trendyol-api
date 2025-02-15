import { TrendyolClient } from "../../core/TrendyolClient";
import { ClientDependencies } from "../../types/core.types";
import {
  FilterProductsParams,
  ProductResponse,
} from "../../types/products.types";
import { convertToTimestamp } from "../../utils/convertToTimestamp";

/**
 * Retrieves a list of products based on various filtering parameters.
 *
 * Converts `startDate` and `endDate` to timestamps before appending them to the query.
 * Filters include barcode, stock code, approval status, blacklist status, and more.
 */
export async function filterProducts(
  deps: ClientDependencies,
  params?: FilterProductsParams
): Promise<ProductResponse> {
  const { sellerId, request } = deps;
  const queryParams = new URLSearchParams();

  if (params?.page !== undefined)
    queryParams.append("page", params.page.toString());
  if (params?.size !== undefined) {
    if (params.size > 100) throw new Error("Size cannot exceed 100.");
    queryParams.append("size", params.size.toString());
  }
  if (params?.startDate !== undefined)
    queryParams.append(
      "startDate",
      convertToTimestamp(params.startDate).toString()
    );
  if (params?.endDate !== undefined)
    queryParams.append(
      "endDate",
      convertToTimestamp(params.endDate).toString()
    );
  if (params?.barcode !== undefined)
    queryParams.append("barcode", params.barcode);
  if (params?.dateQueryType !== undefined)
    queryParams.append("dateQueryType", params.dateQueryType);
  if (params?.stockCode !== undefined)
    queryParams.append("stockCode", params.stockCode);
  if (params?.approved !== undefined)
    queryParams.append("approved", params.approved.toString());
  if (params?.archived !== undefined)
    queryParams.append("archived", params.archived.toString());
  if (params?.productMainId !== undefined)
    queryParams.append("productMainId", params.productMainId);
  if (params?.onSale !== undefined)
    queryParams.append("onSale", params.onSale.toString());
  if (params?.rejected !== undefined)
    queryParams.append("rejected", params.rejected.toString());
  if (params?.blacklisted !== undefined)
    queryParams.append("blacklisted", params.blacklisted.toString());
  if (params?.brandIds !== undefined)
    queryParams.append("brandIds", params.brandIds.join(","));

  const queryString = queryParams.toString()
    ? `?${queryParams.toString()}`
    : "";

  return request("GET", `/product/sellers/${sellerId}/products${queryString}`);
}
