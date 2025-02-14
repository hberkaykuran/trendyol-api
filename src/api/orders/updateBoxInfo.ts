// src/api/orders/updateBoxInfo.ts

import { TrendyolClient } from "../../core/TrendyolClient";
import {
  IUpdateBoxInfoRequest,
  IUpdateBoxInfoResponse,
} from "../../types/orders.types";

/**
 * Updates deci and box quantity information.
 * Endpoint: PUT /order/sellers/{sellerId}/shipment-packages/{packageId}/box-info
 */
export async function updateBoxInfo(
  this: TrendyolClient,
  packageId: number,
  body: IUpdateBoxInfoRequest
): Promise<IUpdateBoxInfoResponse> {
  const sellerId = this.getSellerId();
  return this.request<IUpdateBoxInfoResponse>(
    "PUT",
    `/order/sellers/${sellerId}/shipment-packages/${packageId}/box-info`,
    body
  );
}
