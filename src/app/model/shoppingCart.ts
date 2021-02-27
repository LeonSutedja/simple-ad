import { Advertisement } from "./advertisement";
import { Customer } from "./customer";

export class ShoppingCart {
  customer: Customer | undefined = undefined;
  advertisements: Advertisement[] = [];

  constructor() {
  }

  setCustomer(cust: Customer) {
    this.customer = cust;
  }

  addAdvertisement(ad: Advertisement) {
    this.advertisements.push(ad);
  }

  removeAdvertisement(index: number) {
    this.advertisements.splice(index, 1);
  }

  empty() {
    this.customer = undefined;
    this.advertisements = [];
  }
}
