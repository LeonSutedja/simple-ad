export class Advertisement {
  static new(id: number, name: string, description: string, price: number) : Advertisement
  {
    return new Advertisement(id, name, description, price);
  }

  id: number;
  name: string;
  description: string;
  price: number;

  private constructor(id: number, name: string, description: string, price: number)
  {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
  }
}
