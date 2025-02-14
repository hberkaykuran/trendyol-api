// src/api/orders/orders.types.ts

/**
 * Common fields for pagination in responses
 */
export interface IPaginationResponse {
  page: number;
  size: number;
  totalPages: number;
  totalElements: number;
}

/**
 * -----------------------------
 * GET /integration/order/sellers/{sellerId}/orders
 *   -> getShipmentPackages / getAwaitingShipmentPackages
 * -----------------------------
 */

export interface IGetOrderPackagesParams {
  /**
   * startDate - must be sent as Timestamp (milliseconds)
   */
  startDate?: string | number | Date;
  /**
   * endDate - must be sent as Timestamp (milliseconds)
   */
  endDate?: string | number | Date;
  page?: number;
  size?: number;
  /**
   * Only a specific order number is given to bring that order's information
   */
  orderNumber?: string;
  /**
   * Use one of: Created, Picking, Invoiced, Shipped, Cancelled, Delivered, UnDelivered, Returned, Repack, UnSupplied, Awaiting, UnPacked
   */
  status?: string;
  /**
   * Usually "PackageLastModifiedDate" or "CreatedDate"
   */
  orderByField?: string;
  /**
   * "ASC" or "DESC"
   */
  orderByDirection?: string;
  /**
   * Comma-separated or array of package IDs
   */
  shipmentPackageIds?: string | number[];
}

/**
 * Address info for shipping/invoice in orders
 */
export interface IOrderAddress {
  id: number;
  firstName: string;
  lastName: string;
  company: string;
  address1: string;
  address2: string;
  city: string;
  cityCode: number;
  district: string;
  districtId: number;
  countyId?: number; // for CEE region
  countyName?: string; // for CEE region
  shortAddress?: string; // for GULF region
  stateName?: string; // for GULF region
  postalCode: string;
  countryCode: string;
  neighborhoodId?: number;
  neighborhood?: string;
  phone?: string | null;
  fullAddress?: string;
  fullName?: string;
  taxNumber?: string; // corporate invoice usage
  taxOffice?: string; // corporate invoice usage
}

/**
 * Lines (order items) in an order package
 */
export interface IOrderLine {
  quantity: number;
  salesCampaignId: number;
  productSize: string;
  merchantSku: string;
  productName: string;
  productCode: number;
  productOrigin?: string; // "Tr" or empty
  merchantId: number;
  amount: number;
  discount: number;
  tyDiscount: number;
  discountDetails?: Array<{
    lineItemPrice: number;
    lineItemDiscount: number;
    lineItemTyDiscount: number;
  }>;
  currencyCode: string;
  productColor: string;
  id: number; // orderLineId
  sku: string;
  vatBaseAmount: number;
  barcode: string;
  orderLineItemStatusName?: string;
  price: number;
  fastDeliveryOptions?: Array<{
    type: string; // "SameDayShipping" | "FastDelivery"
  }>;
}

/**
 * Package histories
 */
export interface IPackageHistory {
  createdDate: number; // timestamp
  status: string; // e.g. "Created", "Delivered", ...
}

/**
 * Single Shipment Package object from the getShipmentPackages response
 */
export interface IShipmentPackage {
  shipmentAddress: IOrderAddress;
  orderNumber: string;
  grossAmount: number;
  totalDiscount: number;
  totalTyDiscount?: number;
  totalPrice: number;
  taxNumber?: string;
  invoiceAddress: IOrderAddress;
  customerFirstName: string;
  customerEmail: string;
  customerId: number;
  customerLastName: string;
  id: number; // This is the shipmentPackageId
  cargoTrackingNumber?: number;
  cargoTrackingLink?: string;
  cargoSenderNumber?: string;
  cargoProviderName?: string;
  lines: IOrderLine[];
  orderDate: number;
  tcIdentityNumber?: string;
  currencyCode: string;
  packageHistories: IPackageHistory[];
  shipmentPackageStatus: string;
  status: string;
  deliveryType?: string; // "normal"
  timeSlotId?: number;
  scheduledDeliveryStoreId?: string;
  estimatedDeliveryStartDate?: number;
  estimatedDeliveryEndDate?: number;
  deliveryAddressType?: string; // "Shipment" or "CollectionPoint"
  agreedDeliveryDate?: number;
  agreedDeliveryDateExtendible?: boolean;
  extendedAgreedDeliveryDate?: number;
  agreedDeliveryExtensionStartDate?: number;
  agreedDeliveryExtensionEndDate?: number;
  invoiceLink?: string;
  fastDelivery?: boolean;
  fastDeliveryType?: string; // "SameDayShipping" or "FastDelivery"
  originShipmentDate?: number;
  lastModifiedDate?: number;
  commercial?: boolean; // corporate invoice
  micro?: boolean; // micro export
  giftBoxRequested?: boolean;
  ["3pByTrendyol"]?: boolean;
  containsDangerousProduct?: boolean;
  whoPays?: number;
  deliveredByService?: boolean;
  warehouseId?: number;
  groupDeal?: boolean;
}

