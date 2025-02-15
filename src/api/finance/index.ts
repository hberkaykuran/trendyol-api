// src/api/finance/TrendyolFinanceAPI.ts
import { ClientDependencies, BoundFunction } from "../../types/core.types";
import { getSettlements } from "./getSettlements";
import { getOtherFinancials } from "./getOtherFinancials";
import { getCargoInvoiceDetails } from "./getCargoInvoiceDetails";

export class TrendyolFinanceAPI {
  public getSettlements: BoundFunction<typeof getSettlements>;
  public getOtherFinancials: BoundFunction<typeof getOtherFinancials>;
  public getCargoInvoiceDetails: BoundFunction<typeof getCargoInvoiceDetails>;

  constructor(private deps: ClientDependencies) {
    this.getSettlements = ((...args) =>
      getSettlements(this.deps, ...args)) as BoundFunction<
      typeof getSettlements
    >;
    this.getOtherFinancials = ((...args) =>
      getOtherFinancials(this.deps, ...args)) as BoundFunction<
      typeof getOtherFinancials
    >;
    this.getCargoInvoiceDetails = ((...args) =>
      getCargoInvoiceDetails(this.deps, ...args)) as BoundFunction<
      typeof getCargoInvoiceDetails
    >;
  }
}
