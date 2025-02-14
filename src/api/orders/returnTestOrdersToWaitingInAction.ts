// src/api/orders/returnTestOrdersToWaitingInAction.ts
import { TrendyolClient } from "../../core/TrendyolClient";
import {
  IReturnTestOrderToWaitingInActionRequest,
  IReturnTestOrderToWaitingInActionResponse,
} from "../../types/orders.types";

/**
 * Returns test orders to the WaitingInAction status.
 * Endpoint: PUT /test/order/sellers/{sellerId}/claims/waiting-in-action
 */
export async function returnTestOrdersToWaitingInAction(
  this: TrendyolClient,
  body: IReturnTestOrderToWaitingInActionRequest
): Promise<IReturnTestOrderToWaitingInActionResponse> {
  const sellerId = this.getSellerId();
  return this.request<IReturnTestOrderToWaitingInActionResponse>(
    "PUT",
    `/test/order/sellers/${sellerId}/claims/waiting-in-action`,
    body
  );
}
