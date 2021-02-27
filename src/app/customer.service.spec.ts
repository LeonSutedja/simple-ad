import { TestBed } from '@angular/core/testing';

import { CustomerService } from './customer.service';

describe('CustomerService', () => {
  let service: CustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return customer list', () => {
    service.getCustomers().subscribe(
      list => expect(list.length).toBeGreaterThan(0)
    );
  });

  it('should return customer with id', () => {
    service.getCustomer(11).subscribe(
      model => expect(model?.id).toEqual(11)
    );
  });

  it('should return undefined customer with unknown id', () => {
    service.getCustomer(8).subscribe(
      model => expect(model).toBeUndefined()
    );
  });
});
