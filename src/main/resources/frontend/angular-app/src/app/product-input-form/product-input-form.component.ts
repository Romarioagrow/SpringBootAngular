import {Component, OnInit} from '@angular/core';
import {Product} from "../product";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-product-input-form',
  templateUrl: './product-input-form.component.html',
  styleUrls: ['./product-input-form.component.css']
})
export class ProductInputFormComponent implements OnInit {
  product: Product;

  constructor(private http: HttpClient) {
    this.product = new Product()
  }

  ngOnInit(): void {
  }

  addNewProduct() {
    console.log('newProductName', this.product)
    console.log('newProductName', this.product.name)

    const url_ADD_NEW_PRODUCT = 'http://localhost:9000/api/products/create'

    return this.http.post<Product[]>(url_ADD_NEW_PRODUCT, this.product).subscribe(response => {
      console.log(response)

      /*TODO: add new product to products table
      *
      * */

    });
  }
}
