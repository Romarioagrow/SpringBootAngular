import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Product} from "../product";
import {HttpClient} from "@angular/common/http";
import {SharedDataService} from '../data-service';
// @ts-ignore
import EventEmitter = require("events");
import {ProductsTableComponent} from "../products-table/products-table.component";

@Component({
  selector: 'app-product-input-form',
  templateUrl: './product-input-form.component.html',
  styleUrls: ['./product-input-form.component.css'],
  providers: [SharedDataService]
})
export class ProductInputFormComponent implements OnInit {
  @ViewChild(ProductsTableComponent) component: ProductsTableComponent;
  ///@Input() newProduct: Product;

//  @Output() childToParent = new EventEmitter<Product>();

  product: Product;

  constructor(private http: HttpClient, private sharedDataService: SharedDataService) {
    this.product = new Product();
  }

  ngOnInit(): void {
  }

  /*confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }
  */
  addNewProduct() {
    console.log('newProductName', this.product);
    //console.log('newProductName', this.product.name)

    const url_ADD_NEW_PRODUCT = 'http://localhost:9000/api/products/create';



    return this.http.post<Product[]>(url_ADD_NEW_PRODUCT, this.product).subscribe(response => {
      console.log(response);

      this.component.addNewProductToTable(this.product);

      //this.childToParent.emit(this.product);

      //this.component.tableProducts.push(this.product);

      //this.sharedDataService.addNewProduct(this.product);



      this.product = new Product();



      /*TODO: add new product to products table
      *
      * */

    });
  }

  childToParent($event: any) {

  }
}
