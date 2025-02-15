import { ClientDependencies } from "../../types/core.types";
import { CargoInvoiceDetailsResponse } from "../../types/finance.types";

/**
 * Retrieves cargo invoice details for a given invoice serial number.
 */
export async function getCargoInvoiceDetails(
  deps: ClientDependencies,
  invoiceSerialNumber: string
): Promise<CargoInvoiceDetailsResponse> {
  const { sellerId, request } = deps;
  return request(
    "GET",
    `/integration/finance/che/sellers/${sellerId}/cargo-invoice/${invoiceSerialNumber}/items`
  );
}
