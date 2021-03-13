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

  constructor(private http: HttpClient, private httpService: HttpService) {
    this.product = new Product();
  }

  ngOnInit(): void {
  }

  addNewProduct(): void {
    console.log('newProductName', this.product);

    this.httpService.createNewProduct(this.product).subscribe((response) => {
      console.log('response', response);
      this.productTableComponent.addNewProductToTable(response);
    });
  }
}
