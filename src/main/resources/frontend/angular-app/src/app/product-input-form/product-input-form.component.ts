import {Component, OnInit, ViewChild} from '@angular/core';
import {Product} from "../product";
import {HttpClient} from "@angular/common/http";
import {HttpService} from '../http-service';
import {ProductsTableComponent} from "../products-table/products-table.component";

@Component({
  selector: 'app-product-input-form',
  templateUrl: './product-input-form.component.html',
  styleUrls: ['./product-input-form.component.css'],
})
export class ProductInputFormComponent implements OnInit {
  @ViewChild(ProductsTableComponent) productTableComponent: ProductsTableComponent;

  product: Product;

  edited = false;

  constructor(private http: HttpClient, private httpService: HttpService) {
    this.product = new Product();
  }

  ngOnInit(): void {
  }

  saveNewProduct(): void {
    console.log('newProductName', this.product);

    if (!this.edited) {
      console.log('createNewProduct');
      this.createNewProduct();
    }
    else {
      console.log('updateProduct');
      this.updateProduct();
    }


  }
  updateProduct(): void {
    console.log('updateProduct(): void');
    this.httpService.editProduct(this.product).subscribe((response) => {
      // response
      console.log('addEditedProductToTable: responce', response);

      this.addEditedProductToTable();
    });
  }

  createNewProduct(): void {
    this.httpService.createNewProduct(this.product).subscribe((response) => {
      console.log('response', response);
      this.addNewProductToTable(response);
      // this.productTableComponent.addNewProductToTable(response);
    });
  }

  addEditedProductToTable(): void {
    this.productTableComponent.addEditedProductToTable(this.product);
  }

  addNewProductToTable(response: Product): void {
    console.log('this.productTableComponent.addNewProductToTable');

    this.productTableComponent.addNewProductToTable(response);
  }


  productEditedHandler(editedProduct: Product): void {
    console.log('editedProduct', editedProduct);
    this.product = Product.initNewProduct(editedProduct);
    this.edited = true;
    console.log('this.product', this.product);
  }

  cancelEdition(): void {
    this.product = new Product();
    this.edited = false;
  }
}
