import { Injectable } from '@angular/core';
import { Customer } from './model/customer';
import { Observable, of } from 'rxjs';
import { CUSTOMERS } from './data/mock-customers';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  /* pretend this service retrieve a list of customers somewhere */
  constructor() { }

  getCustomers(): Observable<Customer[]> {
    return of(CUSTOMERS);
  }

  getCustomer(id: number): Observable<Customer | undefined> {
    return of(CUSTOMERS.find(cust => cust.id === id));
  }
}
