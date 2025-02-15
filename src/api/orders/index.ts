// src/api/orders/TrendyolOrderAPI.ts
import { ClientDependencies, BoundFunction } from "../../types/core.types";
import { getShipmentPackages } from "./getShipmentPackages";
import { updateTrackingNumber } from "./updateTrackingNumber";
import { notifyPackages } from "./notifyPackages";
import { cancelOrderPackageItem } from "./cancelOrderPackageItem";
import { sendInvoiceLink } from "./sendInvoiceLink";
import { deleteInvoiceLink } from "./deleteInvoiceLink";
import { splitShipmentPackage } from "./splitShipmentPackage";
import { updateBoxInfo } from "./updateBoxInfo";
import { shippingAlternativeDelivery } from "./shippingAlternativeDelivery";
import { deliveredByService } from "./deliveredByService";
import { changeCargoProvider } from "./changeCargoProvider";
import { updateWarehouseInformation } from "./updateWarehouseInformation";
import { additionalSupplyTimeDefinition } from "./additionalSupplyTimeDefinition";
import { statusUpdatesOnTestOrders } from "./statusUpdatesOnTestOrders";
import { createTestOrder } from "./createTestOrder";
import { returnTestOrdersToWaitingInAction } from "./returnTestOrdersToWaitingInAction";

export class TrendyolOrderAPI {
  public getShipmentPackages: BoundFunction<typeof getShipmentPackages>;
  public updateTrackingNumber: BoundFunction<typeof updateTrackingNumber>;
  public notifyPackages: BoundFunction<typeof notifyPackages>;
  public cancelOrderPackageItem: BoundFunction<typeof cancelOrderPackageItem>;
  public sendInvoiceLink: BoundFunction<typeof sendInvoiceLink>;
  public deleteInvoiceLink: BoundFunction<typeof deleteInvoiceLink>;
  public splitShipmentPackage: BoundFunction<typeof splitShipmentPackage>;
  public updateBoxInfo: BoundFunction<typeof updateBoxInfo>;
  public shippingAlternativeDelivery: BoundFunction<
    typeof shippingAlternativeDelivery
  >;
  public deliveredByService: BoundFunction<typeof deliveredByService>;
  public changeCargoProvider: BoundFunction<typeof changeCargoProvider>;
  public updateWarehouseInformation: BoundFunction<
    typeof updateWarehouseInformation
  >;
  public additionalSupplyTimeDefinition: BoundFunction<
    typeof additionalSupplyTimeDefinition
  >;
  public statusUpdatesOnTestOrders: BoundFunction<
    typeof statusUpdatesOnTestOrders
  >;
  public createTestOrder: BoundFunction<typeof createTestOrder>;
  public returnTestOrdersToWaitingInAction: BoundFunction<
    typeof returnTestOrdersToWaitingInAction
  >;

  constructor(private deps: ClientDependencies) {
    this.getShipmentPackages = ((...args) =>
      getShipmentPackages(this.deps, ...args)) as BoundFunction<
      typeof getShipmentPackages
    >;
    this.updateTrackingNumber = ((...args) =>
      updateTrackingNumber(this.deps, ...args)) as BoundFunction<
      typeof updateTrackingNumber
    >;
    this.notifyPackages = ((...args) =>
      notifyPackages(this.deps, ...args)) as BoundFunction<
      typeof notifyPackages
    >;
    this.cancelOrderPackageItem = ((...args) =>
      cancelOrderPackageItem(this.deps, ...args)) as BoundFunction<
      typeof cancelOrderPackageItem
    >;
    this.sendInvoiceLink = ((...args) =>
      sendInvoiceLink(this.deps, ...args)) as BoundFunction<
      typeof sendInvoiceLink
    >;
    this.deleteInvoiceLink = ((...args) =>
      deleteInvoiceLink(this.deps, ...args)) as BoundFunction<
      typeof deleteInvoiceLink
    >;
    this.splitShipmentPackage = ((...args) =>
      splitShipmentPackage(this.deps, ...args)) as BoundFunction<
      typeof splitShipmentPackage
    >;
    this.updateBoxInfo = ((...args) =>
      updateBoxInfo(this.deps, ...args)) as BoundFunction<typeof updateBoxInfo>;
    this.shippingAlternativeDelivery = ((...args) =>
      shippingAlternativeDelivery(this.deps, ...args)) as BoundFunction<
      typeof shippingAlternativeDelivery
    >;
    this.deliveredByService = ((...args) =>
      deliveredByService(this.deps, ...args)) as BoundFunction<
      typeof deliveredByService
    >;
    this.changeCargoProvider = ((...args) =>
      changeCargoProvider(this.deps, ...args)) as BoundFunction<
      typeof changeCargoProvider
    >;
    this.updateWarehouseInformation = ((...args) =>
      updateWarehouseInformation(this.deps, ...args)) as BoundFunction<
      typeof updateWarehouseInformation
    >;
    this.additionalSupplyTimeDefinition = ((...args) =>
      additionalSupplyTimeDefinition(this.deps, ...args)) as BoundFunction<
      typeof additionalSupplyTimeDefinition
    >;
    this.statusUpdatesOnTestOrders = ((...args) =>
      statusUpdatesOnTestOrders(this.deps, ...args)) as BoundFunction<
      typeof statusUpdatesOnTestOrders
    >;
    this.createTestOrder = ((...args) =>
      createTestOrder(this.deps, ...args)) as BoundFunction<
      typeof createTestOrder
    >;
    this.returnTestOrdersToWaitingInAction = ((...args) =>
      returnTestOrdersToWaitingInAction(this.deps, ...args)) as BoundFunction<
      typeof returnTestOrdersToWaitingInAction
    >;
  }
}
