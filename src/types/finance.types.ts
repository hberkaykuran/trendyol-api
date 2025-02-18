/**
 * Enum representing transaction types for settlements.
 * The explanations of the transaction types that can be used for transactionType are as follows.
 */
export enum SettlementTransactionType {
  /** Gives sales records of orders. */
  Sale = "Sale",
  /** Returns records of orders. */
  Return = "Return",
  /** It shows the discount amount covered by the supplier. */
  Discount = "Discount",
  /** It is the record discarded when the product is canceled or returned. Can be thought of as the opposite of discount records. */
  DiscountCancel = "DiscountCancel",
  /** It shows the coupon amount paid by the supplier. */
  Coupon = "Coupon",
  /** Record discarded when the product is canceled or returned. Can be thought of as the reverse of coupon registration. */
  CouponCancel = "CouponCancel",
  /** A settlement provision is recorded for the amount differences arising from the weight difference. In addition, when cancellation or return is made to an order that is recorded as provision positive, the provision is recorded as negative. */
  ProvisionPositive = "ProvisionPositive",
  /** A settlement provision is recorded for the amount differences arising from the weight difference. In addition, when cancellation or return is made to an order that is recorded as provision negative, the provision is recorded as positive. */
  ProvisionNegative = "ProvisionNegative",
  /** In the case of partial return, it is the discarded record. If a return record is created for a product that is less than the product usage, this record is discarded. */
  ManualRefund = "ManualRefund",
  /** For a partial refund product, when the product is fully refunded, this record is discarded for the purpose of canceling the partial refund. Thus, it is set off for the partial refund amount previously discarded. */
  ManualRefundCancel = "ManualRefundCancel",
  /** In corporate postpaid shopping, this record is discarded for the discounts covered by Trendyol. This amount is paid to the seller with the invoice requested from the seller at the end of the month. */
  TYDiscount = "TYDiscount",
  /** In corporate postpaid purchases, it is discarded based on the TYDiscount record for discounts covered by Trendyol. In case of cancellation or return of the product, this record is discarded. */
  TYDiscountCancel = "TYDiscountCancel",
  /** In corporate postpaid shopping, this record is discarded for coupons covered by Trendyol. This amount is paid to the seller with the invoice requested from the seller at the end of the month. */
  TYCoupon = "TYCoupon",
  /** In corporate postpaid purchases, it is discarded based on the TYCoupon record for coupons covered by Trendyol. In case of cancellation or return of the product, this record is discarded. */
  TYCouponCancel = "TYCouponCancel",
}

/**
 * Parameters required for fetching settlement transactions.
 */
export interface SettlementsParams {
  /** Start date of transaction records in timestamp (milliseconds). */
  startDate: number;
  /** End date of transaction records in timestamp (milliseconds). */
  endDate: number;
  /** The type of financial transaction being retrieved. */
  transactionType?: SettlementTransactionType;
  /** The requested page number (default: 0). */
  page?: number;
  /** Number of records per page (default: 500). */
  size?: number;
}

/**
 * Represents a single settlement transaction record.
 */
export interface SettlementItem {
  /** Unique transaction identifier. */
  id: string;
  /** Date and time when the transaction was recorded (timestamp in milliseconds). */
  transactionDate: number;
  /** Barcode of the product involved in the transaction, if applicable. */
  barcode?: string | null;
  /** Type of the transaction recorded. */
  transactionType: string;
  /** Receipt ID associated with the transaction, if applicable. */
  receiptId?: string | null;
  /** Additional details about the transaction, if applicable. */
  description?: string | null;
  /** The debt amount in the transaction. */
  debt: number;
  /** The credit amount in the transaction. */
  credit: number;
  /** Payment period in days, if applicable. */
  paymentPeriod?: number | null;
  /** Commission rate applied to the transaction, if applicable. */
  commissionRate?: number | null;
  /** Commission amount deducted from the transaction, if applicable. */
  commissionAmount?: number | null;
  /** Serial number of the commission invoice, if applicable. */
  commissionInvoiceSerialNumber?: string | null;
  /** Revenue earned by the seller after deductions. */
  sellerRevenue?: number | null;
  /** Order number related to the transaction, if applicable. */
  orderNumber?: string | null;
  /** Payment order ID associated with the transaction, if applicable. */
  paymentOrderId?: number | null;
  /** Date when the payment was processed, if applicable. */
  paymentDate?: number | null;
  /** Seller ID associated with the transaction. */
  sellerId: number;
  /** Store ID where the transaction occurred, if applicable. */
  storeId?: number | null;
  /** Name of the store where the transaction occurred, if applicable. */
  storeName?: string | null;
  /** Address of the store where the transaction occurred, if applicable. */
  storeAddress?: string | null;
  /** Country where the transaction took place. */
  country: string;
  /** Order date in timestamp (milliseconds), if applicable. */
  orderDate?: number | null;
  /** Affiliate source of the transaction. */
  affiliate?: string | null;
}

