import {Component, isDevMode, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../product';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  displayedColumns: string[] =
    ['productID', 'productName', 'productType', 'productPrice', 'amount', 'productionDate', 'actions'];
  tableProducts: Object = [];

  ngOnInit(): void {

    this.findAll();

    /*let apiUrl = 'api/products'
    let url = isDevMode() ? 'http://localhost:9000/app-cli/' + apiUrl : apiUrl
    console.log('let url: ' + url)

    this.http.get(url,{
      headers: {'Access-Control-Allow-Origin':'*'}
    }).subscribe(data => {
      console.log(data);
      if (data) {
        this.dataSource = data;
      }
    });*/
  }

  public findAll(): any {
    const url = 'http://localhost:9000/api/products/get/all';
    return this.http.get<Product[]>(url).subscribe(data => {
      console.log(data);
      console.log(data);

      if (data) {
        console.log('data', data);
        this.tableProducts = data;
      }
    });
  }

  createProductsList() {
    console.log('createProductsList');

    const apiUrl = 'api/products/createList';
    const url = isDevMode() ? 'http://localhost:8080/app-cli/' + apiUrl : apiUrl;
    console.log('createProductsList url: ' + url);

    this.http.get(url, {
      headers: {'Access-Control-Allow-Origin': '*'}
    }).subscribe(data => {
      console.log(data);
      if (data) {
        console.log(data);
        this.tableProducts = data;
      }
    });

  }

  editProduct(product: Product) {

    console.log('edit', product);

  }

  deleteProduct(product: Product) {

    console.log('delete', product);

  }
}
