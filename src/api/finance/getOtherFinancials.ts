// src/api/orders/getShipmentPackages.ts
import { TrendyolClient } from "../../core/TrendyolClient";
import {
  IGetOrderPackagesParams,
  IGetOrderPackagesResponse,
} from "../../types/orders.types";
import { convertToTimestamp } from "../../utils/convertToTimestamp";

/**
 * Retrieves order packages.
 * Endpoint: GET /order/sellers/{sellerId}/orders
 *
 * Note: startDate and endDate can be provided as string | number | Date.
 */
export async function getShipmentPackages(
  this: TrendyolClient,
  params?: IGetOrderPackagesParams
): Promise<IGetOrderPackagesResponse> {
  const queryParams = new URLSearchParams();

  if (params) {
    if (params.startDate) {
      queryParams.append(
        "startDate",
        convertToTimestamp(params.startDate).toString()
      );
    }
    if (params.endDate) {
      queryParams.append(
        "endDate",
        convertToTimestamp(params.endDate).toString()
      );
    }
    if (params.page !== undefined) {
      queryParams.append("page", params.page.toString());
    }
    if (params.size !== undefined) {
      queryParams.append("size", params.size.toString());
    }
    if (params.status) {
      queryParams.append("status", params.status);
    }
    if (params.orderNumber) {
      queryParams.append("orderNumber", params.orderNumber);
    }
    if (params.orderByField) {
      queryParams.append("orderByField", params.orderByField);
    }
    if (params.orderByDirection) {
      queryParams.append("orderByDirection", params.orderByDirection);
    }
    // TODO: api docs list shipmentPackageIds as long type
    if (params.shipmentPackageIds) {
      if (Array.isArray(params.shipmentPackageIds)) {
        queryParams.append(
          "shipmentPackageIds",
          params.shipmentPackageIds.join(",")
        );
      } else {
        queryParams.append(
          "shipmentPackageIds",
          params.shipmentPackageIds.toString()
        );
      }
    }
  }

  const sellerId = this.getSellerId();
  return this.request<IGetOrderPackagesResponse>(
    "GET",
    `/order/sellers/${sellerId}/orders?${queryParams.toString()}`
  );
}
