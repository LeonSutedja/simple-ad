import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAdShopComponent } from './simple-ad-shop.component';

describe('SimpleAdShopComponent', () => {
  let component: SimpleAdShopComponent;
  let fixture: ComponentFixture<SimpleAdShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleAdShopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleAdShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('create should set customers and advertisement list', () => {
    expect(component.customers.length).toBeGreaterThan(0);
    expect(component.advertisements.length).toBeGreaterThan(0);
  });

  it('reset should set everything to the beginning', () => {
    component.hasCustomerSelected = true;
    component.showShoppingCart = true;
    component.showCheckout = true;
    component.total = 1.90;
    component.reset();
    expect(component.showShoppingCart).toBeFalse();
    expect(component.hasCustomerSelected).toBeFalse();
    expect(component.shoppingCart.customer).toBeUndefined();
    expect(component.shoppingCart.advertisements).toEqual([]);
    expect(component.showCheckout).toBeFalse();
    expect(component.appliedPromotions).toEqual([]);
    expect(component.total).toEqual(0.00);
  });

  it('select customer should set hasCustomerSelected', () => {
    component.selectCustomer(11);
    expect(component.shoppingCart.customer).toBeTruthy();
    expect(component.hasCustomerSelected).toBeTrue();
  });

  it('add advertisement should set show shopping cart, and add advertisement to shopping cart', () => {
    component.addAdvertisement(11);
    expect(component.shoppingCart.advertisements.length).toBeGreaterThan(0);
    expect(component.showShoppingCart).toBeTrue();
  });

  it('remove advertisement should remove advertisement', () => {
    component.addAdvertisement(11);
    component.removeAdvertisement(0);
    expect(component.shoppingCart.advertisements.length).toEqual(0);
    expect(component.showShoppingCart).toBeTrue();
  });

  it('checkout should show checkout', () => {
    component.selectCustomer(11);
    component.addAdvertisement(11);
    component.checkout();
    expect(component.showCheckout).toBeTrue();
    expect(component.total).toBeTruthy();
  });
});
