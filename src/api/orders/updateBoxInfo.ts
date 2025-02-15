// src/api/orders/updateBoxInfo.ts
import { ClientDependencies } from "../../types/core.types";
import {
  IUpdateBoxInfoRequest,
  IUpdateBoxInfoResponse,
} from "../../types/orders.types";

/**
 * Updates deci and box quantity information.
 * Endpoint: PUT /order/sellers/{sellerId}/shipment-packages/{packageId}/box-info
 */
export async function updateBoxInfo(
  deps: ClientDependencies,
  packageId: number,
  body: IUpdateBoxInfoRequest
): Promise<IUpdateBoxInfoResponse> {
  const { sellerId, request } = deps;
  return request<IUpdateBoxInfoResponse>(
    "PUT",
    `/order/sellers/${sellerId}/shipment-packages/${packageId}/box-info`,
    body
  );
}
