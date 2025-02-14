// src/api/orders/TrendyolOrderAPI.ts

import { TrendyolClient } from "../../core/TrendyolClient";

// Import your order functions here:
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

/**
 * Provides an interface for all Order-related endpoints in the Trendyol API.
 *
 * Each method is bound to the underlying TrendyolClient to reuse the same
 * configuration, headers, and authentication.
 */
export class TrendyolOrderAPI extends TrendyolClient {
  constructor(client: TrendyolClient) {
    // Reuse the parent's config
    super({
      sellerId: client.getSellerId(),
      apiKey: client["apiKey"],
      apiSecret: client["apiSecret"],
      baseUrl: client["baseUrl"],
      customFetcher: client["client"],
    });

    // Bind each function to the original TrendyolClient:
    this.getShipmentPackages = getShipmentPackages.bind(
      client as TrendyolClient
    );
    this.updateTrackingNumber = updateTrackingNumber.bind(
      client as TrendyolClient
    );
    this.notifyPackages = notifyPackages.bind(client as TrendyolClient);
    this.cancelOrderPackageItem = cancelOrderPackageItem.bind(
      client as TrendyolClient
    );
    this.sendInvoiceLink = sendInvoiceLink.bind(client as TrendyolClient);
    this.deleteInvoiceLink = deleteInvoiceLink.bind(client as TrendyolClient);
    this.splitShipmentPackage = splitShipmentPackage.bind(
      client as TrendyolClient
    );
    this.updateBoxInfo = updateBoxInfo.bind(client as TrendyolClient);
    this.shippingAlternativeDelivery = shippingAlternativeDelivery.bind(
      client as TrendyolClient
    );
    this.deliveredByService = deliveredByService.bind(client as TrendyolClient);
    this.changeCargoProvider = changeCargoProvider.bind(
      client as TrendyolClient
    );
    this.updateWarehouseInformation = updateWarehouseInformation.bind(
      client as TrendyolClient
    );
    this.additionalSupplyTimeDefinition = additionalSupplyTimeDefinition.bind(
      client as TrendyolClient
    );
    this.statusUpdatesOnTestOrders = statusUpdatesOnTestOrders.bind(
      client as TrendyolClient
    );
    this.createTestOrder = createTestOrder.bind(client as TrendyolClient);
    this.returnTestOrdersToWaitingInAction =
      returnTestOrdersToWaitingInAction.bind(client as TrendyolClient);
  }

  // Then declare the function properties on the class:
  public getShipmentPackages: typeof getShipmentPackages;
  public updateTrackingNumber: typeof updateTrackingNumber;
  public notifyPackages: typeof notifyPackages;
  public cancelOrderPackageItem: typeof cancelOrderPackageItem;
  public sendInvoiceLink: typeof sendInvoiceLink;
  public deleteInvoiceLink: typeof deleteInvoiceLink;
  public splitShipmentPackage: typeof splitShipmentPackage;
  public updateBoxInfo: typeof updateBoxInfo;
  public shippingAlternativeDelivery: typeof shippingAlternativeDelivery;
  public deliveredByService: typeof deliveredByService;
  public changeCargoProvider: typeof changeCargoProvider;
  public updateWarehouseInformation: typeof updateWarehouseInformation;
  public additionalSupplyTimeDefinition: typeof additionalSupplyTimeDefinition;
  public statusUpdatesOnTestOrders: typeof statusUpdatesOnTestOrders;
  public createTestOrder: typeof createTestOrder;
  public returnTestOrdersToWaitingInAction: typeof returnTestOrdersToWaitingInAction;
}
