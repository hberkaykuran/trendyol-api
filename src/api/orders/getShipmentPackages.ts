// src/api/orders/getShipmentPackages.ts
import { ClientDependencies } from "../../types/core.types";
import {
  IGetOrderPackagesParams,
  IGetOrderPackagesResponse,
} from "../../types/orders.types";
import { convertToTimestamp } from "../../utils/convertToTimestamp";

/**
 * Retrieves order packages.
 * Endpoint: GET /order/sellers/{sellerId}/orders
 *
 */
export async function getShipmentPackages(
  deps: ClientDependencies,
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

  const { sellerId, request } = deps;
  return request<IGetOrderPackagesResponse>(
    "GET",
    `/order/sellers/${sellerId}/orders?${queryParams.toString()}`
  );
}
