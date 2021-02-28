export class Customer {
  static new(id: number, name: string) : Customer {
    return new Customer(id, name);
  }

  readonly id: number;
  readonly name: string;

  private constructor(id: number, name: string)
  {
    this.id = id;
    this.name = name;
  }
}
