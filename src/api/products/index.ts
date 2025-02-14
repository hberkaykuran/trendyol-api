import { TrendyolClient } from "../../core/TrendyolClient";
import { filterProducts } from "./filterProducts";
import { createProduct } from "./createProduct";
import { updateProduct } from "./updateProduct";
import { deleteProduct } from "./deleteProduct";
import { updatePriceAndInventory } from "./updatePriceAndInventory";
import { getBatchRequestResult } from "./getBatchRequestResult";
import { getBrands } from "./getBrands";
import { getCategoryTree } from "./getCategoryTree";
import { getCategoryAttributes } from "./getCategoryAttributes";
import { getSuppliersAddresses } from "./getSuppliersAddresses";

/**
 * Provides an interface for managing products on Trendyol.
 *
 * This API allows operations such as filtering, creating, updating, and deleting products.
 */
export class TrendyolProductAPI extends TrendyolClient {
  public filterProducts: typeof filterProducts;
  public createProduct: typeof createProduct;
  public updateProduct: typeof updateProduct;
  public deleteProduct: typeof deleteProduct;
  public updatePriceAndInventory: typeof updatePriceAndInventory;
  public getBatchRequestResult: typeof getBatchRequestResult;
  public getBrands: typeof getBrands;
  public getCategoryTree: typeof getCategoryTree;
  public getCategoryAttributes: typeof getCategoryAttributes;
  public getSuppliersAddresses: typeof getSuppliersAddresses;

  constructor(client: TrendyolClient) {
    super({
      sellerId: client.getSellerId(),
      apiKey: client["apiKey"],
      apiSecret: client["apiSecret"],
      baseUrl: client["baseUrl"],
      customFetcher: client["client"],
    });
    this.filterProducts = filterProducts.bind(client);
    this.createProduct = createProduct.bind(client);
    this.updateProduct = updateProduct.bind(client);
    this.deleteProduct = deleteProduct.bind(client);
    this.updatePriceAndInventory = updatePriceAndInventory.bind(client);
    this.getBatchRequestResult = getBatchRequestResult.bind(client);
    this.getBrands = getBrands.bind(client);
    this.getCategoryTree = getCategoryTree.bind(client);
    this.getCategoryAttributes = getCategoryAttributes.bind(client);
    this.getSuppliersAddresses = getSuppliersAddresses.bind(client);
  }
}
