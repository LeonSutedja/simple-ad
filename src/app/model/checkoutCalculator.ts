import { ShoppingCart } from "./shoppingCart";

export class CheckoutConfigCustomerPromotion {
  customerId: number = -1;
  promotionCodesApplicable: string[] = [];

  constructor(customerId: number, promotionCodesApplicable: string[]) {
    this.customerId = customerId;
    this.promotionCodesApplicable = promotionCodesApplicable;
  }
}

export class CheckoutConfig {
  customerPromotions: CheckoutConfigCustomerPromotion[] = []

  constructor() {
  }

  addCustomerPromotionConfig(customerPromotion: CheckoutConfigCustomerPromotion) : void {
    this.customerPromotions.push(customerPromotion);
  }

  getPromotionForCustomer(customerId: number) : CheckoutConfigCustomerPromotion | undefined {
    return this.customerPromotions.find(prom => prom.customerId === customerId);
  }

}

export class CheckoutCalculator {
  config: CheckoutConfig;

  constructor() {
    this.config = new CheckoutConfig();
    this.config.addCustomerPromotionConfig(new CheckoutConfigCustomerPromotion(12, ["3FOR2CLASSIC"]))
    this.config.addCustomerPromotionConfig(new CheckoutConfigCustomerPromotion(13, ["DISCSTANDOUT"]))
    this.config.addCustomerPromotionConfig(new CheckoutConfigCustomerPromotion(14, ["5FOR4STANDOUT", "DISCPREMIUM"]))
  }

  total(cart: ShoppingCart) : number {
    return 0;
  }
}
