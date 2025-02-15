// src/api/products/TrendyolProductAPI.ts
import { ClientDependencies, BoundFunction } from "../../types/core.types";
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

export class TrendyolProductAPI {
  public filterProducts: BoundFunction<typeof filterProducts>;
  public createProduct: BoundFunction<typeof createProduct>;
  public updateProduct: BoundFunction<typeof updateProduct>;
  public deleteProduct: BoundFunction<typeof deleteProduct>;
  public updatePriceAndInventory: BoundFunction<typeof updatePriceAndInventory>;
  public getBatchRequestResult: BoundFunction<typeof getBatchRequestResult>;
  public getBrands: BoundFunction<typeof getBrands>;
  public getCategoryTree: BoundFunction<typeof getCategoryTree>;
  public getCategoryAttributes: BoundFunction<typeof getCategoryAttributes>;
  public getSuppliersAddresses: BoundFunction<typeof getSuppliersAddresses>;

  constructor(private deps: ClientDependencies) {
    this.filterProducts = ((...args) =>
      filterProducts(this.deps, ...args)) as BoundFunction<
      typeof filterProducts
    >;
    this.createProduct = ((...args) =>
      createProduct(this.deps, ...args)) as BoundFunction<typeof createProduct>;
    this.updateProduct = ((...args) =>
      updateProduct(this.deps, ...args)) as BoundFunction<typeof updateProduct>;
    this.deleteProduct = ((...args) =>
      deleteProduct(this.deps, ...args)) as BoundFunction<typeof deleteProduct>;
    this.updatePriceAndInventory = ((...args) =>
      updatePriceAndInventory(this.deps, ...args)) as BoundFunction<
      typeof updatePriceAndInventory
    >;
    this.getBatchRequestResult = ((...args) =>
      getBatchRequestResult(this.deps, ...args)) as BoundFunction<
      typeof getBatchRequestResult
    >;
    this.getBrands = ((...args) =>
      getBrands(this.deps, ...args)) as BoundFunction<typeof getBrands>;
    this.getCategoryTree = ((...args) =>
      getCategoryTree(this.deps, ...args)) as BoundFunction<
      typeof getCategoryTree
    >;
    this.getCategoryAttributes = ((...args) =>
      getCategoryAttributes(this.deps, ...args)) as BoundFunction<
      typeof getCategoryAttributes
    >;
    this.getSuppliersAddresses = ((...args) =>
      getSuppliersAddresses(this.deps, ...args)) as BoundFunction<
      typeof getSuppliersAddresses
    >;
  }
}
