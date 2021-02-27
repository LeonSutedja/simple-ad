import { TestBed } from '@angular/core/testing';
import { AdvertisementService } from './advertisement.service';

import { CheckoutService } from './checkout.service';
import { ADVERTISEMENTS } from './data/mock-advertisement';
import { CUSTOMERS } from './data/mock-customers';
import { CheckoutCalculator } from './model/checkoutCalculator';
import { ShoppingCart } from './model/shoppingCart';

describe('CheckoutService', () => {
  let service: CheckoutService;
  let advertisementService: AdvertisementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckoutService);
    advertisementService = TestBed.inject(AdvertisementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('CheckoutCalculator should sum all advertisements for default customer', () => {
    // setup
    let calculator = new CheckoutCalculator();
    let cart = new ShoppingCart();

    // default customer type is of id 11
    let customer = CUSTOMERS.find(c => c.id === 11)!;
    cart.setCustomer(customer);

    let normalAd = ADVERTISEMENTS.find(ad => ad.id === 11)!;
    let stdOutAd = ADVERTISEMENTS.find(ad => ad.id === 12)!;
    let premiumAd = ADVERTISEMENTS.find(ad => ad.id === 13)!;
    cart.addAdvertisement(normalAd);
    cart.addAdvertisement(stdOutAd);
    cart.addAdvertisement(stdOutAd);
    cart.addAdvertisement(stdOutAd);
    cart.addAdvertisement(premiumAd);

    // act
    let total = calculator.total(cart);

    // assert
    expect(total).toEqual(normalAd.price + (stdOutAd.price * 3) + premiumAd.price);
  });
});