/**
 * GET /integration/order/sellers/{sellerId}/orders response
 */
export interface IGetOrderPackagesResponse extends IPaginationResponse {
  content: IShipmentPackage[];
}

/**
 * -----------------------------
 * PUT /integration/order/sellers/{sellerId}/shipment-packages/{packageId}/update-tracking-number
 *   -> updateTrackingNumber
 * -----------------------------
 */
export interface IUpdateTrackingNumberRequest {
  trackingNumber: string;
}
export interface IUpdateTrackingNumberResponse {} // 200 OK (empty)

/**
 * -----------------------------
 * PUT /integration/order/sellers/{sellerId}/shipment-packages/{packageId}
 *   -> notifyPackages (status=Picking|Invoiced), or
 *   -> notifyPackages as "updatePackage"
 * -----------------------------
 */
export interface IUpdatePackageRequest {
  lines: Array<{
    lineId: number;
    quantity: number;
  }>;
  params?: {
    invoiceNumber?: string; // if status=Invoiced
    [key: string]: any;
  };
  /**
   * "Picking" or "Invoiced"
   */
  status: string;
}
export interface IUpdatePackageResponse {} // 200 OK

/**
 * -----------------------------
 * PUT /integration/order/sellers/{sellerId}/shipment-packages/{packageId}/items/unsupplied
 *   -> cancelOrderPackageItem
 * -----------------------------
 */
export interface ICancelOrderPackageItemRequest {
  lines: Array<{
    lineId: number;
    quantity: number;
  }>;
  /**
   * reasonId in {500,501,502,504,505,506} etc.
   */
  reasonId: number;
}
export interface ICancelOrderPackageItemResponse {} // 200 OK

/**
 * -----------------------------
 * POST /integration/sellers/{sellerId}/seller-invoice-links
 *   -> sendInvoiceLink
 * -----------------------------
 */
export interface ISendInvoiceLinkRequest {
  invoiceLink: string;
  shipmentPackageId: number;
  invoiceDateTime?: number; // micro export packages require these
  invoiceNumber?: string; // micro export packages require these
}
export interface ISendInvoiceLinkResponse {} // 201 Created

/**
 * -----------------------------
 * POST /integration/sellers/{sellerId}/seller-invoice-links/delete
 *   -> deleteInvoiceLink
 * -----------------------------
 */
export interface IDeleteInvoiceLinkRequest {
  serviceSourceId: number; // equals shipmentPackageId
  channelId: number; // must be always 1
  customerId: number; // can be found in getOrderPackages
}
export interface IDeleteInvoiceLinkResponse {} // 202 Accepted

/**
 * -----------------------------
 * POST /integration/order/sellers/{sellerId}/shipment-packages/{packageId}/split-packages
 *   -> splitShipmentPackage
 * There are multiple ways to split (multi-split, quantity-split, etc.)
 * We'll define one of them (splitPackages).
 * -----------------------------
 */
export interface ISplitShipmentPackageRequest {
  splitPackages: Array<{
    packageDetails: Array<{
      orderLineId: number;
      quantities: number;
    }>;
  }>;
}
export interface ISplitShipmentPackageResponse {} // 200 OK

/**
 * -----------------------------
 * PUT /integration/order/sellers/{sellerId}/shipment-packages/{packageId}/box-info
 *   -> updateBoxInfo (Notify Deci and Box Quantity)
 * -----------------------------
 */
export interface IUpdateBoxInfoRequest {
  boxQuantity: number;
  deci?: number;
}
export interface IUpdateBoxInfoResponse {} // 200 OK

/**
 * -----------------------------
 * PUT /integration/order/sellers/{sellerId}/shipment-packages/{packageId}/alternative-delivery
 *   -> shippingAlternativeDelivery
 * -----------------------------
 */
