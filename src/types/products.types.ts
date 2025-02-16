/**
 * Represents a product in the Trendyol system.
 */
export interface Product {
  /** Unique ID of the product in Trendyol's system. */
  id: string;
  /** Whether the product is approved in the marketplace. */
  approved: boolean;
  /** Product code assigned by Trendyol. */
  productCode: number;
  /** Batch request ID associated with the product. */
  batchRequestId: string;
  /** Supplier ID of the product. */
  supplierId: number;
  /** Timestamp of when the product was created. */
  createDateTime: number;
  /** Timestamp of when the product was last updated. */
  lastUpdateDate: number;
  /** Gender classification for the product. */
  gender?: string;
  /** Brand name of the product. */
  brand: string;
  /** Unique barcode of the product. */
  barcode: string;
  /** Product title. */
  title: string;
  /** Category name of the product. */
  categoryName: string;
  /** Main product code, used for grouping variations. */
  productMainId: string;
  /** Description of the product. */
  description: string;
  /** Stock unit type (e.g., "Adet"). */
  stockUnitType: string;
  /** Available stock quantity for the product. */
  quantity: number;
  /** List price (crossed-out price). */
  listPrice: number;
  /** Sale price (current selling price). */
  salePrice: number;
  /** VAT rate applied to the product. */
  vatRate: number;
  /** Dimensional weight of the product. */
  dimensionalWeight: number;
  /** Unique stock code in the supplier’s system. */
  stockCode: string;
  /** Expected delivery duration in days. */
  deliveryDuration?: number;
  /** Express delivery options available for the product. */
  deliveryOption?: {
    deliveryDuration: number;
    fastDeliveryType: "SAME_DAY_SHIPPING" | "FAST_DELIVERY";
  };
  /** List of product image URLs. */
  images: {
    url: string;
  }[];
  /** Attribute details of the product (e.g., color, size). */
  attributes: {
    attributeId: number;
    attributeValueId?: number;
    customAttributeValue?: string;
  }[];
  /** Variant attributes of the product (e.g., color, size). */
  variantAttributes?: {
    attributeName: string;
    attributeValue: string;
  }[];
  /** Platform listing ID of the product. */
  platformListingId: string;
  /** Stock ID of the product. */
  stockId: string;
  /** Color description of the product. */
  color?: string;
  /** URL of the product on Trendyol. */
  productUrl: string;
}

export interface ProductInput {
  /** Unique barcode of the product. Max 40 characters. */
  barcode: string;
  /** The product title. Max 100 characters. */
  title: string;
  /** Main product code. Used to group product variations. Max 40 characters. */
  productMainId: string;
  /** Trendyol Brand ID associated with the product. */
  brandId: number;
  /** Trendyol Category ID associated with the product. */
  categoryId: number;
  /** Available stock quantity for the product. */
  quantity: number;
  /** Unique stock code in the supplier’s internal system. Max 100 characters. */
  stockCode: string;
  /** Dimensional weight (Desi) of the product. */
  dimensionalWeight: number;
  /** Product description, supports HTML. Max 30,000 characters. */
  description: string;
  /** Currency type, only "TRY" is supported. */
  currencyType: "TRY";
  /** List price (crossed-out price). */
  listPrice: number;
  /** Sale price (current selling price). */
  salePrice: number;
  /** VAT rate applied to the product. */
  vatRate: number;
  /** Trendyol Cargo Company ID associated with the product. */
  cargoCompanyId: number;
  /** Shipment warehouse address ID in the Trendyol system. */
  shipmentAddressId?: number;
  /** Return warehouse address ID in the Trendyol system. */
  returningAddressId?: number;
  /** Expected delivery duration in days. */
  deliveryDuration?: number;
  /** Express delivery options available for the product. */
  deliveryOption?: {
    /** Shipment duration in days. */
    deliveryDuration: number;
    /** Type of fast delivery available. */
    fastDeliveryType: "SAME_DAY_SHIPPING" | "FAST_DELIVERY";
  };
  /** List of product image URLs. Max 8 images. Must be HTTPS, 1200x1800px, 96dpi. */
  images: {
    url: string;
  }[];
  /** Attribute details of the product (e.g., color, size). */
  attributes: {
    /** Attribute ID (provided by Trendyol). */
    attributeId: number;
    /** Attribute value ID if predefined. */
    attributeValueId?: number;
    /** Custom attribute value if applicable. */
    customAttributeValue?: string;
  }[];
}

