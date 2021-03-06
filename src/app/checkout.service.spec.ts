import { TestBed } from '@angular/core/testing';
import { AdvertisementService } from './advertisement.service';

import { CheckoutService } from './checkout.service';
import { ADVERTISEMENTS } from './data/mock-advertisement';
import { CUSTOMERS } from './data/mock-customers';
import { Advertisement } from './model/advertisement';
import { CheckoutCalculator } from './model/checkoutCalculator';
import { Customer } from './model/customer';
import { ShoppingCart } from './model/shoppingCart';

describe('CheckoutService', () => {
  let service: CheckoutService;
  let normalAd: Advertisement;
  let stdOutAd: Advertisement;
  let premiumAd: Advertisement;

  let defaultCustomer: Customer;
  let secondBite: Customer;
  let axilCoffeeRoasters: Customer;
  let myer: Customer;
  let seek: Customer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckoutService);

    normalAd = ADVERTISEMENTS.find(ad => ad.id === 11)!;
    stdOutAd = ADVERTISEMENTS.find(ad => ad.id === 12)!;
    premiumAd = ADVERTISEMENTS.find(ad => ad.id === 13)!;

    defaultCustomer = CUSTOMERS.find(ad => ad.id === 11)!;
    secondBite = CUSTOMERS.find(ad => ad.id === 12)!;
    axilCoffeeRoasters = CUSTOMERS.find(ad => ad.id === 13)!;
    myer = CUSTOMERS.find(ad => ad.id === 14)!;
    seek = CUSTOMERS.find(ad => ad.id === 15)!;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('CheckoutCalculator GetAppliedPromotion should return applied promotions for customer', () => {
    // setup
    let calculator = new CheckoutCalculator();
    let cart = new ShoppingCart();

    let customer = secondBite;
    cart.setCustomer(customer);

    cart.addAdvertisement(normalAd);
    cart.addAdvertisement(stdOutAd);
    cart.addAdvertisement(premiumAd);

    // act
    let appliedPromotions = calculator.getCustomerPromotion(cart);

    // assert
    expect(appliedPromotions.length).toEqual(1);
  });

  it('CheckoutCalculator should sum all advertisements for default customer', () => {
    // setup
    let calculator = new CheckoutCalculator();
    let cart = new ShoppingCart();

    let customer = defaultCustomer;
    cart.setCustomer(customer);

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

  it('CheckoutCalculator should discount standout advertisements for axilCoffeeRoasters', () => {
    // setup
    let calculator = new CheckoutCalculator();
    let cart = new ShoppingCart();

    let customer = axilCoffeeRoasters;
    cart.setCustomer(customer);

    cart.addAdvertisement(normalAd);
    cart.addAdvertisement(stdOutAd);
    cart.addAdvertisement(stdOutAd);
    cart.addAdvertisement(stdOutAd);
    cart.addAdvertisement(premiumAd);

    // act
    let total = calculator.total(cart);

    // assert
    expect(total).toEqual(normalAd.price + (299.99 * 3) + premiumAd.price);
  });

  it('CheckoutCalculator should discount premium advertisements for MYER', () => {
    // setup
    let calculator = new CheckoutCalculator();
    let cart = new ShoppingCart();

    let customer = myer;
    cart.setCustomer(customer);

    cart.addAdvertisement(normalAd);
    cart.addAdvertisement(stdOutAd);
    cart.addAdvertisement(stdOutAd);
    cart.addAdvertisement(stdOutAd);
    cart.addAdvertisement(premiumAd);
    cart.addAdvertisement(premiumAd);

    // act
    let total = calculator.total(cart);

    // assert
    expect(total).toEqual(normalAd.price + (stdOutAd.price * 3) + (389.99 * 2));
  });

  it('CheckoutCalculator should do 5 for 4 deals on stand out advertisements for MYER', () => {
    // setup
    let calculator = new CheckoutCalculator();
    let cart = new ShoppingCart();

    let customer = myer;
    cart.setCustomer(customer);

    cart.addAdvertisement(normalAd);
    cart.addAdvertisement(stdOutAd);
    cart.addAdvertisement(stdOutAd);
    cart.addAdvertisement(stdOutAd);
    cart.addAdvertisement(stdOutAd);
    cart.addAdvertisement(stdOutAd);

    cart.addAdvertisement(stdOutAd);
    cart.addAdvertisement(stdOutAd);
    cart.addAdvertisement(stdOutAd);
    cart.addAdvertisement(stdOutAd);
    cart.addAdvertisement(stdOutAd);

    cart.addAdvertisement(stdOutAd);

    // act
    let total = calculator.total(cart);

    // assert
    let totalPriceAssert = Math.round((normalAd.price + (stdOutAd.price * 9)) * 100) / 100;
    expect(total).toEqual(totalPriceAssert);
  });

  it('CheckoutCalculator should do 5 for 4 deals on stand out and discount premium for MYER', () => {
    // setup
    let calculator = new CheckoutCalculator();
    let cart = new ShoppingCart();

    let customer = myer;
    cart.setCustomer(customer);

    cart.addAdvertisement(normalAd);
    cart.addAdvertisement(stdOutAd);
    cart.addAdvertisement(stdOutAd);
    cart.addAdvertisement(stdOutAd);
    cart.addAdvertisement(stdOutAd);
    cart.addAdvertisement(stdOutAd);

    cart.addAdvertisement(stdOutAd);
    cart.addAdvertisement(stdOutAd);
    cart.addAdvertisement(stdOutAd);
    cart.addAdvertisement(stdOutAd);
    cart.addAdvertisement(stdOutAd);

    cart.addAdvertisement(stdOutAd);

    cart.addAdvertisement(premiumAd);
    cart.addAdvertisement(premiumAd);

    // act
    let total = calculator.total(cart);

    // assert
    let totalPriceAssert = Math.round((normalAd.price + (stdOutAd.price * 9) + (389.99 * 2)) * 100) / 100;
    expect(total).toEqual(totalPriceAssert);
  });

  it('CheckoutCalculator should do 3 for 2 deals on classic ads for SecondBite', () => {
    // setup
    let calculator = new CheckoutCalculator();
    let cart = new ShoppingCart();

    let customer = secondBite;
    cart.setCustomer(customer);

    cart.addAdvertisement(normalAd);
    cart.addAdvertisement(normalAd);
    cart.addAdvertisement(normalAd);
    cart.addAdvertisement(stdOutAd);
    cart.addAdvertisement(premiumAd);

    // act
    let total = calculator.total(cart);

    // assert
    let totalPriceAssert = Math.round(((normalAd.price * 2) + (stdOutAd.price * 1) + (premiumAd.price * 1)) * 100) / 100;
    expect(total).toEqual(totalPriceAssert);
  });

  it('CheckoutCalculator should do fourty percent discount on all ads for SEEK', () => {
    // setup
    let calculator = new CheckoutCalculator();
    let cart = new ShoppingCart();

    let customer = seek;
    cart.setCustomer(customer);

    cart.addAdvertisement(normalAd);
    cart.addAdvertisement(normalAd);
    cart.addAdvertisement(normalAd);
    cart.addAdvertisement(stdOutAd);
    cart.addAdvertisement(premiumAd);

    // act
    let total = calculator.total(cart);

    // assert
    let totalPriceAssert = Math.round(((normalAd.price * 3) + (stdOutAd.price * 1) + (premiumAd.price * 1)) * 100 * 0.6) / 100;
    expect(total).toEqual(totalPriceAssert);
  });
});
