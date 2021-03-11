import {Component, OnInit} from '@angular/core';
import {Product} from "../product";


@Component({
  selector: 'app-product-input-form',
  templateUrl: './product-input-form.component.html',
  styleUrls: ['./product-input-form.component.css']
})
export class ProductInputFormComponent implements OnInit {
  product: Product;

  constructor() {
    this.product = new Product()
  }

  ngOnInit(): void {
  }

  addNewProduct() {
    console.log('newProductName', this.product)
    console.log('newProductName', this.product.name)
  }
}
