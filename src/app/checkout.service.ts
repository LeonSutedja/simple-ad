import { Injectable } from '@angular/core';
import { CheckoutCalculator } from './model/checkoutCalculator';
import { DEFAULTCONFIG } from './model/checkoutConfig';
import { IPromotion } from './model/promotion';
import { ShoppingCart } from './model/shoppingCart';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private checkoutCalculator: CheckoutCalculator;
  constructor() {
    // get a new config here
    this.checkoutCalculator = new CheckoutCalculator(DEFAULTCONFIG);
  }

  calculateCart(cart: ShoppingCart) : number {
    return this.checkoutCalculator.total(cart);
  }

  getAppliedPromotion(cart: ShoppingCart) : IPromotion[] {
    return this.checkoutCalculator.getCustomerPromotion(cart);
  }
}
