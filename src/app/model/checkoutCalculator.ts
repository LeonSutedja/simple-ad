import { CheckoutConfig, DEFAULTCONFIG } from "./checkoutConfig";
import { IPromotion, PROMOTIONS } from "./promotion";
import { ShoppingCart } from "./shoppingCart";


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