export interface IShippingAlternativeDeliveryRequest {
  isPhoneNumber: boolean;
  trackingInfo: string; // phone number or tracking link
  params?: {
    digitalCode?: string; // if it's a digital product
    [key: string]: any;
  };
  boxQuantity?: number;
  deci?: number;
}
export interface IShippingAlternativeDeliveryResponse {} // 200 OK

/**
 * -----------------------------
 * PUT /integration/order/sellers/{sellerId}/manual-deliver/{cargoTrackingNumber}
 *   -> deliveredByService
 * (No body)
 * -----------------------------
 */
export interface IDeliveredByServiceResponse {} // 200 OK

/**
 * -----------------------------
 * PUT /integration/order/sellers/{sellerId}/manual-return/{cargoTrackingNumber}
 *   -> manualReturn
 * (No body)
 * -----------------------------
 */
export interface IManualReturnResponse {} // 200 OK

/**
 * -----------------------------
 * PUT /integration/order/sellers/{sellerId}/shipment-packages/{packageId}/cargo-providers
 *   -> changeCargoProvider
 * -----------------------------
 */
export interface IChangeCargoProviderRequest {
  cargoProvider: string; // "YKMP", "ARASMP", ...
}
export interface IChangeCargoProviderResponse {} // 200 OK

/**
 * -----------------------------
 * PUT /integration/order/sellers/{sellerId}/shipment-packages/{packageId}/warehouse
 *   -> updateWarehouseInformation
 * -----------------------------
 */
export interface IUpdateWarehouseRequest {
  warehouseId: number;
}
export interface IUpdateWarehouseResponse {} // 200 OK

/**
 * -----------------------------
 * PUT /integration/order/sellers/{sellerId}/shipment-packages/{packageId}/extended-agreed-delivery-date
 *   -> additionalSupplyTimeDefinition
 * -----------------------------
 */
export interface IAdditionalSupplyTimeRequest {
  /**
   * extendedDayCount can be 1, 2 or 3
   */
  extendedDayCount: number;
}
export interface IAdditionalSupplyTimeResponse {} // 200 OK

/**
 * -----------------------------
 * PUT /integration/test/order/sellers/{sellerId}/shipment-packages/{packageId}/status
 *   -> statusUpdatesOnTestOrders
 * -----------------------------
 */
export interface IUpdateTestOrderStatusRequest {
  lines: Array<{
    lineId: number;
    quantity: number;
  }>;
  params?: { [key: string]: any };
  /**
   * "Shipped" | "AtCollectionPoint" | "Delivered" | "UnDelivered" | "Returned"
   */
  status: string;
}
export interface IUpdateTestOrderStatusResponse {} // 200 OK

/**
 * -----------------------------
 * POST /integration/test/order/orders/core
 *   -> createTestOrder
 * -----------------------------
 */
export interface ICreateTestOrderRequest {
  customer: {
    customerFirstName: string;
    customerLastName: string;
  };
  invoiceAddress: {
    addressText: string;
    city: string;
    company?: string;
    district: string;
    email: string;
    invoiceFirstName: string;
    invoiceLastName: string;
    latitude?: string;
    longitude?: string;
    neighborhood: string;
    phone: string;
    postalCode: string;
    invoiceTaxNumber?: string;
    invoiceTaxOffice?: string;
  };
  lines: Array<{
    barcode: string;
    quantity: number;
    discountPercentage?: number;
  }>;
  seller: {
    sellerId: number;
  };
  shippingAddress: {
    addressText: string;
    city: string;
    company?: string;
    district: string;
    email: string;
    latitude?: string;
    longitude?: string;
    neighborhood: string;
    phone: string;
    postalCode: string;
    shippingFirstName: string;
    shippingLastName: string;
  };
  commercial?: boolean; // for corporate invoice test
  microRegion?: string; // "AZ" or "GULF" for micro export
}
export interface ICreateTestOrderResponse {
  orderNumber: string;
  // etc. The response is fairly short in docs, can be extended as needed
}

/**
 * -----------------------------
 * PUT /integration/test/order/sellers/{sellerId}/claims/waiting-in-action
 *   -> returnTestOrdersToWaitingInAction
 * -----------------------------
 */
export interface IReturnTestOrderToWaitingInActionRequest {
  shipmentPackageId: number;
}
export interface IReturnTestOrderToWaitingInActionResponse {} // 200 OK
