// src/api/orders/returnTestOrdersToWaitingInAction.ts
import { ClientDependencies } from "../../types/core.types";
import {
  IReturnTestOrderToWaitingInActionRequest,
  IReturnTestOrderToWaitingInActionResponse,
} from "../../types/orders.types";

/**
 * Returns test orders to the WaitingInAction status.
 * Endpoint: PUT /test/order/sellers/{sellerId}/claims/waiting-in-action
 */
export async function returnTestOrdersToWaitingInAction(
  deps: ClientDependencies,
  body: IReturnTestOrderToWaitingInActionRequest
): Promise<IReturnTestOrderToWaitingInActionResponse> {
  const { sellerId, request } = deps;
  return request<IReturnTestOrderToWaitingInActionResponse>(
    "PUT",
    `/test/order/sellers/${sellerId}/claims/waiting-in-action`,
    body
  );
}
