import { IPromotion, PROMOTIONS } from "./promotion";
import { ShoppingCart } from "./shoppingCart";

export class CheckoutConfigCustomerPromotion {
  readonly customerId: number;
  readonly promotionCodesApplicable: string[];

  constructor(customerId: number, promotionCodesApplicable: string[]) {
    this.customerId = customerId;
    this.promotionCodesApplicable = promotionCodesApplicable;
  }
}

export class CheckoutConfig {
  static new(configTuples : [number, string[]][]): CheckoutConfig {
    let checkoutConfig = new CheckoutConfig();
    configTuples.forEach(config => {
      checkoutConfig.addCustomerPromotionConfig(new CheckoutConfigCustomerPromotion(config[0], config[1]));
    });
    return checkoutConfig;
  }

  customerPromotions: CheckoutConfigCustomerPromotion[] = []

  private constructor() {
  }

  addCustomerPromotionConfig(customerPromotion: CheckoutConfigCustomerPromotion) : void {
    this.customerPromotions.push(customerPromotion);
  }

  getPromotionForCustomer(customerId: number | undefined) : CheckoutConfigCustomerPromotion | undefined {
    if (customerId === undefined) return undefined;
    return this.customerPromotions.find(prom => prom.customerId === customerId);
  }

}

export const DEFAULTCONFIG: CheckoutConfig = CheckoutConfig.new([
  [12, ["3FOR2CLASSIC"]],
  [13, ["DISCSTANDOUT"]],
  [14, ["5FOR4STANDOUT", "DISCPREMIUM"]],
  [15, ["DISCFOURTYPERCENT"]],
]);

export class CheckoutCalculator {
  private config: CheckoutConfig;

  constructor(config: CheckoutConfig = DEFAULTCONFIG) {
    this.config = config;
  }

  total(cart: ShoppingCart) : number {
    let total = 0;
    const customerPromotion = this.config.getPromotionForCustomer(cart.customer!.id);
    let advertisementList = cart.advertisements;
    customerPromotion?.promotionCodesApplicable.forEach(code => {
      let promotion = PROMOTIONS.find(p => p.code === code)!;
      let promotionTotal = 0;
      [promotionTotal, advertisementList] = promotion.calculateAdvertisement(advertisementList);
      total += promotionTotal;
    });
    advertisementList.forEach(element => {
      total += element.price;
    });
    total = Math.round(total * 100)/100;
    return total;
  }

  getCustomerPromotion(cart: ShoppingCart): IPromotion[] {
    const customerPromotion = this.config.getPromotionForCustomer(cart.customer!.id);
    let promotions :  IPromotion[] = [];
    customerPromotion?.promotionCodesApplicable.forEach(code => {
      let promotion = PROMOTIONS.find(p => p.code === code)!;
      promotions.push(promotion)
    });
    return promotions;
  }
}
