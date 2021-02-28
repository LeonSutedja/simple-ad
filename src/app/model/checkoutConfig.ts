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

// Current config is hard coded for the purpose of this demo. This however, can be easily updated to retrieve the config from JSON
export const DEFAULTCONFIG: CheckoutConfig = CheckoutConfig.new([
  [12, ["3FOR2CLASSIC"]],
  [13, ["DISCSTANDOUT"]],
  [14, ["5FOR4STANDOUT", "DISCPREMIUM"]],
  [15, ["DISCFOURTYPERCENT"]],
]);
