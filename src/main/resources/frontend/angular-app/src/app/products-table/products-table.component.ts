import {Component, isDevMode, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../product";

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  displayedColumns: string[] = ['productID', 'productName', 'productType', 'productPrice'];
  dataSource: Object = [{}];

  ngOnInit(): void {

    this.findAll();

  }

  public findAll(): any {
    const url = 'http://localhost:9000/api/products/get/all'
    return this.http.get<Product[]>(url).subscribe(data => {
      console.log(data)
      console.log(data)

      if (data) {
        console.log('data', data)
        this.dataSource = data
      }
    });
  }

  createProductsList() {
    console.log('createProductsList')

    let apiUrl = 'api/products/createList'
    let url = isDevMode() ? 'http://localhost:8080/app-cli/' + apiUrl : apiUrl
    console.log('createProductsList url: ' + url)

    this.http.get(url, {
      headers: {'Access-Control-Allow-Origin': '*'}
    }).subscribe(data => {
      console.log(data);
      if (data) {
        console.log(data)
        this.dataSource = data
      }
    });
  }
}