/**
 * Represents a batch request type in Trendyol.
 */
export enum BatchRequestType {
  /** Batch request for creating products. */
  CREATE_PRODUCT = "CREATE_PRODUCT",
  /** Batch request for updating existing products. */
  UPDATE_PRODUCT = "UPDATE_PRODUCT",
  /** Batch request for deleting products. */
  DELETE_PRODUCT = "DELETE_PRODUCT",
  /** Batch request for updating price and inventory of products. */
  UPDATE_PRICE_INVENTORY = "UPDATE_PRICE_INVENTORY",
}

/**
 * Represents the base structure of a batch request result.
 */
export interface BatchRequestResultBase {
  /** Unique identifier for the batch request. */
  batchRequestId: string;
  /** Status of the batch request (In Progress, Completed, Failed). */
  status: "IN_PROGRESS" | "COMPLETED" | "FAILED";
  /** Timestamp when the batch request was created. */
  creationDate: number;
  /** Timestamp when the batch request was last modified. */
  lastModification: number;
  /** Source of the batch request (API or Seller Panel). */
  sourceType: "API" | "SELLER_PANEL";
  /** Total number of items in the batch request. */
  itemCount: number;
  /** Number of failed items in the batch request. */
  failedItemCount: number;
}

/**
 * Represents the request structure for updating product stock and price.
 */
export interface UpdatePriceAndInventoryRequest {
  /** List of products to update stock and price. */
  items: Pick<
    ProductInput,
    "barcode" | "quantity" | "salePrice" | "listPrice" | "currencyType"
  >[];
}

/**
 * Represents the request structure for deleting products from Trendyol.
 */
export interface DeleteProductRequest {
  /** List of barcodes for products to delete. */
  items: Pick<ProductInput, "barcode">[];
}

/**
 * Represents the response structure for retrieving supplier addresses.
 */
export interface GetSuppliersAddressesResponse {
  /** List of supplier addresses. */
  supplierAddresses: SupplierAddress[];
  /** Default shipment address information. */
  defaultShipmentAddress?: SupplierAddress;
  /** Default invoice address information. */
  defaultInvoiceAddress?: SupplierAddress;
  /** Default returning address information. */
  defaultReturningAddress?: { present: boolean };
}

/**
 * Represents the response structure for retrieving brands.
 */
export interface GetBrandsResponse {
  /** List of brands available on Trendyol. */
  brands: { id: number; name: string }[];
}

/**
 * Represents the response structure for retrieving the category tree.
 */
export interface GetCategoryTreeResponse {
  /** List of product categories available in Trendyol. */
  categories: Category[];
}

/**
 * Represents the response structure for retrieving category attributes.
 */
export interface GetCategoryAttributesResponse {
  /** Category ID to which the attributes belong. */
  id: number;
  /** Category name. */
  name: string;
  /** Display name for the category. */
  displayName: string;
  /** List of category attributes. */
  categoryAttributes: CategoryAttribute[];
}

/**
 * Represents a supplier's address registered in Trendyol.
 */
export interface SupplierAddress {
  /** Unique address identifier. */
  id: number;
  /** Type of address: Shipment, Invoice, or Returning. */
  addressType: "Shipment" | "Invoice" | "Returning";
  /** Country where the address is located. */
  country: string;
  /** City where the address is located. */
  city: string;
  /** Numeric code representing the city. */
  cityCode: number;
  /** District name of the address. */
  district: string;
  /** Unique district ID. */
  districtId: number;
  /** Postal code of the address. */
  postCode: string;
  /** Detailed street address. */
  address: string;
  /** Whether this is a default returning address. */
  returningAddress: boolean;
  /** Full formatted address. */
  fullAddress: string;
  /** Whether this is a default shipment address. */
  shipmentAddress: boolean;
  /** Whether this is a default invoice address. */
  invoiceAddress: boolean;
  /** Whether this address is marked as default. */
  default: boolean;
}

/**
 * Represents a shipment provider used for Trendyol deliveries.
 */
export interface ShipmentProvider {
  /** Unique shipment provider ID. */
  id: number;
  /** Short code identifier for the provider. */
  code: string;
  /** Full name of the shipment provider. */
  name: string;
  /** Tax number of the shipment provider. */
  taxNumber: string;
}

