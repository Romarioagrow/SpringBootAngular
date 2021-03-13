export class Product {
  /*private UUID productId;
  private String name, articul;
  private Integer price, amount;
  private LocalDate productionDate;*/
  constructor() {}

  /*constructor(product: Product
    /!*public productId: string = '',
    public name: string = '',
    public articul: string = '',
    public price: number,
    public amount: number*!/

  ) {
    this.name = product.name;
    this.articul = product.articul;
    this.price = product.price;
    this.amount = product.amount;
  }*/

  productId: string;
  name: string;
  articul: string;
  price: number;
  amount: number;
  productionDate: Date;

  public static initNewProduct(product: Product): Product {
    let newProduct = new Product();
    newProduct.productId = product.productId;
    newProduct.name = product.name;
    newProduct.articul = product.articul;
    newProduct.price = product.price;
    newProduct.amount = product.amount;
    newProduct.productionDate = product.productionDate;
    return newProduct;
  }

}

