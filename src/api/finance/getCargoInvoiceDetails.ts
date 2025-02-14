import { TrendyolClient } from "../../core/TrendyolClient";
import { CargoInvoiceDetailsResponse } from "../../types/finance.types";

/**
 * Retrieves cargo invoice details for a given invoice serial number.
 */
export async function getCargoInvoiceDetails(
  this: TrendyolClient,
  invoiceSerialNumber: string
): Promise<CargoInvoiceDetailsResponse> {
  const sellerId = this.getSellerId();
  return this.request(
    "GET",
    `/integration/finance/che/sellers/${sellerId}/cargo-invoice/${invoiceSerialNumber}/items`
  );
}