/**
 * Represents a product category in the Trendyol system.
 */
export interface Category {
  /** Unique category ID. */
  id: number;
  /** Name of the category. */
  name: string;
  /** Parent category ID (if applicable). */
  parentId: number;
  /** List of subcategories under this category. */
  subCategories?: Category[];
}

/**
 * Parameters for filtering products in the Trendyol system.
 */
export interface FilterProductsParams {
  /** Page number for pagination. */
  page?: number;
  /** Number of results per page. */
  size?: number;
  /** Fetch products created after this date. Supports timestamps. */
  startDate?: string | number | Date;
  /** Fetch products created before this date. Supports timestamps. */
  endDate?: string | number | Date;
  /** Unique barcode for filtering a single product. */
  barcode?: string;
  /** Filter by date type: "CREATED_DATE" or "LAST_MODIFIED_DATE". */
  dateQueryType?: "CREATED_DATE" | "LAST_MODIFIED_DATE";
  /** Filter by stock code. */
  stockCode?: string;
  /** Filter for approved products. */
  approved?: boolean;
  /** Filter for archived products. */
  archived?: boolean;
  /** Filter by product main ID. */
  productMainId?: string;
  /** Filter for products currently on sale. */
  onSale?: boolean;
  /** Filter for rejected products. */
  rejected?: boolean;
  /** Filter for blacklisted products. */
  blacklisted?: boolean;
  /** Filter by specific brand IDs. */
  brandIds?: number[];
}

/**
 * Response structure for product queries.
 */
export interface ProductResponse {
  /** Total number of products matching the query. */
  totalElements: number;
  /** Total number of pages available. */
  totalPages: number;
  /** Current page number. */
  page: number;
  /** Number of products returned per page. */
  size: number;
  /** List of products in the current page. */
  content: Product[];
}

/**
 * Represents the full structure of a batch request result.
 */
export type BatchRequestResult =
  | (BatchRequestResultBase & {
      /** Type of batch request. */
      batchRequestType: "CREATE_PRODUCT";
      /** List of processed items and their statuses. */
      items?: {
        /** The product associated with the request. */
        requestItem: ProductInput;
        /** Status of the request item (Success/Fail). */
        status: "SUCCESS" | "FAIL";
        /** List of failure reasons if applicable. */
        failureReasons?: string[];
      }[];
    })
  | (BatchRequestResultBase & {
      /** Type of batch request. */
      batchRequestType: "UPDATE_PRODUCT";
      /** List of processed items and their statuses. */
      items?: {
        requestItem: ProductInput;
        status: "SUCCESS" | "FAIL";
        failureReasons?: string[];
      }[];
    })
  | (BatchRequestResultBase & {
      /** Type of batch request. */
      batchRequestType: "DELETE_PRODUCT";
      /** List of processed items and their statuses. */
      items?: {
        requestItem: Pick<ProductInput, "barcode">;
        status: "SUCCESS" | "FAIL";
        failureReasons?: string[];
      }[];
    })
  | (BatchRequestResultBase & {
      /** Type of batch request. */
      batchRequestType: "UPDATE_PRICE_INVENTORY";
      /** List of processed items and their statuses. */
      items?: {
        requestItem: Pick<
          ProductInput,
          "barcode" | "quantity" | "salePrice" | "listPrice" | "currencyType"
        >;
        status: "SUCCESS" | "FAIL";
        failureReasons?: string[];
      }[];
    });

/**
 * Represents a category attribute in Trendyol.
 */
export interface CategoryAttribute {
  /** Category ID to which the attribute belongs. */
  categoryId: number;
  /** Attribute metadata. */
  attribute: {
    /** Unique attribute ID. */
    id: number;
    /** Name of the attribute. */
    name: string;
  };
  /** Whether this attribute is required for the category. */
  required: boolean;
  /** Whether custom values are allowed for this attribute. */
  allowCustom: boolean;
  /** Whether this attribute is used for variation options. */
  varianter: boolean;
  /** Whether this attribute is used as a slicer (filtering). */
  slicer: boolean;
  /** List of predefined values for this attribute. */
  attributeValues: {
    /** Unique value ID for the attribute. */
    id: number;
    /** Name of the attribute value. */
    name: string;
  }[];
}
