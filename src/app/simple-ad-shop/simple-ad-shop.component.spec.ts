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

  it('should create', () => {
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
    component.reset();
    expect(component.showShoppingCart).toBeFalse();
    expect(component.hasCustomerSelected).toBeFalse();
    expect(component.shoppingCart.customer).toBeUndefined();
    expect(component.shoppingCart.advertisements).toEqual([]);
    expect(component.showCheckout).toBeFalse();
    expect(component.appliedPromotions).toEqual([]);
  });
});
