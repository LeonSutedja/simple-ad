import { Injectable } from '@angular/core';
import { CheckoutCalculator, DEFAULTCONFIG } from './model/checkoutCalculator';
import { IPromotion } from './model/promotion';
import { ShoppingCart } from './model/shoppingCart';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  private checkoutCalculator: CheckoutCalculator;
  constructor() {
    this.checkoutCalculator = new CheckoutCalculator(DEFAULTCONFIG);
  }

  calculateCart(cart: ShoppingCart) : number {
    return this.checkoutCalculator.total(cart);
  }

  getAppliedPromotion(cart: ShoppingCart) : IPromotion[] {
    return this.checkoutCalculator.getCustomerPromotion(cart);
  }
}
