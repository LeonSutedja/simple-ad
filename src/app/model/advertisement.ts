export class Advertisement {
  static new(id: number, name: string, description: string, price: number) : Advertisement
  {
    return new Advertisement(id, name, description, price);
  }

  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly price: number;

  private constructor(id: number, name: string, description: string, price: number)
  {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
  }
}
