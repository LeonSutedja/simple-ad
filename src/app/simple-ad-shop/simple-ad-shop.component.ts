import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from '../advertisement.service';
import { CheckoutService } from '../checkout.service';
import { CustomerService } from '../customer.service';
import { Advertisement } from '../model/advertisement';
import { Customer } from '../model/customer';
import { IPromotion } from '../model/promotion';
import { ShoppingCart } from '../model/shoppingCart';

@Component({
  selector: 'app-simple-ad-shop',
  templateUrl: './simple-ad-shop.component.html',
  styleUrls: ['./simple-ad-shop.component.scss']
})
export class SimpleAdShopComponent implements OnInit {
  customers: Customer[] = [];
  advertisements: Advertisement[] = [];
  hasCustomerSelected: boolean = false;

  shoppingCart: ShoppingCart = new ShoppingCart();
  showShoppingCart: boolean = false;

  showCheckout: boolean = false;
  appliedPromotions: IPromotion[] = [];
  total: number = 0.00;

  constructor(
    private customerService: CustomerService,
    private advertisementService: AdvertisementService,
    private checkoutService: CheckoutService
    ) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(custList => this.customers = custList);
    this.advertisementService.getAdvertisements().subscribe(list => this.advertisements = list);
  }

  selectCustomer(id: number): void {
    console.log("select customer");
    this.customerService.getCustomer(id).subscribe(cust => {
      if (cust != undefined)
      {
        this.shoppingCart.setCustomer(cust);
        this.hasCustomerSelected = true;
      }
      // TODO: if cust return undefined, i.e customer not found
    });
  }

  reset(): void {
    this.hasCustomerSelected = false;
    this.shoppingCart.empty();
    this.showShoppingCart = false;
    this.showCheckout = false;
    this.appliedPromotions = [];
  }

  addAdvertisement(id: number): void {
    this.advertisementService.getAdvertisement(id).subscribe(ad => {
      if (ad != undefined)
        this.shoppingCart.addAdvertisement(ad);
        this.showShoppingCart = true;
    });
    console.log("add to cart");
  }

  removeAdvertisement(index: number): void {
    this.shoppingCart.removeAdvertisement(index);
    console.log("remove from cart");
  }

  checkout() : void {
    this.showCheckout = true;
    this.appliedPromotions = this.checkoutService.getAppliedPromotion(this.shoppingCart);
    this.total = this.checkoutService.calculateCart(this.shoppingCart);
  }
}
