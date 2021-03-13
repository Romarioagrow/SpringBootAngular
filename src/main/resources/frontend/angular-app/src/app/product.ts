export class Product {

  constructor() {
  }

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

