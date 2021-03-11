import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-product-input-form',
  templateUrl: './product-input-form.component.html',
  styleUrls: ['./product-input-form.component.css']
})
export class ProductInputFormComponent implements OnInit {
  newProductName: any;

  constructor() { }

  ngOnInit(): void {
  }

  addNewProduct() {
    console.log('addNewProduct')
    console.log('newProductName', this.newProductName)
  }
}
