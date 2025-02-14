import { TrendyolClient } from "../../core/TrendyolClient";
import { getSettlements } from "./getSettlements";
import { getOtherFinancials } from "./getOtherFinancials";
import { getCargoInvoiceDetails } from "./getCargoInvoiceDetails";

/**
 * Provides an interface for retrieving financial data from Trendyol.
 *
 * This API allows fetching settlements, other financial transactions, and cargo invoice details.
 */
export class TrendyolFinanceAPI extends TrendyolClient {
  constructor(client: TrendyolClient) {
    super({
      sellerId: client.getSellerId(),
      apiKey: client["apiKey"],
      apiSecret: client["apiSecret"],
      baseUrl: client["baseUrl"],
      customFetcher: client["client"],
    });

    // ✅ Explicitly cast `this` to `TrendyolClient` to fix TypeScript error
    this.getSettlements = getSettlements.bind(client as TrendyolClient);
    this.getOtherFinancials = getOtherFinancials.bind(client as TrendyolClient);
    this.getCargoInvoiceDetails = getCargoInvoiceDetails.bind(
      client as TrendyolClient
    );
  }

  getSettlements: typeof getSettlements;
  getOtherFinancials: typeof getOtherFinancials;
  getCargoInvoiceDetails: typeof getCargoInvoiceDetails;
}