/**
 * Response structure for fetching settlements.
 */
export interface SettlementsResponse {
  totalElements: number;
  totalPages: number;
  page: number;
  size: number;
  content: SettlementItem[];
}

/**
 * Parameters required for fetching other financial transactions.
 */
export interface OtherFinancialsParams {
  startDate: number;
  endDate: number;
  transactionType?: OtherFinancialTransactionType;
  page?: number;
  size?: number;
}

/**
 * Represents a single other financial transaction record.
 */
export interface OtherFinancialItem {
  id: string;
  transactionDate: number;
  barcode: string | null;
  transactionType: OtherFinancialTransactionType | string;
  receiptId: string | null;
  description: string | null;
  debt: number;
  credit: number;
  paymentPeriod: string | null;
  commissionRate: number | null;
  commissionAmount: number | null;
  commissionInvoiceSerialNumber: string | null;
  sellerRevenue: number | null;
  orderNumber: string | null;
  paymentOrderId: number;
  paymentDate: number | null;
  sellerId: number;
  storeId: number | null;
  storeName: string | null;
  storeAddress: string | null;
  country: string;
  orderDate: number;
  affiliate: string;
}

/**
 * Response structure for fetching other financial transactions.
 */
export interface OtherFinancialsResponse {
  totalElements: number;
  totalPages: number;
  page: number;
  size: number;
  content: OtherFinancialItem[];
}

/**
 * Response structure for fetching cargo invoice details.
 */
export interface CargoInvoiceDetailsResponse {
  page: number;
  size: number;
  totalPages: number;
  totalElements: number;
  content: {
    shipmentPackageType: string;
    parcelUniqueId: number;
    orderNumber: string;
    amount: number;
    desi: number;
  }[];
}

/**
 * Enum representing transaction types for other financials.
 * The explanations of the transaction types that can be used for transactionType are as follows.
 */
export enum OtherFinancialTransactionType {
  /** It is the record when early payment is received for progress payments that are not yet due. */
  CashAdvance = "CashAdvance",
  /** It is the record for the transfer between Trendyol and the Supplier. */
  WireTransfer = "WireTransfer",
  /** It is the record for the payments made to the Trendyol from the debtor supplier status. */
  IncomingTransfer = "IncomingTransfer",
  /** These are the return invoices by the supplier to the Trendyol. Affects the balance as +. */
  ReturnInvoice = "ReturnInvoice",
  /** In the event that the supplier has no receivables to be cleared, the commission received from the supplier for returned products is the settlement invoice. */
  CommissionAgreementInvoice = "CommissionAgreementInvoice",
  /** It is the progress payment made to the supplier by calculating from the due transactions. */
  PaymentOrder = "PaymentOrder",
  /** It is the invoice issued to the supplier for the services provided by Trendyol. */
  DeductionInvoices = "DeductionInvoices",
  /** When you use this transaction type, the E-commerce Withholding Tax and E-commerce Withholding Tax Cancellation items in the relevant date range will be listed. */
  Stoppage = "Stoppage",
}

/**
 * Response structure for fetching cargo invoice details.
 */
export interface CargoInvoiceDetailsResponse {
  /** The current page number. */
  page: number;
  /** Number of records per page. */
  size: number;
  /** Total pages available based on pagination. */
  totalPages: number;
  /** Total number of cargo invoice records available. */
  totalElements: number;
  /** List of cargo invoice transactions. */
  content: {
    /** The type of shipment package (e.g., "Gönderi Kargo Bedeli"). */
    shipmentPackageType: string;
    /** Unique identifier for the parcel. */
    parcelUniqueId: number;
    /** The order number associated with this shipment. */
    orderNumber: string;
    /** The amount charged for the shipment. */
    amount: number;
    /** The dimensional weight (desi) of the package. */
    desi: number;
  }[];
}
